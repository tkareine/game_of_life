node = 'node'

def ensure_tool_is_installed(name)
  raise "Did not find #{name} in $PATH. Is it installed?" unless system("which #{name}")
end

desc 'Open the example page'
task :example do
  sh %{open example/index.html}
end

desc 'Run code quality checks with JSLint'
task :lint do
  ensure_tool_is_installed node
  sh %{#{node} test/support/jslint-check.js}
end

desc 'Open the test page'
task :test do
  sh %{open test/support/runner.html}
end

task :default => :test
