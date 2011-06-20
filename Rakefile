require 'tempfile'

version = ENV['version'] || 'snapshot'
node    = 'node'
uglify  = 'uglifyjs'

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

desc 'Make a release by bundling and compressing the sources'
task :release do
  ensure_tool_is_installed uglify
  srcs = Dir['lib/**/*.js'].sort_by { |src| src.size }
  Tempfile.open('gof.min.js') do |file|
    puts "PATH=#{file.path}"
    sh %{cat #{srcs.join(' ')} | #{uglify} --unsafe > #{file.path}}
    sh %{sed 's/\\$VERSION/#{version}/' #{file.path} > release/game_of_life.#{version}.min.js}
  end
end

desc 'Open the test page'
task :test do
  sh %{open test/support/runner.html}
end

task :default => :test
