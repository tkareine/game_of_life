(function (GoL, _) {
  "use strict";
  var CT = GoL.Support.CellTypes;
  var S  = GoL.Support;

  function aliveNeighbours(generation, x, y) {
    var sum = 0;
    var existingX = _.select([x-1, x, x+1], function(i) {
      return i >= 0 && i < generation[0].length;
    });
    var existingY = _.select([y-1, y, y+1], function(i) {
      return i >= 0 && i < generation.length;
    });

    _.each(existingX, function(neighbourX) {
      _.each(existingY, function(neighbourY) {
        if (neighbourX === x && neighbourY === y) return;
        if (generation[neighbourY][neighbourX] == CT.Alive) {
          sum += 1;
        }
      });
    });

    return sum;
  }

  function aliveNextRound(cell, aliveNeighbours) {
    if (aliveNeighbours < 0 || aliveNeighbours > 8) {
      throw new S.InvalidArgument('Invalid number of alive neighbours. 0-8 expected.')
    }

    if (cell === CT.Dead) {
      return aliveNeighbours == 3;
    }

    return aliveNeighbours === 2 || aliveNeighbours === 3;
  };

  GoL.Generation = {
    tick: function (generation) {
      return _.map(generation, function(row, y) {
          return _.map(row, function(cell, x) {
              return aliveNextRound(cell, aliveNeighbours(generation, x, y)) ? CT.Alive : CT.Dead;
          });
      });
    },

    aliveNextRound: aliveNextRound,
    aliveNeighbours: aliveNeighbours
  };

})(GameOfLife, _);
