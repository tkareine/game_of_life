(function (GoL, _) {
  var CT = { Dead: {}, Alive: {} };

  function InvalidArgument(message) {
    this.prototype  = Error.prototype;
    this.name       = 'InvalidArgument';
    this.message    = message;
    this.toString   = function () {
      return this.name + ': ' + this.message;
    };
  };

  function cellSymbolToObject(symbol) {
    switch (symbol) {
      case '.':
        return CT.Dead;
      case '*':
        return CT.Alive;
      default:
        throw new InvalidArgument('Unknown cell symbol in zero generation: ' + symbol);
    }
  }

  GoL.Support = {
      CellTypes: CT
    , parseCanvas: function (canvas) {
        if (!canvas || !canvas[0] || !canvas[0].getContext) {
          throw new InvalidArgument("Not a canvas element");
        }
        return canvas[0];
      }
    , parseCellGrid: function (layout) {
        var rows = layout.trim().split("\n")
          , grid
          , gridWidth
          , gridIsSquare;

        if (rows.length < 1) {
          throw new InvalidArgument('Cell grid is too small');
        }

        grid = _.map(rows, function (row) { return _.map(row.split(''), cellSymbolToObject) });
        gridWidth = grid.length;
        gridIsSquare = _.all(grid, function (row) { return row.length === gridWidth });

        if (!gridIsSquare) {
          throw new InvalidArgument('Cell grid is not a square');
        }

        return grid;
      }
  };
})(GameOfLife, _);
