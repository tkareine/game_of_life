(function (GoL) {
  var CT = GoL.Support.CellTypes;

  GoL.Generation = {
    tick: function (generation) {
      var gridWidth   = generation.length
        , gridHeight  = generation[0].length;

      function coordinatesInGrid(x, y) {
        return (x >= 0 && x < gridWidth) && (y >= 0 && y < gridHeight);
      }

      function cellNeighborsCoordinates(x, y) {
        var candidates = [
            [x - 1, y - 1]
          , [x, y + 1]
          , [x + 1, y]
          , [x - 1, y]
        ];
        return _.select(candidates, function (xy) { return coordinatesInGrid(xy[0], xy[1]) });
      }

      function numberOfLiveCellNeighbors(generation, x, y) {
        return _.select(cellNeighborsCoordinates(x, y), function (xy) {
          return generation[xy[0]][xy[1]] === CT.Alive;
        }).length;
      }

      function evolveCell(cell, numLiveCellNeighbors) {
        if (cell === CT.Alive) {
          return (numLiveCellNeighbors >= 2 || numLiveCellNeighbors <= 3) ? CT.Alive : CT.Dead;
        } else {
          return numLiveCellNeighbors === 3 ? CT.Alive : CT.Dead;
        }
      }

      return _.map(generation, function (row, rowIndex) {
        return _.map(row, function (cell, colIndex) {
          return evolveCell(cell, numberOfLiveCellNeighbors(generation, rowIndex, colIndex));
        });
      });
    }
  };
})(GameOfLife);
