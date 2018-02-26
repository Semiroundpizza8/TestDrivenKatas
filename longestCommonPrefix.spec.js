const { expect } = require('chai');
const longestCommonPrefix = require('./longestCommonPrefix');
const should = require('chai').should();

/*
Write a function to find the longest common prefix string amongst an array of strings.
For example, longestCommonPrefix(['foobar', 'foo', 'foolish']); // returns 'foo'
*/

describe('longestCommonPrefix', () => {
  it('returns an empty string if nothing is found.', () => {
    expect(longestCommonPrefix(['a', 's', 'k'])).to.deep.equal('');
  });
  it('doesnt break if not enough arguments are provided.', () => {
    expect(longestCommonPrefix(['a'])).to.deep.equal('a');
    expect(longestCommonPrefix([])).to.deep.equal('');
  });
  it('finds common item.', () => {
    expect(longestCommonPrefix(['aaa', 'aab', 'acc'])).to.deep.equal('a');
    expect(longestCommonPrefix(['Hello', 'World', 'orld'])).to.deep.equal('');
  });
});
