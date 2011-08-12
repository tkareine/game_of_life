describe('Support module', function () {
  var S   = GameOfLife.Support,
      CT  = S.CellTypes;

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
    it('throws InvalidArgument if layout is a blank string', function () {
      expect(function () {
        S.parseCellGrid(' ');
      }).toThrow(new S.InvalidArgument('Cell grid is not a two-dimensional matrix'));
    });

    it('throws InvalidArgument if layout has unknown symbol', function () {
      var symbol = ','
      expect(function () {
        S.parseCellGrid(symbol);
      }).toThrow(new S.InvalidArgument('Unknown cell symbol: ' + symbol));
    });

    it('throws InvalidArgument if layout is not a rectangle', function () {
      expect(function () {
        S.parseCellGrid("..\n.");
      }).toThrow(new S.InvalidArgument('Cell grid is not a rectangle'));
    });

    it('parses a valid layout', function () {
      expect(S.parseCellGrid("..\n.*")).toEqual([[CT.Dead, CT.Dead], [CT.Dead, CT.Alive]]);
    });
  });
});
