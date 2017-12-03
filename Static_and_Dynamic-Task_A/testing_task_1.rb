### Testing task 1 code:

# Carry out static testing on the code below.
# Read through the code.
# Comment any errors you can see without correcting them.


def func1 val #missing '()' brackets
  if val = 1
  return true #indentation
  else
  return false  #indentation
  end
end

dif max a b #typo and missing brackets '( , )'
  if a > b
      return a
  else
  b # needs 'return' and indentation
  end
end
end # extra 'end'

def looper
  for i in 1..10
  puts i #will print 1 to 10 needs to return 10
  end
end

failures = 0

if looper == 10
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
#missing and end

if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end


if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed" #typo should be max(100,1)
  failrues = failures + 1 #typo failures
end


if failures #needs number of failures
  puts "Test Failed"
else
  puts "Test Passed"
end
