/*!
 * An implementation of Conway's Game of Life.
 *
 * Version: $VERSION
 * <https://github.com/tkareine/game_of_life>
 *
 * Requires Underscore 1.1.6 or newer.
 *
 * Copyright (c) 2011 Tuomas Kareinen. Licensed under the MIT license.
 */
(function (_) {
  "use strict";

  window.GameOfLife = function (seed, canvas) {
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
