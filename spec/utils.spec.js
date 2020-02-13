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
  it('When array contains "article_id" & "title", make "title" the key and "article_id" the value', () => {
    const list = [{ article_id: 1, title: 'A' }]
    expect(makeRefObj(list)).to.eql([{ A: 1 }])
  })
  it('will work for multiple items', () => {
    const list = [{ article_id: 1, title: 'A' }, { article_id: 2, title: 'B' }, { article_id: 3, title: 'C' }]
    expect(makeRefObj(list)).to.eql([{ A: 1 }, { B: 2 }, { C: 3 }])
  })
});

describe.only('formatComments', () => {
  it('Returns a new empty array when passed an empty array', () => {
    const comments = []
    const articleRef = []

    expect(formatComments(comments, articleRef)).to.eql([])
  })
  it('Will rename the created_by key to Author', () => {
    const comments = [{
      body:
        "Oh, I've got compassion running out of my nose, pal! I'm the Sultan of Sentiment!",
      belongs_to: "They're not exactly dogs, are they?",
      created_by: 'butter_bridge',
      votes: 16,
      created_at: 1511354163389
    }]
    const articleRef = {
      createdBy: 'Author'
    }
    expect(formatComments(comments, articleRef)).to.eql([{
      body:
        "Oh, I've got compassion running out of my nose, pal! I'm the Sultan of Sentiment!",
      belongs_to: "They're not exactly dogs, are they?",
      author: 'butter_bridge',
      votes: 16,
      author: 1511354163389
    }])
  });
});


// [{
//   body:
//     "Oh, I've got compassion running out of my nose, pal! I'm the Sultan of Sentiment!",
//   belongs_to: "They're not exactly dogs, are they?",
//   created_by: 'butter_bridge',
//   votes: 16,
//   created_at: 1511354163389,
// }]