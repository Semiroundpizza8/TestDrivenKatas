const { expect } = require('chai');
const twoSum = require('./twoSum');
const should = require('chai').should();

describe('twoSum', () => {
  it('finds no pairs in an empty array', () => {
    expect(twoSum([], 10)).to.deep.equal([]);
  });
  it('returns an array of numbers', () => {
    let res = twoSum([1, 2, 3, 4], 3);
    res.should.be.a('array');
    res.forEach((number) => {
      number.should.be.a('number');
    });
  });
  it('should return the right numbers', () => {
    expect(twoSum([0, 1, 2], 3)).to.deep.equal([1, 2]);
    expect(twoSum([1, 2, 3, 4, 5, 6], 3)).to.deep.equal([0, 1]);
  });
  it('never uses the same element twice', () => {
    expect(twoSum([1, 2, 3, 4], 2)).to.deep.equal([]);
  });
});
