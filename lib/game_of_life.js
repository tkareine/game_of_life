(function (_) {
  this.GameOfLife = function (seed, canvas) {
    var GoL               = GameOfLife,
        currentGeneration = GoL.Support.parseCellGrid(seed),
        graphics          = GoL.Graphics(GoL.Support.validateCanvas(canvas), currentGeneration);

    function generationHasEvolved(previousGeneration, currentGeneration) {
      return !_.isEqual(previousGeneration, currentGeneration);
    }

    return {
      evolve: function () {
        var numGenerations = 0,
            previousGeneration;

        function evolveUntilHalt() {
          graphics.drawFrame(currentGeneration, numGenerations);
          previousGeneration = currentGeneration;
          currentGeneration = GoL.Generation.tick(previousGeneration);

          if (generationHasEvolved(previousGeneration, currentGeneration)) {
            numGenerations += 1;
            setTimeout(evolveUntilHalt, 1000);
          }
        }

        evolveUntilHalt();
      }
    };
  };
})(_);
