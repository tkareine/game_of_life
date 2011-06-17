var GameOfLife = function (zeroGeneration, canvas) {
  if (!canvas || !canvas[0] || !canvas[0].getContext) {
    throw new Error("Invalid argument: not a canvas element");
  }

  var cellTypes = {
    Dead:  {},
    Alive: {}
  }

  function cellSymbolToObject(symbol) {
    switch (symbol) {
      case '.':
        return cellTypes.Dead;
      case '*':
        return cellTypes.Alive;
      default:
        throw new Error('Invalid argument: unknown cell symbol in zero generation: ' + symbol);
    }
  }

  function parseZeroGeneration(layout) {
    var rows = layout.trim().split("\n")
      , grid
      , gridWidth
      , gridIsSquare;

    if (rows.length < 1) {
      throw new Error("Invalid argument: zero generation is too small");
    }

    grid = _.map(rows, function (row) { return _.map(row.split(''), cellSymbolToObject) });
    gridWidth = grid.length;
    gridIsSquare = _.all(grid, function (row) { return row.length === gridWidth });

    if (!gridIsSquare) {
      throw new Error('Invalid argument: zero generation is not a square');
    }

    return grid;
  }

  var context           = canvas[0].getContext('2d')
    , canvasWidth       = canvas[0].width
    , canvasHeight      = canvas[0].height
    , currentGeneration = parseZeroGeneration(zeroGeneration)
    , gridWidth         = currentGeneration.length
    , gridHeight        = currentGeneration[0].length
    , cellSize          = canvasWidth / gridWidth;

  function tick(generation) {
    return generation;
  }

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
    $.each(generation, function (rowIndex, row) {
      $.each(row, function (colIndex, cell) {
        if (cell === cellTypes.Alive) {
          context.fillRect(
            rowIndex * cellSize + cellPadding,
            colIndex * cellSize + cellPadding,
            fillSize,
            fillSize);
        }
      });
    });
  }

  context.font = "bold 10px sans-serif";
  context.textAlign = 'right';
  context.textBaseLine = 'top';

  function drawGenerationCount(count) {
    var countBoxWidth   = (count + '').length * 10 + 2
      , countBoxHeight  = 16
      , halfCellSize    = cellSize / 2;
    context.fillStyle = '#ccc';
    context.fillRect(canvasWidth - countBoxWidth, canvasHeight - countBoxHeight, countBoxWidth, countBoxHeight);
    context.fillStyle = '#555';
    context.fillText(count, canvasWidth - 4, canvasHeight - 4);
  }

  function drawFrame(generation, count) {
    drawEmptyGrid();
    drawCells(generation);
    drawGenerationCount(count);
  }

  return {
    evolve: function () {
      var numGenerations = 0;

      function doEvolve() {
        drawFrame(currentGeneration, numGenerations);
        currentGeneration = tick(currentGeneration);
        numGenerations += 1;
      }

      doEvolve();
      setInterval(function () {
        doEvolve();
      }, 2000);
    }
  }
};
