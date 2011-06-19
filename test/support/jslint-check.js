var fs      = require('fs'),
    JSLINT  = require('./jslint').JSLINT,
    sources = [
      'lib/game_of_life.js',
      'lib/game_of_life.generation.js',
      'lib/game_of_life.graphics.js',
      'lib/game_of_life.support.js'
    ],
    totalErrors = 0,
    notErrors = {
      // careful with adding these, do not become too sloppy
      "Move the invocation into the parens that contain the function.": true,
      "'GameOfLife' was used before it was defined.": true,
      "Unexpected dangling '_' in '_'.": true,
      "'_' was used before it was defined.": true,
      "'setTimeout' was used before it was defined.": true
    },
    jslintOptions = {
      indent: 2,
      sloppy: true,
      white:  true
    };

sources.forEach(function (src) {
  var file = fs.readFileSync(src, 'utf8');

  JSLINT(file, jslintOptions);

  JSLINT.errors
    // for some reason, JSLINT inserts null entries sometimes
    .filter(function (err) { return err && !notErrors[err.reason]; })
    .forEach(function (err) {
      totalErrors++;
      console.log(src + ':' + err.line + ',' + err.character + ': ' + err.reason + "\n");
      console.log(err.evidence + "\n");
    });
});

if (totalErrors > 0) {
  console.log('JSLint found ' + totalErrors + ' error(s).');
  process.exit(1);
} else {
  console.log('Passed JSLint check.');
}
