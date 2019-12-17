require 'fileutils'

copy_and_paste = <<~NAMES
1	How Old is Teddy	Not completed
2	Searching 101	Not completed
3	When Will I Retire	Not completed
4	Palindromic Strings Part 1	Not completed
5	Palindromic Strings Part 2	Not completed
6	Palindromic Number	Not completed
7	Running Totals	Not completed
8	Letter Swap	Not completed
9	Letter Counter Part 1	Not completed
10	Letter Counter Part 2	Not completed
NAMES

def generate_filenames(heredoc, filetype)
  heredoc
    .split("\n")
    .map do |filename|
      filename = filename.gsub(/\s+(completed|Not completed)$/, '');
      name_parts = filename.match(/(\d+)\s+(.*)/)
      number = name_parts[1]
      exercise_name = name_parts[2]
      if filetype == '.js'
        camel_case(number, exercise_name, '.js')
      elsif filetype == '.rb'
        snake_case(number, exercise_name, '.rb')
      end
    end.each do |filename|
      FileUtils.touch(filename)
    end
end

def camel_case(file_number, exercise_name, ext)
  file_number = file_number.to_i < 10 ? "0#{file_number}_" : "#{file_number}_"
  exercise_name = exercise_name.split(' ').map.with_index do |name, index|
    if index == 0
      name.downcase
    else
      name.capitalize
    end
  end.join

  file_number + exercise_name + ext
end

def snake_case(file_number, exercise_name, ext)
  file_number = file_number.to_i < 10 ? "0#{file_number}_" : "#{file_number}_"
  exercise_name = exercise_name.gsub(/\ /, '_').downcase
  file_number + exercise_name + ext
end

generate_filenames(copy_and_paste, '.js')

# remove punctuation from file names
# add functionality to create a folder of the same name and then add the file inside?
