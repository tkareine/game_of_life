describe('Support module', function () {
  var S = GameOfLife.Support;

  describe('For parsing canvas', function () {
    it('throws InvalidArgument if given other than canvas element', function () {
      expect(function () {
        S.parseCanvas($('<p>foo</p>'));
      }).toThrow(new S.InvalidArgument('Not a canvas element'));
    });
  });
});
