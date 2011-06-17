function GameOfLife(zeroGeneration, canvas) {
  if (!canvas || !canvas[0] || !canvas[0].getContext) {
    throw new Error("Invalid argument: not a canvas element");
  }

  this.canvas = canvas[0];
  this.currentGeneration = GameOfLife.Support.parseCellGrid(zeroGeneration);
}

(function (GoL) {
  GoL.CellTypes = {
    Dead:  {},
    Alive: {}
  }

  GoL.prototype.evolve = function () {
    var graphics = GoL.Graphics(this.canvas, this.currentGeneration)
      , numGenerations = 0
      , that = this;

    function doEvolve() {
      graphics.drawFrame(that.currentGeneration, numGenerations);
      that.currentGeneration = GoL.Generation.tick(that.currentGeneration);
      numGenerations += 1;
    }

    doEvolve();
    setInterval(function () {
      doEvolve();
    }, 2000);
  }
})(GameOfLife);
