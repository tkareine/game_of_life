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

  describe('For evolvining the next generation (tick)', function () {
    // TODO: Write more tests
  });
});
