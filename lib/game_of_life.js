(function () {
  "use strict";

  window.GameOfLife = function (seed, canvas) {
    var GoL               = GameOfLife,
        currentGeneration = GoL.Support.parseCellGrid(seed),
        graphics          = GoL.Graphics(GoL.Support.validateCanvas(canvas), currentGeneration);

    return {
      evolve: function () {
        var counter = 0;
        function draw(generation) {
          graphics.drawFrame(generation, counter++);
          nextGeneration = GoL.Generation.tick(generation)
          if (_.isEqual(nextGeneration,generation)) {
            return;
          }
          setTimeout(function(){
            draw(nextGeneration);
          }, 10);
        }
        draw(currentGeneration);
      }
    };
  };
})();
