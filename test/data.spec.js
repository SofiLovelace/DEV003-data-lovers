import data from '../src/data/lol/lol.js';
const dataInteger = data.data;
import dataManagement from '../src/data.js';
const dummyData = [
  {
    id: "Aatrox",
    info: {
      attack: 8,
      defense: 4,
      magic: 3,
      difficulty: 4
    },
    tags: ["Fighter", "Tank"]
  },
  {
    id: "Bard",
    info: {
      attack: 4,
      defense: 4,
      magic: 5,
      difficulty: 9
    },
    tags: ["Support", "Mage"],
  },
  {
    id: "Chogath",
    info: {
      attack: 3,
      defense: 7,
      magic: 7,
      difficulty: 5
    },
    tags: ["Tank", "Mage"]
  },
  {
    id: "Draven",
    info: {
      attack: 9,
      defense: 3,
      magic: 1,
      difficulty: 8
    },
    tags: ["Marksman"],
  },
  {
    id: "Elise",
    info: {
      attack: 6,
      defense: 5,
      magic: 7,
      difficulty: 9
    },
    tags: ["Mage", "Fighter"],
  },
  {
    id: "Kled",
    info: {
      attack: 8,
      defense: 2,
      magic: 2,
      difficulty: 7
    },
    tags: ["Fighter", "Tank"]
  },
  {
    id:"Leblanc",
    info: {
      attack: 1,
      defense: 4,
      magic: 10,
      difficulty: 9
    },
    tags: ["Assassin", "Mage"]
  },
  {
    id: "Rammus",
    info: {
      attack: 4,
      defense: 10,
      magic: 5,
      difficulty: 5
    },
    tags: ["Tank", "Fighter"],
  },
  {
    id: "RekSai",
    info: {
      attack: 8,
      defense: 5,
      magic: 2,
      difficulty: 3
    },
    tags: ["Fighter"]
  },
  {
    id: "Riven",
    info: {
      attack: 8,
      defense: 5,
      magic: 1,
      difficulty: 8
    },
    tags: ["Fighter", "Assassin"]
  },
  {
    id: "XinZhao",
    info: {
      attack: 8,
      defense: 6,
      magic: 3,
      difficulty: 2
    },
    tags: ["Fighter", "Assassin"], 
  }
]

describe('dataManagement', () => {
  it('debería ser un objeto', () => {
    expect(typeof dataManagement).toBe('object');
  });

  describe('dataManagement.searchData', () => {
    it('debería ser una función', () => {
      expect(typeof dataManagement.searchData).toBe('function');
    });

    it('debería retornar 1 para "dataInteger" y "Aatrox" ', () => {
      expect(dataManagement.searchData(dataInteger, 'Aatrox').length).toBe(1);
    });
  });

  describe('dataManagement.filterData', () => {
    it('debería ser una función', () => {
      expect(typeof dataManagement.filterData).toBe('function');
    });

    it('debería retornar 7 para "dummyData" y "Fighter" ', () => {
      expect(dataManagement.filterData(dummyData, 'Fighter').length).toBe(7);
    });
  });
})

/*
describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
*/