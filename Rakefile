NODE = 'node'

desc 'Run code quality checks with JSLint'
task :lint do
  raise 'You must have Node.js installed' unless system("which #{NODE}")
  sh %{#{NODE} test/support/jslint-check.js}
end
