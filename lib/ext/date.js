/*
 * Should
 * Copyright(c) 2010-2015 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */

module.exports = function(should, Assertion) {
  /**
   * Assert given date is valid
   * @name validDate
   * @memberOf Assertion
   * @category assertion dates
   * @example
   *
   * (new Date()).should.be.a.validDate();
   * (new Date('foo')).should.not.be.a.validDate();
   */
  Assertion.add('validDate', function() {
    this.params = { operator: 'to be a valid date' };

    this.assert(typeof this.obj.getTime === 'function' && !isNaN(this.obj.getTime()));
  });
};
