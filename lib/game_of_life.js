function GameOfLife(zeroGeneration, canvas) {
  var GoL         = GameOfLife
    , canvas      = GoL.Support.parseCanvas(canvas)
    , generation  = GoL.Support.parseCellGrid(zeroGeneration);

  return {
    evolve: function () {
      var graphics        = GoL.Graphics(canvas, generation)
        , numGenerations  = 0;

      function doEvolve() {
        /*console.log("GENERATION")
        _.each(generation, function (row) {
          console.log(row)
        });*/

        graphics.drawFrame(generation, numGenerations);
        generation = GoL.Generation.tick(generation);
        numGenerations += 1;
      }

      doEvolve();
      setInterval(function () {
        doEvolve();
      }, 2000);
    }
  };
}
