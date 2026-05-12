/* eslint-disable import/no-anonymous-default-export */
export default [
   {
      content: `def do_this_thing(num):
    return num + num`,
      solveFor: 'do_this_thing(##)',
   },
   {
      content: `num = ##

def do_this_thing():
    return num + num`,
      solveFor: 'do_this_thing()',
   },
   {
      content: `count = ##

def do_this_thing(num):
    return num + num`,
      solveFor: 'do_this_thing(##)',
   },
   {
      content: `num = ##

def do_this_thing(num):
    # i'm bored
    return num + num`,
      solveFor: 'num',
   },
   {
      content: `num = #-#

def do_this_thing(num):
    # fire the person who named this parameter num
    return num`,
      solveFor: 'do_this_thing(##)',
   },
   {
      content: `num = ##

def do_this_thing():
    # not sure why you'd ever do this... but...
    local_num = ##`,
      solveFor: 'num',
   },
   {
      content: `num = #-#

def do_this_thing(num):
    # which num is it?
    num = num + num
    return num`,
      solveFor: 'do_this_thing(##)',
   },
   {
      content: `num = ##

def do_this_thing():
    # you'd probably never do this but...
    local_num = #-#
    # which num is it?
    return local_num`,
      solveFor: 'do_this_thing()',
   },
   {
      content: `num = #-#

def do_this_thing():
    local_num = ##
    return local_num * local_num`,
      solveFor: 'do_this_thing()',
   },
   {
      content: `num = ##

def do_this_thing():
    global num
    num += ##

do_this_thing()`,
      solveFor: 'num',
   },
   {
      content: `num = #-#

def do_this_thing():
    global num
    num += ##`,
      solveFor: 'num',
   },
   {
      content: `num = ##

def do_this_thing():
    global num
    num += ##

do_this_thing()
do_this_thing()`,
      solveFor: 'num',
   },
   {
      content: `num = ##

def do_something():
    global num
    num += ##

def do_something_else():
    global num
    num -= ##

do_something()
do_something_else()
do_something()`,
      solveFor: 'num',
   },
   {
      content: `num = ##

def add_ten():
    global num
    num += 10
    subtract_five()

def subtract_five():
    global num
    num -= 5

add_ten()`,
      solveFor: 'num',
   },
   {
      content: `num = ##

def add_ten():
    global num
    num += 10
    subtract_five()

def subtract_five():
    global num
    num -= 5

subtract_five()`,
      solveFor: 'num',
   },
   {
      content: `def mystery(thing):
    return len(thing)`,
      solveFor: 'mystery(@@)',
   },
   {
      content: `def what_do_we_do(thing):
    return len(thing)

def who_knows():
    you = ^^
    your_friend = ^^
    return you + your_friend`,
      solveFor: 'what_do_we_do(who_knows())',
   },
   {
      content: `def time_to_feed(person, pet):
    return person + "'s " + pet`,
      solveFor: 'time_to_feed(^^, @@)',
   },
   {
      content: `age = #-#

def how_old(person):
    # this would be dumb to do...
    age = ##
    # ...but...
    return person + " is " + str(age)`,
      solveFor: 'how_old(^^)',
   },
   {
      content: `num = #-#

def do_this_thing():
    return num - ##

num = do_this_thing()`,
      solveFor: 'num',
   },
   {
      content: `def do_this_thing(num):
    return num - ##

num = do_this_thing(#-#)`,
      solveFor: 'num',
   },
   {
      content: `# multiple returns is pretty normal

count = #-#

def whats_it_do(name):
    global count
    if len(name) >= 5:
        count -= 1
        return count
    return count`,
      solveFor: 'whats_it_do(^^)',
   },
   {
      content: `count = #-#

def and_this_one_too(name):
    global count
    if len(name) >= 5:
        count -= 1
        return count
    return count

# This'd be for using answer later, multiple times
answer = and_this_one_too($$)`,
      solveFor: 'answer',
   },
   {
      content: `total = #-#

def and_this(thing1, thing2):
    if len(thing1) >= 5:
        return len(thing2)
    return len(thing1)

def whats_this(amt):
    return "$" + str(amt) + "k"

answer = whats_this(and_this(@@, @@))`,
      solveFor: 'answer',
   },
];
