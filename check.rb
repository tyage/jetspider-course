answer = `./bin/jsvm -d #{ARGV[0]}`
result = `./bin/jsvm -d #{ARGV[0]}c`

puts answer == result
