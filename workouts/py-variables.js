/* eslint-disable import/no-anonymous-default-export */
export default [
   {
      content: `num = ##`,
      solveFor: 'num',
   },
   {
      content: `count = ##
count = count + ##`,
      solveFor: 'count',
   },
   {
      content: `x = #-#
x = x - ##`,
      solveFor: 'x',
   },
   {
      content: `counter = ##
counter += ##`,
      solveFor: 'counter',
   },
   {
      content: `counter = ##
counter += 1`,
      solveFor: 'counter',
   },
   {
      content: `counter = ##
counter -= 1`,
      solveFor: 'counter',
   },
   {
      content: `i = ##
i -= ##`,
      solveFor: 'i',
   },
   {
      content: `a = ##
b = ##
b = a`,
      solveFor: 'b',
   },
   {
      content: `num1 = ##
num2 = ##
num1 = num2`,
      solveFor: 'num1',
   },
   {
      content: `i = ##
j = ##
i = i + j`,
      solveFor: 'i',
   },
   {
      content: `x = ##
y = ##
x += y`,
      solveFor: 'x',
   },
   {
      content: `a = ##
b = ##
c = None
c = a
a = b
b = c`,
      solveFor: 'c',
   },
   {
      content: `a = ##
b = ##
c = None
c = a
a = b
b = c`,
      solveFor: 'a',
   },
   {
      content: `a = ##
b = ##
c = None
c = a
a = b
b = c`,
      solveFor: 'b',
   },
   {
      content: `radius = ##
diameter = radius * 2`,
      solveFor: 'diameter',
   },
   {
      content: `r = #-#
s = r / 2
r = s
r *= 2`,
      solveFor: 'r',
   },
   {
      content: `result = $$ + " " + @@`,
      solveFor: 'result',
   },
   {
      content: `adjective = $$
animal = @@
result = adjective + " " + animal`,
      solveFor: 'result',
   },
   {
      content: `adjective = $$
animal = @@
person = ^^
result = adjective + " " + person`,
      solveFor: 'result',
   },
   {
      content: `person = ^^
animal = @@
result = person + " has an " + animal`,
      solveFor: 'result',
   },
];
