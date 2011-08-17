describe('Support module', function () {
  var S = GameOfLife.Support;
  var CT = S.CellTypes;

  it('inverts an object', function () {
    var obj = { foo: 1, bar: 2};
    expect(S.invertObject(obj)).toEqual({1: 'foo', 2: 'bar'});
  });

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

  describe('For parsing a cell grid', function () {
    it('parses simple 1x1 input correctly', function() {
      expect(S.parseCellGrid('.')).toEqual([[CT.Dead]]);
      expect(S.parseCellGrid('*')).toEqual([[CT.Alive]]);
    });
    it('parses not so simple 2x2 input correctly', function(){
      expect(S.parseCellGrid('..\n..')).toEqual([[CT.Dead, CT.Dead], [CT.Dead, CT.Dead]]);
      expect(S.parseCellGrid('..\n*.')).toEqual([[CT.Dead, CT.Dead], [CT.Alive, CT.Dead]])
    });
  });
});
