this.GameOfLife = function (seed, canvas) {
  var GoL               = GameOfLife,
      currentGeneration = GoL.Support.parseCellGrid(seed),
      graphics          = GoL.Graphics(GoL.Support.validateCanvas(canvas), currentGeneration);

  return {
    evolve: function () {
      throw 'TODO: Implement me';
    }
  };
};
