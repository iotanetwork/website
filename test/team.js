var helpers = require('../server/helpers');
var should = require('chai').should();

describe('Helpers', function() {
  describe('getAllMembers()', function() {

    it('should return an array without errors', function() {
      helpers.getAllMembers((err, teamMembers) => {
        should.not.exist(err);
        should.exist(teamMembers);
        teamMembers.should.be.an('array');
      });
    });

  });
});
