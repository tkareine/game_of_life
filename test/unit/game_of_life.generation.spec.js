describe('Generation module', function () {
  var G           = GameOfLife.Generation,
      CT          = GameOfLife.Support.CellTypes,
      Generations = {
        allDead: [
          [ CT.Dead,  CT.Dead,  CT.Dead  ],
          [ CT.Dead,  CT.Dead,  CT.Dead  ],
          [ CT.Dead,  CT.Dead,  CT.Dead  ]
        ],
        singleAlive: [
          [ CT.Dead,  CT.Dead,  CT.Dead  ],
          [ CT.Dead,  CT.Alive, CT.Dead  ],
          [ CT.Dead,  CT.Dead,  CT.Dead  ]
        ],
        blockStillLive: [
          [ CT.Dead,  CT.Dead,  CT.Dead  ],
          [ CT.Dead,  CT.Alive, CT.Alive ],
          [ CT.Dead,  CT.Alive, CT.Alive ]
        ],
        blinkerOscillatorHorizontal: [
          [ CT.Dead,  CT.Dead,  CT.Dead  ],
          [ CT.Alive, CT.Alive, CT.Alive ],
          [ CT.Dead,  CT.Dead,  CT.Dead  ]
        ],
        blinkerOscillatorVertical: [
          [ CT.Dead,  CT.Alive, CT.Dead  ],
          [ CT.Dead,  CT.Alive, CT.Dead  ],
          [ CT.Dead,  CT.Alive, CT.Dead  ]
        ],
        gliderSpaceshipPhase1: [
          [ CT.Dead,  CT.Dead,  CT.Alive, CT.Dead  ],
          [ CT.Alive, CT.Dead,  CT.Alive, CT.Dead  ],
          [ CT.Dead,  CT.Alive, CT.Alive, CT.Dead  ],
          [ CT.Dead,  CT.Dead,  CT.Dead,  CT.Dead  ]
        ],
        gliderSpaceshipPhase2: [
          [ CT.Dead,  CT.Alive, CT.Dead,  CT.Dead  ],
          [ CT.Dead,  CT.Dead,  CT.Alive, CT.Alive ],
          [ CT.Dead,  CT.Alive, CT.Alive, CT.Dead  ],
          [ CT.Dead,  CT.Dead,  CT.Dead,  CT.Dead  ]
        ]
      };

  describe('For evolving a cell', function () {
    it('evolves alive cell to alive if the cell has 2 or 3 neighbors', function () {
      expect(G.evolveCell(CT.Alive, 2)).toEqual(CT.Alive);
      expect(G.evolveCell(CT.Alive, 3)).toEqual(CT.Alive);
    });

    it('evolves alive cell to dead if the cell has less than 2 neighbors', function () {
      expect(G.evolveCell(CT.Alive, 1)).toEqual(CT.Dead);
    });

    it('evolves alive cell to dead if the cell has more than 3 neighbors', function () {
      expect(G.evolveCell(CT.Alive, 4)).toEqual(CT.Dead);
    });

    it('evolves dead cell to alive if the cell has 3 neighbors', function () {
      expect(G.evolveCell(CT.Dead, 3)).toEqual(CT.Alive);
    });

    it('evolves dead cell to dead if the cell has not 3 neighbors', function () {
      expect(G.evolveCell(CT.Dead, 2)).toEqual(CT.Dead);
      expect(G.evolveCell(CT.Dead, 4)).toEqual(CT.Dead);
    });
  });

  describe('For evolving the next generation (tick)', function () {
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
