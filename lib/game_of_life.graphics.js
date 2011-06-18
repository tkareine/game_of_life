(function (GoL, _) {
  var CT = GoL.Support.CellTypes;

  GoL.Graphics = function (canvas, grid) {
    var context         = canvas.getContext('2d')
      , canvasWidth     = canvas.width
      , canvasHeight    = canvas.height
      , gridHeight      = grid.length
      , gridWidth       = grid[0].length
      , cellSize        = canvasWidth / gridWidth
      , halfCellSize    = cellSize / 2
      , countBoxHeight  = 16
      , countBoxTextPos = [canvasWidth - 4, canvasWidth - 4];

    function drawEmptyGrid() {
      for (var x = 0.5; x < canvasWidth; x += cellSize) {
        context.moveTo(x, 0);
        context.lineTo(x, canvasHeight);
      }

      for (var x = 0.5; x < canvasHeight; x += cellSize) {
        context.moveTo(0, x);
        context.lineTo(canvasWidth, x);
      }

      context.strokeStyle = '#eee';
      context.stroke();
    }

    function drawCells(generation) {
      var cellPadding = 2
        , fillSize    = cellSize - cellPadding;
      context.fillStyle = '#222';
      _.each(generation, function (row, rowIndex) {
        _.each(row, function (cell, colIndex) {
          if (cell === CT.Alive) {
            context.fillRect(
              colIndex * cellSize + cellPadding,
              rowIndex * cellSize + cellPadding,
              fillSize,
              fillSize);
          }
        });
      });
    }

    function drawGenerationCount(count) {
      var countBoxWidth = (count + '').length * 10 + 2;
      context.fillStyle = '#ccc';
      context.fillRect(canvasWidth - countBoxWidth, canvasHeight - countBoxHeight, countBoxWidth, countBoxHeight);
      context.fillStyle = '#555';
      context.fillText(count, countBoxTextPos[0], countBoxTextPos[1]);
    }

    context.font = "bold 10px sans-serif";
    context.textAlign = 'right';
    context.textBaseLine = 'top';

    return {
      drawFrame: function (generation, count) {
        drawEmptyGrid();
        drawCells(generation);
        drawGenerationCount(count);
      }
    };
  };
})(GameOfLife, _);
