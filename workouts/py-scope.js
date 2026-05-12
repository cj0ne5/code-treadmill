/* eslint-disable import/no-anonymous-default-export */
export default [
   // --- local vs global: function doesn't affect outer ---
   {
      content: `score = #-#

def reset_score():
    score = 0  # local variable, outer score unchanged

reset_score()`,
      solveFor: 'score',
   },
   {
      content: `name = ^^

def change_name():
    name = ^^  # local variable

change_name()`,
      solveFor: 'name',
   },
   // --- global keyword: function DOES affect outer ---
   {
      content: `total = ##

def add_points():
    global total
    total = total + ##

add_points()`,
      solveFor: 'total',
   },
   {
      content: `price = #-#

def apply_discount():
    global price
    price = price - ##

apply_discount()`,
      solveFor: 'price',
   },
   // --- shadowing: local var same name as outer ---
   {
      content: `x = ##

def double_it():
    x = ## * 2  # local x, outer x unchanged
    return x

result = double_it()`,
      solveFor: 'x',
   },
   {
      content: `count = ##

def count_up():
    count = 0  # local
    count += ##
    return count

result = count_up()`,
      solveFor: 'count',
   },
   // --- Python has no block scope (unlike JS let/const) ---
   {
      content: `# In Python, if blocks don't create new scope!
answer = ##

if True:
    answer = ##  # same variable as above`,
      solveFor: 'answer',
   },
   {
      content: `# for loops don't create new scope in Python

points = ##

for i in range(##):
    points = i`,
      solveFor: 'points',
   },
   // --- nested functions / closures ---
   {
      content: `base = ##

def outer():
    result = base + ##

    def inner():
        return result  # closure: can read outer's result

    return inner()

answer = outer()`,
      solveFor: 'answer',
   },
   // --- return value vs. global mutation ---
   {
      content: `total = ##

def get_double(n):
    return n * 2

result = get_double(##)`,
      solveFor: 'result',
   },
   {
      content: `level = ##

def next_level():
    level = ## + 1  # local
    return level

result = next_level()`,
      solveFor: 'result',
   },
   {
      content: `MAX = #-#
limit = MAX

def set_limit():
    limit = MAX - ##  # local
    return limit

result = set_limit()`,
      solveFor: 'result',
   },
];
