---
sidebar_position: 1
---

# Beginner Lua Tutorial

[https://onecompiler.com/lua](https://onecompiler.com/lua) can be used to try Lua in the browser.

These examples are more for review, rather than learning! If you see something here that you don't understand, continue to watch Lua tutorials on YouTube!

## Printing example

```lua
print("Hello world!")
```

Output: `Hello World!`

```lua
print(2 + 3)
```

Output: `5`

```lua
print("2 + 3")
```

Output: `2 + 3`

Anything in quotation marks `" "` or `' '` is a string. Printing a string will output exactly what you type! Anything not inside of quotation marks are registered as numbers, variables, or math statements!

## Variables example

```lua
my_variable = 5
print(my_variable)
```

Output: `5`

```lua
x = 2
y = 10
print(x + y)
```

Output: `12`

```lua
x = 2
y = 10
print("x + y")
```

Output: `x + y`

```lua
some_text = "this is cool"
print(some_text)
```

Output: `this is cool`

Variables can be assigned practically any value! You can store them as numbers, strings, and more!

## If statement example

```lua
x = 6
if x > 5 then
  print("Greater than 5!")
end
```

Output:
`Greater than 5!`

```lua
a = true
b = false

if a then
  print("True")
end

if a and b then
  print("True")
else
  print("False")
end

if a or b then
  print("True")
else
  print("False")
end

if b then
  print("True")
end
```

Output:

```
True
False
True
```

```lua
x = 5
y = 5
if x == y then
  print("True")
end
```

Output:
`True`

Variables can also be assigned boolean values, which are true and false! With "and" statements, both or all arguments need to be true to equal true in total! With "or" statements, only one needs to be true to equal true in total! Both or all need to be false to be false in total!

## For loop example

```lua
for i = 1, 5 do
  print("Hello!")
end
```

The following output is repeated 5 times:
`Hello!`

```lua
for i = 1, 10 do
  print(i)
end
```

Output:

```
1
2
3
4
5
6
7
8
9
10
```

```lua
for i = 1, 10, 2 do
  print(i)
end
```

Output:

```
1
3
5
7
9
```

```lua
for i = 0, -10, -1 do
  print(i)
end
```

Output:

```
0
-1
-2
-3
-4
-5
-6
-7
-8
-9
-10
```

```lua
local loopcount = 25
for i = 1, loopcount do
  print("Loop!")
end
```

The following output is repeated 25 times:
`Loop!`

For loops are useful for running the same code multiple times! The first line of the for loop has the syntax for `i = Index, End Value, Increments`. You set i as your starting value, separate with a comma, set your end value, and you can optionally set your increment as your third value. Don't forget the "do"!

## Nested for loop example

```lua
for i = 1, 5 do
  print("This is the outer loop!")
  for j = 1, 3 do
    print("This is the inner loop!")
  end
end
```

The following output is repeated 5 times:

```
This is the outer loop!
This is the inner loop!
This is the inner loop!
This is the inner loop!
```

```lua
local swim_laps = 10
local paddles = 5
for i = 1, swim_laps do
  print("Lap: " .. i)
  for j = 1, paddles do
    print("Paddle: " .. j)
  end
end
```

Output:

```
Lap: 1
Paddle: 1
Paddle: 2
```

...etc.

```lua
for i = 1, 5 do
  for i = 1, 2 do
    print("This is fine!")
  end
end
```

The following output is repeated 10 times: `This is fine!`

You are allowed to put for loops inside of other for loops! In if you put a for loop that repeats 3 times inside of a for loop that repeats 5 times, that inner loop runs 15 times total! With for loops, you can use any variable as your index! And with nested for loops, it is good practice to use different variables, like using i and j instead of using i twice.

## While loop example

```lua
local x = 3
while x > 0 do
  print(x)
  x = x - 1
end
```

Output:

```
3
2
1
```

```lua
local x = 3
local y = 4
while x > 0 and y > 0 do
  print(x,y)
  x = x - 1
  y = y - 1
end
```

Output:

```
3 4
2 3
1 2
```

```lua
while true do
  print("Hello!")
end
```

The following output is repeated indefinitely: `Hello!`

A while loop is very similar to a for loop, except you can think of it as an if statement and for loop combined! The while loop runs while the conditions are true. So for a while true do loop, the loop runs forever! Be careful when making a while true do loop!

## Break loops example

```lua
while true do
  print("loop!")
  break
end
```

The above loop will only run once. Output: `loop!`

```lua
x = 0
while true do
  print("loop!")
  x = x + 1
  if x >= 2 then
    break
  end
end
```

The above loop will run 2 times. Output:

```
loop!
loop!
```

```lua
for i = 1, 10 do
  print(i)
  if i >= 3 then
    break
  end
end
```

Output:

```
1
2
3
```

Using `break` is very useful! The purpose for `break` is to stop a loop from running! So using `break` in a for or while loop will ultimately terminate it!

## Functions example

```lua
local function myFunction()
  local x = 4
  local y = 2
  print(x + y)
end

myFunction()
```

Output:

```
6
```

```lua
local function AddNum(num1, num2)
  print(num1 + num2)
end

AddNum(99,121)
AddNum(44,33)
```

Output:

```
220
77
```

```lua
local function Cubed(number)
  newNumber = number * number * number
  return newNumber
end

local x = Cubed(2)
local y = Cubed(3)

print(x,y)

local a = Cubed(10)
print(a)
```

Output:

```
8 27
1000
```

Functions are good for reducing the amount of code you have to write. If you have a piece of code you are going to use over and over with slightly different values, then make that piece of code a function! You can give functions **parameters** which is the num1 and num2 in myFunction(num1, num2). When you use the function later in your code, don't forget to fill in the parentheses! You can also use `return` to essentially turn a function into a value.

## Tables example

```lua
local myTable = { 1, 5, 3 }

print(myTable[1])
print(myTable[2])
print(myTable[3])
```

Output:

```
1
5
3
```

```lua
local names = {
  "Bob",
  "Moses",
  "Joe"
}
for i = 1, #names do
  print(names[i])
end

names[4] = "Dawn"
print(names[4])
table.insert(names,"Rambo")
print(names[5])
```

Output:

```
Bob
Moses
Joe
Dawn
Rambo
```

```lua
local person = {
  health = 100,
  speed = 20,
  isAwesome = true,
  name = "John"
}
print("This person's health is " .. person.health)
print("This person's health is " .. person["health"])
print("This person's speed is " .. person.speed)
print("This person is awesome. " .. person.isAwesome)
print("This person's name is " .. person.name)
print("This person's name is " .. person["name"])

person.home = "USA"
person["money"] = 250

print("This person's home is " .. person.home)
print("This person has " .. person["money"] .. " dollars!")

```

Output:

```
This person's health is 100
This person's health is 100
This person's speed is 20
This person is awesome. true
This person's name is John
This person's name is John
This person's home is USA
This person has 250 dollars!
```

Tables are very good for storing lots of information. You can even put things inside of tables after the table is made! Done with table.insert(TableName, data) or you add things with table[n] = data. And remember, the table doesn't have to be defined on the same line! The brackets {} can be on separate lines to make it easier to read!

## `for i, v in pairs()` loop example

```lua
local numbers = { 3, 4, 99, 202, -3 }

for i, v in pairs(numbers) do
  print(i, v)
end
```

Output:

```
1 3
2 4
3 99
4 202
5 -3
```

```lua
local names = { "Jack", "Mike", "Melinda", "Stacy" }

for index, person in pairs(names) do
  print("Person " .. index .. " is " .. person)
end
```

Output:

```
Person 1 is Jack
Person 2 is Mike
Person 3 is Melinda
Person 4 is Stacy
```

For i, v in pairs loops are a useful kind of for loop! They basically go through a list and use the data stored in the table. The variable i is the index or position of the table where the data is stored. The variable v is the value of the data. Inside of pairs() is the table you want to use: pairs(TableName). The variables don't have to be named "i" and "v", they can be named whatever you want!
