(function (GoL, _) {
  "use strict";

  var cellNameToSymbol = { Alive: '*', Dead: '.' };

  function InvalidArgument(message) {
    this.name       = 'InvalidArgument';
    this.message    = message;
  }

  InvalidArgument.prototype = new Error();

  function invertObject(object) {
    return _(object).chain()
      .map(function (val, key) { return [val, key]; })
      .reduce(function (memo, valKey) { memo[valKey[0]] = valKey[1]; return memo; }, {})
      .value();
  }

  function gridIsRectangle(grid) {
    var gridWidth = grid[0].length;
    return _.all(grid, function (row) { return row.length === gridWidth; });
  }

  GoL.Support = {
    InvalidArgument: InvalidArgument,
    CellTypes: cellNameToSymbol,
    invertObject: invertObject,
    validateCanvas: function (canvas) {
      if (!canvas || !_.isFunction(canvas.getContext)) {
        throw new InvalidArgument('Not a canvas element');
      }
      return canvas;
    },
    parseCellGrid: function (layout) {
      var rows = layout.trim().split("\n")
        , cellSymbolToName;

      function parseCell(symbol) {
        var obj = cellSymbolToName[symbol];
        if (obj === undefined) {
          throw new InvalidArgument('Unknown cell symbol: ' + symbol);
        }
        return cellNameToSymbol[obj];
      }

      if (rows[0].length < 1) {
        throw new InvalidArgument('Cell grid is not a two-dimensional matrix');
      }

      if (!gridIsRectangle(rows)) {
        throw new InvalidArgument('Cell grid is not a rectangle');
      }

      cellSymbolToName = invertObject(cellNameToSymbol);

      return _.map(rows, function (row) { return _.map(row.split(''), parseCell); });
    }
  };
})(GameOfLife, _);
