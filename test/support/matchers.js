beforeEach(function () {
  this.addMatchers({
    toBeFunction: function() { return _.isFunction(this.actual); }
  });
});
