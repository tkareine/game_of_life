(function (GoL, _) {
  var CT        = { Alive: '*', Dead: '.' }
    , ctParser  = _(CT).chain()
        .map(function (val, key) { return [val, key]; })
        .reduce(function (memo, valKey) { memo[valKey[0]] = valKey[1]; return memo; }, {})
        .value();

  function InvalidArgument(message) {
    this.prototype  = Error.prototype;
    this.name       = 'InvalidArgument';
    this.message    = message;
    this.toString   = function () {
      return this.name + ': ' + this.message;
    };
  };

  function cellSymbolToObject(symbol) {
    var obj = ctParser[symbol];
    if (obj === undefined) {
      throw new InvalidArgument('Unknown cell symbol in zero generation: ' + symbol);
    }
    return CT[obj];
  }

  GoL.Support = {
      InvalidArgument: InvalidArgument
    , CellTypes: CT
    , validateCanvas: function (canvas) {
        if (!canvas || !_.isFunction(canvas.getContext)) {
          throw new InvalidArgument('Not a canvas element');
        }
        return canvas;
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
        gridWidth = grid[0].length;
        gridIsRectangle = _.all(grid, function (row) { return row.length === gridWidth });

        if (!gridIsRectangle) {
          throw new InvalidArgument('Cell grid is not a rectangle');
        }

        return grid;
      }
  };
})(GameOfLife, _);
