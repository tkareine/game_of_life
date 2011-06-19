describe('Generation module', function () {
  var G           = GameOfLife.Generation
    , CT          = GameOfLife.Support.CellTypes
    , Generations = {
        allDead: [
            [ CT.Dead,  CT.Dead,  CT.Dead  ]
          , [ CT.Dead,  CT.Dead,  CT.Dead  ]
          , [ CT.Dead,  CT.Dead,  CT.Dead  ]
        ]
      , singleAlive: [
            [ CT.Dead,  CT.Dead,  CT.Dead  ]
          , [ CT.Dead,  CT.Alive, CT.Dead  ]
          , [ CT.Dead,  CT.Dead,  CT.Dead  ]
        ]
      , blockStillLive: [
            [ CT.Dead,  CT.Dead,  CT.Dead  ]
          , [ CT.Dead,  CT.Alive, CT.Alive ]
          , [ CT.Dead,  CT.Alive, CT.Alive ]
        ]
      , blinkerOscillatorHorizontal: [
            [ CT.Dead,  CT.Dead,  CT.Dead  ]
          , [ CT.Alive, CT.Alive, CT.Alive ]
          , [ CT.Dead,  CT.Dead,  CT.Dead  ]
        ]
      , blinkerOscillatorVertical: [
            [ CT.Dead,  CT.Alive, CT.Dead  ]
          , [ CT.Dead,  CT.Alive, CT.Dead  ]
          , [ CT.Dead,  CT.Alive, CT.Dead  ]
        ]
      , gliderSpaceshipPhase1: [
            [ CT.Dead,  CT.Dead,  CT.Alive, CT.Dead  ]
          , [ CT.Alive, CT.Dead,  CT.Alive, CT.Dead  ]
          , [ CT.Dead,  CT.Alive, CT.Alive, CT.Dead  ]
          , [ CT.Dead,  CT.Dead,  CT.Dead,  CT.Dead  ]
        ]
      , gliderSpaceshipPhase2: [
            [ CT.Dead,  CT.Alive, CT.Dead,  CT.Dead  ]
          , [ CT.Dead,  CT.Dead,  CT.Alive, CT.Alive ]
          , [ CT.Dead,  CT.Alive, CT.Alive, CT.Dead  ]
          , [ CT.Dead,  CT.Dead,  CT.Dead,  CT.Dead  ]
        ]
    };

  describe('For evolvining the next generation (tick)', function () {
    it('evolves all dead cells to dead cells', function () {
      expect(G.tick(Generations.allDead)).toEqual(Generations.allDead);
    });

    it('evolves a lonely live cell to a dead cell', function () {
      expect(G.tick(Generations.singleAlive)).toEqual(Generations.allDead);
    });

    it('evolves cells in block still live formation to the same formation', function () {
      expect(G.tick(Generations.blockStillLive)).toEqual(Generations.blockStillLive);
    });

    it('evolves cells in blinker oscillator formation, from horizontal to vertical', function () {
      expect(G.tick(Generations.blinkerOscillatorHorizontal)).toEqual(Generations.blinkerOscillatorVertical);
    });

    it('evolves cells in blinker oscillator formation, from vertical to horizontal', function () {
      expect(G.tick(Generations.blinkerOscillatorVertical)).toEqual(Generations.blinkerOscillatorHorizontal);
    });

    it('evolves cells in glider spaceship formation, from phase 1 to 2', function () {
      expect(G.tick(Generations.gliderSpaceshipPhase1)).toEqual(Generations.gliderSpaceshipPhase2);
    });
  });
});
