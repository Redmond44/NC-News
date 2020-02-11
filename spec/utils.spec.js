const { expect } = require('chai');
const {
  formatDates,
  makeRefObj,
  formatComments,
} = require('../db/utils/utils');

describe('formatDates', () => {
  it('When passed an object nested in an array, return as an array', () => {
    const arr = []
    expect(formatDates(arr)).to.eql([])
  })
  it('When passed a date, return this as a JS Date Object', () => {
    const list = [{
      created_at: 1511354163389
    }];
    expect(formatDates(list)[0].created_at).to.be.an.instanceOf(Date)
  })
  it('Will work for an object with multiple items in', () => {
    const list = [{
      body:
        "Oh, I've got compassion running out of my nose, pal! I'm the Sultan of Sentiment!",
      belongs_to: "They're not exactly dogs, are they?",
      created_by: 'butter_bridge',
      votes: 16,
      created_at: 1511354163389,
    }];
    expect(formatDates(list)).to.eql([{
      body:
        "Oh, I've got compassion running out of my nose, pal! I'm the Sultan of Sentiment!",
      belongs_to: "They're not exactly dogs, are they?",
      created_by: 'butter_bridge',
      votes: 16,
      created_at: new Date(1511354163389)
    }])
  })
  it('Does not mutate the original array', () => {
    const list = [{
      created_at: 1511354163389
    }];
    formatDates(list)
    expect(list[0]).to.eql({ created_at: 1511354163389 })
  })
});

describe('makeRefObj', () => {
  it('', () => {
    const obj = {};
    expect(makeRefObj(obj)).to.eql()
  })
});

describe('formatComments', () => { });


