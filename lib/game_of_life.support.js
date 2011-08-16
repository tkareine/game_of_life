(function (GoL, _) {
  "use strict";

  var cellNameToSymbol = { Alive: '*', Dead: '.' };

  function InvalidArgument(message) {
    this.prototype  = Error.prototype;
    this.name       = 'InvalidArgument';
    this.message    = message;
    this.toString   = function () {
      return this.name + ': ' + this.message;
    };
  }

  function invertObject(object) {
    return _(object).chain()
      .map(function (val, key) { return [val, key]; })
      .reduce(function (memo, valKey) { memo[valKey[0]] = valKey[1]; return memo; }, {})
      .value();
  }

  GoL.Support = {
    InvalidArgument: InvalidArgument,
    CellTypes: cellNameToSymbol,
    invertObject: invertObject,
    validateCanvas: function (canvas) {
      if (!canvas || !_.isFunction(canvas.getContext)) {
        throw new InvalidArgument('Not a canvas element');
      }
      return canvas;
    },
    parseCellGrid: function (layout) {
      throw 'TODO: Implement me';
    }
  };
})(GameOfLife, _);
