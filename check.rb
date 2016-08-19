answer = `./bin/jsvm -d #{ARGV[0]}`
result = `./bin/jsvm -d #{ARGV[0]}c`

puts answer == result

if answer != result
  puts '==========='
  puts answer
  puts '==========='
  puts result
end
