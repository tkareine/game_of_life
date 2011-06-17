function GameOfLife(zeroGeneration, canvas) {
  var GoL = GameOfLife
    , canvas = GoL.Support.parseCanvas(canvas)
    , currentGeneration = GoL.Support.parseCellGrid(zeroGeneration);

  return {
    evolve: function () {
      var graphics = GoL.Graphics(canvas, currentGeneration)
        , numGenerations = 0;

      function doEvolve() {
        graphics.drawFrame(currentGeneration, numGenerations);
        currentGeneration = GoL.Generation.tick(currentGeneration);
        numGenerations += 1;
      }

      doEvolve();
      setInterval(function () {
        doEvolve();
      }, 2000);
    }
  };
}
