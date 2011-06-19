describe('Support module', function () {
  var S = GameOfLife.Support;

  describe('For validating canvas', function () {
    it('throws InvalidArgument if given other than a canvas element', function () {
      expect(function () {
        S.validateCanvas($('<p>foo</p>')[0]);
      }).toThrow(new S.InvalidArgument('Not a canvas element'));
    });

    it('returns the given element if the element is a canvas', function () {
      expect(S.validateCanvas($('<canvas></canvas>')[0]).getContext).toBeFunction();
    });
  });

  it('inverts an object', function () {
    var obj = { foo: 1, bar: 2};
    expect(S.invertObject(obj)).toEqual({1: 'foo', 2: 'bar'});
  });
});
