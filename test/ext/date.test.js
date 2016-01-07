var err = require('../util').err;
var should = require('../../');

describe('date', function() {
  it('test validDate', function() {
    (new Date()).should.be.a.validDate();
    (new Date(Date.now())).should.be.a.validDate();
    (new Date(0)).should.be.a.validDate();
    NaN.should.not.be.a.validDate();
    Infinity.should.not.be.a.validDate();
    (0).should.not.be.a.validDate();
    false.should.not.be.a.validDate();
    ({}).should.not.be.a.validDate();
    ''.should.not.be.a.validDate();
    'foo'.should.not.be.a.validDate();
    /^$/.should.not.be.a.validDate();

    err(function() {
      'foobar'.should.be.a.validDate();
    }, "expected 'foobar' to be a valid date");

    var now = new Date();
    var formatted = now.toISOString().replace('T', ' ').replace('Z', ' -0000');

    err(function() {
      now.should.not.be.a.validDate();
    }, "expected " + formatted + " not to be a valid date (false negative fail)");
  });
});
