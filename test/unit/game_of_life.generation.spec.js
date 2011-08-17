describe('Generation module', function () {
  var G           = GameOfLife.Generation,
      S           = GameOfLife.Support,
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

  describe('Rules', function() {
    it('for staying alive', function() {
      expect(G.aliveNextRound(CT.Alive, 1)).toEqual(false);
      expect(G.aliveNextRound(CT.Alive, 2)).toEqual(true);
      expect(G.aliveNextRound(CT.Alive, 3)).toEqual(true);
      expect(G.aliveNextRound(CT.Alive, 4)).toEqual(false);
    });

    it('for being born', function(){
      expect(G.aliveNextRound(CT.Dead, 1)).toEqual(false);
      expect(G.aliveNextRound(CT.Dead, 2)).toEqual(false);
      expect(G.aliveNextRound(CT.Dead, 3)).toEqual(true);
      expect(G.aliveNextRound(CT.Dead, 4)).toEqual(false);
    });

    it('for invalid inputs throw all kinds of errors', function() {
      expect(function() {
        G.aliveNextRound(CT.Alive, 10)
      }).toThrow(new S.InvalidArgument('Invalid number of alive neighbours. 0-8 expected.'));

      expect(function() {
        G.aliveNextRound(CT.Alive, -1)
      }).toThrow(new S.InvalidArgument('Invalid number of alive neighbours. 0-8 expected.'));
    });
  });

  describe('For evolving the next generation (tick)', function () {
      it('Generation evolves', function() {
        expect(G.tick(Generations.allDead)).toEqual(Generations.allDead);
      });

      it('More complex generation evolves', function() {
        expect(G.tick(Generations.singleAlive)).toEqual(Generations.allDead);
      });

      it('Counts alive neighbours for a cell', function () {
        expect(G.aliveNeighbours(Generations.allDead, 1, 1)).toEqual(0);
        expect(G.aliveNeighbours(Generations.singleAlive, 0, 0)).toEqual(1);
      })
  });
});
