# Conway's Game of Life Code Kata

Written to serve as the basis for a JavaScript
[Code Kata](http://en.wikipedia.org/wiki/Kata_\(programming\)).

See it [running](http://tkareine.github.com/game_of_life/example/index.html).

If you want to do the Kata, please do not search for the implementation of the
missing functionality. Try to solve it by yourself first.

## Usage

In the [lib](https://github.com/tkareine/game_of_life/tree/master/lib)
directory of the master branch of the repository, implement all the functions
that throw a TODO string. Write tests for your functions as well. The tests
are located in
[test/unit](https://github.com/tkareine/game_of_life/tree/master/test/unit)
and
[test/integration](https://github.com/tkareine/game_of_life/tree/master/test/integration)
directories. You can run the tests by opening [the test
suite](http://tkareine.github.com/game_of_life/test/support/runner.html) in
your browser.

[TDD](http://en.wikipedia.org/wiki/Test-driven_development) is a good practice
for doing the Kata. First, choose a function to implement, then

1. write a simple test for it
2. see the test fail when running the test suite
3. write just enough implementation for the test to pass
4. refactor, splitting the function into smaller functions if necessary (write
   tests for those functions as well)
5. write another, but more complex, test for the function
6. goto 2 if the function does not meet the requirements

A `Rakefile` exists for executing common project tasks. See the available
tasks by running `rake -T` in the project's root directory. Using rake
requires a Ruby environment.

## Solutions

* [solution-ref](https://github.com/tkareine/game_of_life/commits/solution-ref) -- the solution made when writing the basis for the Kata originally
* [solution-jkl-dojo](https://github.com/tkareine/game_of_life/commits/solution-jkl-dojo) -- the solution made at [Agile Finland coding dojo in Jyväskylä](http://confluence.agilefinland.com/pages/viewpage.action?pageId=10617209)
