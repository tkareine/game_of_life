(function (GoL) {
  var CT = {
    Dead:  {},
    Alive: {}
  };

  function cellSymbolToObject(symbol) {
    switch (symbol) {
      case '.':
        return CT.Dead;
      case '*':
        return CT.Alive;
      default:
        throw new Error('Invalid argument: unknown cell symbol in zero generation: ' + symbol);
    }
  }

  GoL.Support = {
      CellTypes: CT
    , parseCanvas: function (canvas) {
        if (!canvas || !canvas[0] || !canvas[0].getContext) {
          throw new Error("Invalid argument: not a canvas element");
        }
        return canvas[0];
      }
    , parseCellGrid: function (layout) {
        var rows = layout.trim().split("\n")
          , grid
          , gridWidth
          , gridIsSquare;

        if (rows.length < 1) {
          throw new Error("Invalid argument: cell grid is too small");
        }

        grid = _.map(rows, function (row) { return _.map(row.split(''), cellSymbolToObject) });
        gridWidth = grid.length;
        gridIsSquare = _.all(grid, function (row) { return row.length === gridWidth });

        if (!gridIsSquare) {
          throw new Error('Invalid argument: cell grid is not a square');
        }

        return grid;
      }
  };
})(GameOfLife);
