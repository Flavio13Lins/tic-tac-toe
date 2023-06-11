const plays = [
  // STAGES 7
  {
    stage: 7,
    play: 'positionH',
    status: {
      positionA: 1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 1,
      positionF: 0,

      positionG: 0,
      positionH: -1,
      positionI: 0
    }
  },
  {
    stage: 7,
    play: 'positionI',
    status: {
      positionA: 1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 1,
      positionF: 0,

      positionG: 0,
      positionH: 0,
      positionI: -1
    }
  },
  {
    stage: 7,
    play: 'positionI',
    status: {
      positionA: 1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: 0,
      positionE: 1,
      positionF: 0,

      positionG: 0,
      positionH: -1,
      positionI: -1
    }
  },
  {
    stage: 7,
    play: 'positionD',
    status: {
      positionA: 1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 0,
      positionF: -1,

      positionG: 0,
      positionH: 1,
      positionI: 0
    }
  },
  {
    stage: 7,
    play: 'positionD',
    status: {
      positionA: 1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 0,
      positionF: 0,

      positionG: -1,
      positionH: 1,
      positionI: 0
    }
  },
  {
    stage: 7,
    play: 'positionF',
    status: {
      positionA: 1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: 0,
      positionE: 0,
      positionF: -1,

      positionG: -1,
      positionH: 1,
      positionI: 0
    }
  },
  {
    stage: 7,
    play: 'positionH',
    status: {
      positionA: 1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: 1,
      positionE: 0,
      positionF: 0,

      positionG: 0,
      positionH: -1,
      positionI: -1
    }
  },
  {
    stage: 7,
    play: 'positionB',
    status: {
      positionA: 1, // 0 for O // 1 for X
      positionB: -1,
      positionC: 1,

      positionD: 1,
      positionE: 0,
      positionF: 0,

      positionG: 0,
      positionH: -1,
      positionI: 0
    }
  },
  {
    stage: 7,
    play: 'positionB',
    status: {
      positionA: 1, // 0 for O // 1 for X
      positionB: -1,
      positionC: 1,

      positionD: 1,
      positionE: 0,
      positionF: 0,

      positionG: 0,
      positionH: 0,
      positionI: -1
    }
  },
  {
    stage: 7,
    play: 'positionD',
    status: {
      positionA: 1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 0,
      positionF: -1,

      positionG: 0,
      positionH: 1,
      positionI: 0
    }
  },
  {
    stage: 7,
    play: 'positionD',
    status: {
      positionA: 1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 0,
      positionF: 0,

      positionG: -1,
      positionH: 1,
      positionI: 0
    }
  },
  {
    stage: 7,
    play: 'positionF',
    status: {
      positionA: 1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: 0,
      positionE: 0,
      positionF: -1,

      positionG: -1,
      positionH: 1,
      positionI: 0
    }
  },
  {
    stage: 7,
    play: 'positionD',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 0,
      positionF: 0,

      positionG: 0,
      positionH: 1,
      positionI: 1
    }
  },
  {
    stage: 7,
    play: 'positionF',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: 0,
      positionE: 0,
      positionF: -1,

      positionG: 0,
      positionH: 1,
      positionI: 1
    }
  },
  {
    stage: 7,
    play: 'positionF',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 0,
      positionF: -1,

      positionG: 0,
      positionH: 1,
      positionI: 1
    }
  },
  {
    stage: 7,
    play: 'positionA',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: 1,
      positionE: 0,
      positionF: 0,

      positionG: -1,
      positionH: 1,
      positionI: 0
    }
  },
  {
    stage: 7,
    play: 'positionA',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: 1,
      positionE: 0,
      positionF: 0,

      positionG: 0,
      positionH: 1,
      positionI: -1
    }
  },
  {
    stage: 7,
    play: 'positionI',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: 1,
      positionE: 0,
      positionF: 0,

      positionG: -1,
      positionH: 1,
      positionI: -1
    }
  },
  {
    stage: 7,
    play: 'positionA',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: 0,
      positionE: 0,
      positionF: 1,

      positionG: -1,
      positionH: 1,
      positionI: 0
    }
  },
  {
    stage: 7,
    play: 'positionI',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: 0,
      positionE: 0,
      positionF: 1,

      positionG: 0,
      positionH: 1,
      positionI: -1
    }
  },
  {
    stage: 7,
    play: 'positionI',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: 0,
      positionE: 0,
      positionF: 1,

      positionG: -1,
      positionH: 1,
      positionI: -1
    }
  },
  {
    stage: 7,
    play: 'positionG',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 0,
      positionF: 0,

      positionG: -1,
      positionH: 1,
      positionI: 1
    }
  },
  {
    stage: 7,
    play: 'positionF',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 0,
      positionF: -1,

      positionG: 0,
      positionH: 1,
      positionI: 1
    }
  },
  {
    stage: 7,
    play: 'positionF',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: 0,
      positionE: 0,
      positionF: -1,

      positionG: -1,
      positionH: 1,
      positionI: 1
    }
  },
  {
    stage: 7,
    play: 'positionC',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 1,
      positionC: -1,

      positionD: -1,
      positionE: 1,
      positionF: 0,

      positionG: 1,
      positionH: 0,
      positionI: 0
    }
  },
  {
    stage: 7,
    play: 'positionC',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 1,
      positionC: -1,

      positionD: 0,
      positionE: 1,
      positionF: -1,

      positionG: 1,
      positionH: 0,
      positionI: 0
    }
  },
  {
    stage: 7,
    play: 'positionF',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 1,
      positionC: 0,

      positionD: -1,
      positionE: 1,
      positionF: -1,

      positionG: 1,
      positionH: 0,
      positionI: 0
    }
  },
  {
    stage: 7,
    play: 'positionI',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 1,
      positionC: 0,

      positionD: -1,
      positionE: 1,
      positionF: 0,

      positionG: 1,
      positionH: 0,
      positionI: -1
    }
  },
  {
    stage: 7,
    play: 'positionC',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 1,
      positionC: -1,

      positionD: -1,
      positionE: 1,
      positionF: 0,

      positionG: 1,
      positionH: 0,
      positionI: 0
    }
  },
  {
    stage: 7,
    play: 'positionC',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 1,
      positionC: -1,

      positionD: 0,
      positionE: 1,
      positionF: 0,

      positionG: 1,
      positionH: 0,
      positionI: -1
    }
  },
  {
    stage: 7,
    play: 'positionI',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 1,
      positionC: 0,

      positionD: 1,
      positionE: 1,
      positionF: 0,

      positionG: -1,
      positionH: 0,
      positionI: -1
    }
  },
  {
    stage: 7,
    play: 'positionF',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 1,
      positionC: 0,

      positionD: 1,
      positionE: 1,
      positionF: -1,

      positionG: -1,
      positionH: 0,
      positionI: 0
    }
  },
  {
    stage: 7,
    play: 'positionF',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 1,
      positionC: 0,

      positionD: 1,
      positionE: 1,
      positionF: -1,

      positionG: 0,
      positionH: 0,
      positionI: -1
    }
  },
  {
    stage: 7,
    play: 'positionA',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 1,
      positionF: 0,

      positionG: 0,
      positionH: 0,
      positionI: 1
    }
  },
  {
    stage: 7,
    play: 'positionA',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: 0,
      positionE: 1,
      positionF: 0,

      positionG: 0,
      positionH: -1,
      positionI: 1
    }
  },
  {
    stage: 7,
    play: 'positionD',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 1,
      positionF: 0,

      positionG: 0,
      positionH: -1,
      positionI: 1
    }
  },
  {
    stage: 7,
    play: 'positionH',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 0,
      positionF: 0,

      positionG: 1,
      positionH: -1,
      positionI: 1
    }
  },
  {
    stage: 7,
    play: 'positionE',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: -1,
      positionF: 0,

      positionG: 1,
      positionH: 0,
      positionI: 1
    }
  },
  {
    stage: 7,
    play: 'positionE',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: 0,
      positionE: -1,
      positionF: 0,

      positionG: 1,
      positionH: -1,
      positionI: 1
    }
  },
  {
    stage: 7,
    play: 'positionA',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: 0,
      positionE: 1,
      positionF: 0,

      positionG: -1,
      positionH: 0,
      positionI: 1
    }
  },
  {
    stage: 7,
    play: 'positionA',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: 0,
      positionE: 1,
      positionF: 0,

      positionG: 0,
      positionH: -1,
      positionI: 1
    }
  },
  {
    stage: 7,
    play: 'positionG',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: 0,
      positionE: 1,
      positionF: 0,

      positionG: -1,
      positionH: -1,
      positionI: 1
    }
  },
  {
    stage: 7,
    play: 'positionF',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: 0,
      positionE: 1,
      positionF: -1,

      positionG: 0,
      positionH: 0,
      positionI: 1
    }
  },
  {
    stage: 7,
    play: 'positionF',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 1,
      positionF: -1,

      positionG: 0,
      positionH: 0,
      positionI: 1
    }
  },
  {
    stage: 7,
    play: 'positionA',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 1,
      positionF: 0,

      positionG: 0,
      positionH: 0,
      positionI: 1
    }
  },
  {
    stage: 7,
    play: 'positionF',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: 1,
      positionE: 1,
      positionF: -1,

      positionG: 0,
      positionH: -1,
      positionI: 0
    }
  },
  {
    stage: 7,
    play: 'positionF',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: 1,
      positionE: 1,
      positionF: -1,

      positionG: 0,
      positionH: 0,
      positionI: -1
    }
  },
  {
    stage: 7,
    play: 'positionI',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: 1,
      positionE: 1,
      positionF: 0,

      positionG: 0,
      positionH: -1,
      positionI: -1
    }
  },
  {
    stage: 7,
    play: 'positionH',
    status: {
      positionA: 1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 0,

      positionD: 0,
      positionE: 0,
      positionF: 1,

      positionG: 1,
      positionH: -1,
      positionI: -1
    }
  },
  {
    stage: 7,
    play: 'positionH',
    status: {
      positionA: 1, // 0 for O // 1 for X
      positionB: -1,
      positionC: 0,

      positionD: 0,
      positionE: 0,
      positionF: 1,

      positionG: 1,
      positionH: -1,
      positionI: 0
    }
  },
  {
    stage: 7,
    play: 'positionB',
    status: {
      positionA: 1, // 0 for O // 1 for X
      positionB: -1,
      positionC: 0,

      positionD: 0,
      positionE: 0,
      positionF: 1,

      positionG: 1,
      positionH: 0,
      positionI: -1
    }
  },
  {
    stage: 7,
    play: 'positionA',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: 0,
      positionE: 1,
      positionF: -1,

      positionG: 0,
      positionH: 1,
      positionI: 0
    }
  },
  {
    stage: 7,
    play: 'positionD',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 1,
      positionF: 0,

      positionG: 0,
      positionH: 1,
      positionI: 0
    }
  },
  {
    stage: 7,
    play: 'positionD',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 1,
      positionF: -1,

      positionG: 0,
      positionH: 1,
      positionI: 0
    }
  },
  // STAGES 5
  {
    stage: 5,
    play: 'positionI',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 0,
      positionF: -1,

      positionG: -1,
      positionH: 1,
      positionI: -1
    }
  },
  {
    stage: 5,
    play: 'positionH',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 1,
      positionC: -1,

      positionD: -1,
      positionE: 1,
      positionF: 0,

      positionG: 0,
      positionH: -1,
      positionI: -1
    }
  },
  {
    stage: 5,
    play: 'positionH',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 1,
      positionC: -1,

      positionD: 0,
      positionE: 1,
      positionF: 0,

      positionG: -1,
      positionH: -1,
      positionI: -1
    }
  },
  {
    stage: 5,
    play: 'positionG',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 1,
      positionF: -1,

      positionG: -1,
      positionH: -1,
      positionI: 0
    }
  },
  {
    stage: 5,
    play: 'positionG',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 1,
      positionF: -1,

      positionG: -1,
      positionH: 0,
      positionI: -1
    }
  },
  {
    stage: 5,
    play: 'positionD',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 1,
      positionF: -1,

      positionG: 0,
      positionH: -1,
      positionI: -1
    }
  },
  {
    stage: 5,
    play: 'positionG',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 1,
      positionF: 0,

      positionG: -1,
      positionH: -1,
      positionI: -1
    }
  },
  {
    stage: 5,
    play: 'positionG',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: 0,
      positionE: 1,
      positionF: -1,

      positionG: -1,
      positionH: -1,
      positionI: -1
    }
  },
  {
    stage: 5,
    play: 'positionD',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 1,
      positionF: -1,

      positionG: 0,
      positionH: -1,
      positionI: -1
    }
  },
  {
    stage: 5,
    play: 'positionD',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 1,
      positionC: 0,

      positionD: -1,
      positionE: 1,
      positionF: -1,

      positionG: -1,
      positionH: 0,
      positionI: -1
    }
  },
  {
    stage: 5,
    play: 'positionH',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 1,
      positionC: 0,

      positionD: 0,
      positionE: 1,
      positionF: -1,

      positionG: -1,
      positionH: -1,
      positionI: -1
    }
  },
  {
    stage: 5,
    play: 'positionH',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 1,
      positionC: 0,

      positionD: -1,
      positionE: 1,
      positionF: 0,

      positionG: -1,
      positionH: -1,
      positionI: -1
    }
  },
  {
    stage: 5,
    play: 'positionH',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 1,
      positionC: 0,

      positionD: -1,
      positionE: 1,
      positionF: -1,

      positionG: 0,
      positionH: -1,
      positionI: -1
    }
  },
  {
    stage: 5,
    play: 'positionH',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 1,
      positionC: 0,

      positionD: -1,
      positionE: 1,
      positionF: -1,

      positionG: -1,
      positionH: -1,
      positionI: 0
    }
  },
  {
    stage: 5,
    play: 'positionH',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 1,
      positionC: -1,

      positionD: 0,
      positionE: 1,
      positionF: -1,

      positionG: -1,
      positionH: -1,
      positionI: 0
    }
  },
  {
    stage: 5,
    play: 'positionH',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 1,
      positionC: -1,

      positionD: -1,
      positionE: 1,
      positionF: 0,

      positionG: -1,
      positionH: -1,
      positionI: 0
    }
  },
  {
    stage: 5,
    play: 'positionG',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 1,
      positionC: -1,

      positionD: -1,
      positionE: 1,
      positionF: 0,

      positionG: -1,
      positionH: 0,
      positionI: -1
    }
  },
  {
    stage: 5,
    play: 'positionH',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 1,
      positionC: -1,

      positionD: -1,
      positionE: 1,
      positionF: -1,

      positionG: 0,
      positionH: -1,
      positionI: 0
    }
  },
  {
    stage: 5,
    play: 'positionG',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 1,
      positionC: -1,

      positionD: -1,
      positionE: 1,
      positionF: -1,

      positionG: -1,
      positionH: 0,
      positionI: 0
    }
  },
  {
    stage: 5,
    play: 'positionE',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: 0,
      positionE: -1,
      positionF: 0,

      positionG: -1,
      positionH: -1,
      positionI: 1
    }
  },
  {
    stage: 5,
    play: 'positionF',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: 0,
      positionE: -1,
      positionF: -1,

      positionG: -1,
      positionH: -1,
      positionI: 1
    }
  },
  {
    stage: 5,
    play: 'positionF',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: 0,
      positionE: 0,
      positionF: -1,

      positionG: -1,
      positionH: -1,
      positionI: 1
    }
  },
  {
    stage: 5,
    play: 'positionF',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: 0,
      positionE: -1,
      positionF: -1,

      positionG: 0,
      positionH: -1,
      positionI: 1
    }
  },
  {
    stage: 5,
    play: 'positionF',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: 0,
      positionE: -1,
      positionF: -1,

      positionG: -1,
      positionH: 0,
      positionI: 1
    }
  },
  {
    stage: 5,
    play: 'positionI',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 1,
      positionF: -1,

      positionG: 0,
      positionH: 0,
      positionI: -1
    }
  },
  {
    stage: 5,
    play: 'positionG',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 1,
      positionF: -1,

      positionG: -1,
      positionH: 0,
      positionI: 0
    }
  },
  {
    stage: 5,
    play: 'positionG',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 1,
      positionF: 0,

      positionG: -1,
      positionH: 0,
      positionI: -1
    }
  },
  {
    stage: 5,
    play: 'positionG',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: 0,
      positionE: 1,
      positionF: -1,

      positionG: -1,
      positionH: 0,
      positionI: -1
    }
  },
  {
    stage: 5,
    play: 'positionG',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 1,
      positionF: -1,

      positionG: -1,
      positionH: 0,
      positionI: -1
    }
  },
  {
    stage: 5,
    play: 'positionF',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: -1,
      positionF: -1,

      positionG: -1,
      positionH: 0,
      positionI: 1
    }
  },
  {
    stage: 5,
    play: 'positionF',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: -1,
      positionF: -1,

      positionG: 0,
      positionH: -1,
      positionI: 1
    }
  },
  {
    stage: 5,
    play: 'positionF',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 0,
      positionF: -1,

      positionG: -1,
      positionH: -1,
      positionI: 1
    }
  },
  {
    stage: 5,
    play: 'positionF',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: 0,
      positionE: -1,
      positionF: -1,

      positionG: -1,
      positionH: -1,
      positionI: 1
    }
  },
  {
    stage: 5,
    play: 'positionG',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: -1,
      positionF: 0,

      positionG: -1,
      positionH: -1,
      positionI: 1
    }
  },
  {
    stage: 5,
    play: 'positionE',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: -1,
      positionF: 0,

      positionG: 0,
      positionH: -1,
      positionI: 1
    }
  },
  {
    stage: 5,
    play: 'positionF',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: -1,
      positionF: -1,

      positionG: 0,
      positionH: 0,
      positionI: 1
    }
  },
  {
    stage: 5,
    play: 'positionF',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 0,
      positionF: -1,

      positionG: 0,
      positionH: -1,
      positionI: 1
    }
  },
  {
    stage: 5,
    play: 'positionF',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: 0,
      positionE: -1,
      positionF: -1,

      positionG: 0,
      positionH: -1,
      positionI: 1
    }
  },
  {
    stage: 5,
    play: 'positionF',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: -1,
      positionF: -1,

      positionG: 0,
      positionH: -1,
      positionI: 1
    }
  },
  {
    stage: 5,
    play: 'positionF',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: 0,
      positionE: 0,
      positionF: -1,

      positionG: -1,
      positionH: 1,
      positionI: -1
    }
  },
  {
    stage: 5,
    play: 'positionD',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 0,
      positionF: 0,

      positionG: -1,
      positionH: 1,
      positionI: -1
    }
  },
  {
    stage: 5,
    play: 'positionI',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 0,
      positionF: -1,

      positionG: 0,
      positionH: 1,
      positionI: -1
    }
  },
  {
    stage: 5,
    play: 'positionA',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 0,
      positionF: -1,

      positionG: -1,
      positionH: 1,
      positionI: 0
    }
  },
  {
    stage: 5,
    play: 'positionC',
    status: {
      positionA: 1, // 0 for O // 1 for X
      positionB: -1,
      positionC: -1,

      positionD: 1,
      positionE: 0,
      positionF: 0,

      positionG: 0,
      positionH: -1,
      positionI: -1
    }
  },
  {
    stage: 5,
    play: 'positionG',
    status: {
      positionA: 1, // 0 for O // 1 for X
      positionB: -1,
      positionC: -1,

      positionD: 1,
      positionE: 0,
      positionF: 0,

      positionG: -1,
      positionH: -1,
      positionI: 0
    }
  },
  {
    stage: 5,
    play: 'positionG',
    status: {
      positionA: 1, // 0 for O // 1 for X
      positionB: -1,
      positionC: -1,

      positionD: 1,
      positionE: 0,
      positionF: 0,

      positionG: -1,
      positionH: 0,
      positionI: -1
    }
  },
  {
    stage: 5,
    play: 'positionG',
    status: {
      positionA: 1, // 0 for O // 1 for X
      positionB: -1,
      positionC: 0,

      positionD: 1,
      positionE: 0,
      positionF: 0,

      positionG: -1,
      positionH: -1,
      positionI: -1
    }
  },
  {
    stage: 5,
    play: 'positionG',
    status: {
      positionA: 1, // 0 for O // 1 for X
      positionB: 0,
      positionC: -1,

      positionD: 1,
      positionE: 0,
      positionF: 0,

      positionG: -1,
      positionH: -1,
      positionI: -1
    }
  },
  {
    stage: 5,
    play: 'positionH',
    status: {
      positionA: 1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 0,
      positionF: -1,

      positionG: -1,
      positionH: -1,
      positionI: 0
    }
  },
  {
    stage: 5,
    play: 'positionB',
    status: {
      positionA: 1, // 0 for O // 1 for X
      positionB: -1,
      positionC: 1,

      positionD: 0,
      positionE: 0,
      positionF: -1,

      positionG: -1,
      positionH: -1,
      positionI: 0
    }
  },
  {
    stage: 5,
    play: 'positionB',
    status: {
      positionA: 1, // 0 for O // 1 for X
      positionB: -1,
      positionC: 1,

      positionD: -1,
      positionE: 0,
      positionF: 0,

      positionG: -1,
      positionH: -1,
      positionI: 0
    }
  },
  {
    stage: 5,
    play: 'positionB',
    status: {
      positionA: 1, // 0 for O // 1 for X
      positionB: -1,
      positionC: 1,

      positionD: -1,
      positionE: 0,
      positionF: -1,

      positionG: 0,
      positionH: -1,
      positionI: 0
    }
  },
  {
    stage: 5,
    play: 'positionB',
    status: {
      positionA: 1, // 0 for O // 1 for X
      positionB: -1,
      positionC: 1,

      positionD: -1,
      positionE: 0,
      positionF: -1,

      positionG: -1,
      positionH: 0,
      positionI: 0
    }
  },
  {
    stage: 5,
    play: 'positionF',
    status: {
      positionA: 1, // 0 for O // 1 for X
      positionB: -1,
      positionC: 0,

      positionD: 0,
      positionE: 0,
      positionF: -1,

      positionG: 1,
      positionH: -1,
      positionI: -1
    }
  },
  {
    stage: 5,
    play: 'positionD',
    status: {
      positionA: 1, // 0 for O // 1 for X
      positionB: -1,
      positionC: 0,

      positionD: -1,
      positionE: 0,
      positionF: -1,

      positionG: 1,
      positionH: -1,
      positionI: 0
    }
  },
  {
    stage: 5,
    play: 'positionD',
    status: {
      positionA: 1, // 0 for O // 1 for X
      positionB: -1,
      positionC: 0,

      positionD: -1,
      positionE: 0,
      positionF: -1,

      positionG: 1,
      positionH: 0,
      positionI: -1
    }
  },
  {
    stage: 5,
    play: 'positionD',
    status: {
      positionA: 1, // 0 for O // 1 for X
      positionB: -1,
      positionC: 0,

      positionD: -1,
      positionE: 0,
      positionF: 0,

      positionG: 1,
      positionH: -1,
      positionI: -1
    }
  },
  {
    stage: 5,
    play: 'positionD',
    status: {
      positionA: 1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 0,

      positionD: -1,
      positionE: 0,
      positionF: -1,

      positionG: 1,
      positionH: -1,
      positionI: -1
    }
  },
  {
    stage: 5,
    play: 'positionA',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 1,
      positionF: 0,

      positionG: 0,
      positionH: -1,
      positionI: -1
    }
  },
  {
    stage: 5,
    play: 'positionG',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 1,
      positionF: 0,

      positionG: -1,
      positionH: -1,
      positionI: 0
    }
  },
  {
    stage: 5,
    play: 'positionG',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 1,
      positionF: 0,

      positionG: -1,
      positionH: 0,
      positionI: -1
    }
  },
  {
    stage: 5,
    play: 'positionG',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: 0,
      positionE: 1,
      positionF: 0,

      positionG: -1,
      positionH: -1,
      positionI: -1
    }
  },
  {
    stage: 5,
    play: 'positionG',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 1,
      positionF: 0,

      positionG: -1,
      positionH: -1,
      positionI: -1
    }
  },
  {
    stage: 5,
    play: 'positionH',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 1,
      positionF: -1,

      positionG: 0,
      positionH: -1,
      positionI: 0
    }
  },
  {
    stage: 5,
    play: 'positionG',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 1,
      positionF: -1,

      positionG: -1,
      positionH: 0,
      positionI: 0
    }
  },
  {
    stage: 5,
    play: 'positionG',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 1,
      positionF: 0,

      positionG: -1,
      positionH: -1,
      positionI: 0
    }
  },
  {
    stage: 5,
    play: 'positionG',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: 0,
      positionE: 1,
      positionF: -1,

      positionG: -1,
      positionH: -1,
      positionI: 0
    }
  },
  {
    stage: 5,
    play: 'positionG',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 1,
      positionF: -1,

      positionG: -1,
      positionH: -1,
      positionI: 0
    }
  },
  // STAGES 3
  {
    stage: 3,
    play: 'positionD',
    status: {
      positionA: 1, // 0 for O // 1 for X
      positionB: -1,
      positionC: -1,

      positionD: -1,
      positionE: 0,
      positionF: 0,

      positionG: -1,
      positionH: -1,
      positionI: -1
    }
  },
  {
    stage: 3,
    play: 'positionC',
    status: {
      positionA: 1, // 0 for O // 1 for X
      positionB: -1,
      positionC: -1,

      positionD: -1,
      positionE: 0,
      positionF: -1,

      positionG: -1,
      positionH: -1,
      positionI: 0
    }
  },
  {
    stage: 3,
    play: 'positionB',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: -1,
      positionC: -1,

      positionD: -1,
      positionE: 1,
      positionF: -1,

      positionG: -1,
      positionH: -1,
      positionI: 0
    }
  },
  {
    stage: 3,
    play: 'positionB',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: -1,
      positionC: -1,

      positionD: -1,
      positionE: 1,
      positionF: 0,

      positionG: -1,
      positionH: -1,
      positionI: -1
    }
  },
  {
    stage: 3,
    play: 'positionB',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: -1,
      positionC: 0,

      positionD: -1,
      positionE: 1,
      positionF: -1,

      positionG: -1,
      positionH: -1,
      positionI: -1
    }
  },
  {
    stage: 3,
    play: 'positionC',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 0,
      positionC: -1,

      positionD: -1,
      positionE: 1,
      positionF: -1,

      positionG: -1,
      positionH: -1,
      positionI: -1
    }
  },
  {
    stage: 3,
    play: 'positionI',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: 0,
      positionE: -1,
      positionF: -1,

      positionG: -1,
      positionH: -1,
      positionI: -1
    }
  },
  {
    stage: 3,
    play: 'positionI',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: -1,
      positionF: -1,

      positionG: -1,
      positionH: -1,
      positionI: -1
    }
  },
  {
    stage: 3,
    play: 'positionE',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: -1,
      positionF: -1,

      positionG: -1,
      positionH: 0,
      positionI: -1
    }
  },
  {
    stage: 3,
    play: 'positionI',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: -1,
      positionF: -1,

      positionG: 0,
      positionH: -1,
      positionI: -1
    }
  },
  {
    stage: 3,
    play: 'positionH',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: 0,
      positionF: -1,

      positionG: -1,
      positionH: -1,
      positionI: -1
    }
  },
  {
    stage: 3,
    play: 'positionG',
    status: {
      positionA: 1, // 0 for O // 1 for X
      positionB: -1,
      positionC: 0,

      positionD: -1,
      positionE: 0,
      positionF: -1,

      positionG: -1,
      positionH: -1,
      positionI: -1
    }
  },
  {
    stage: 3,
    play: 'positionE',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: -1,
      positionF: 0,

      positionG: -1,
      positionH: -1,
      positionI: -1
    }
  },
  {
    stage: 3,
    play: 'positionE',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: 1,

      positionD: -1,
      positionE: -1,
      positionF: -1,

      positionG: -1,
      positionH: -1,
      positionI: 0
    }
  },
  // STAGES 1
  {
    stage: 1,
    play: 'positionC',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: 0,
      positionC: -1,

      positionD: -1,
      positionE: -1,
      positionF: -1,

      positionG: -1,
      positionH: -1,
      positionI: -1
    }
  },
  {
    stage: 1,
    play: 'positionE',
    status: {
      positionA: 0, // 0 for O // 1 for X
      positionB: -1,
      positionC: -1,

      positionD: -1,
      positionE: -1,
      positionF: -1,

      positionG: -1,
      positionH: -1,
      positionI: -1
    }
  },
  {
    stage: 1,
    play: 'positionA',
    status: {
      positionA: -1, // 0 for O // 1 for X
      positionB: -1,
      positionC: -1,

      positionD: -1,
      positionE: 0,
      positionF: -1,

      positionG: -1,
      positionH: -1,
      positionI: -1
    }
  }
]

export default plays
