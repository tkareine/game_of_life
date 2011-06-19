NODE = 'node'

desc 'Open the example page'
task :example do
  sh %{open example/index.html}
end

desc 'Run code quality checks with JSLint'
task :lint do
  raise 'You must have Node.js installed' unless system("which #{NODE}")
  sh %{#{NODE} test/support/jslint-check.js}
end

desc 'Open the test page'
task :test do
  sh %{open test/support/runner.html}
end

task :default => :test
