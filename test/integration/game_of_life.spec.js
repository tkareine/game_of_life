describe('Game of Life', function () {
  var GoF = GameOfLife,
      canvas = $('<canvas></canvas>'),
      seed =
        ".....*\n" +
        "......\n" +
        "......\n" +
        "......\n" +
        "...***\n",
      expectedHaltGeneration = GoF.Support.parseCellGrid(
        "....**\n" +
        "......\n" +
        "......\n" +
        "....**\n" +
        "*..*..\n"),
      expectedNumGenerations = 3,
      gfxDrawFrameSpy,
      gof;

  beforeEach(function () {
    // test the outcome via a spy version of Graphics object
    gfxDrawFrameSpy = jasmine.createSpy();
    spyOn(GoF, 'Graphics').andReturn({ drawFrame: gfxDrawFrameSpy });

    // call timeouts immediately so we get the results
    spyOn(window, 'setTimeout').andCallFake(function (callback, timeout) { callback(); });

    gof = GoF(seed, canvas[0]);
  });

  it('evolves generations until no change in the current generation', function () {
    gof.evolve();
    expect(gfxDrawFrameSpy.mostRecentCall.args).toEqual([expectedHaltGeneration, expectedNumGenerations]);
    expect(gfxDrawFrameSpy.callCount).toEqual(expectedNumGenerations + 1);
  });
});
