/* eslint-disable import/no-anonymous-default-export */
export default [
   {
      content: `num = 0

while num < #-#:
    num = num + 1`,
      solveFor: 'num',
   },
   {
      content: `num = #-#

while num < ##:
    num = num - 1`,
      solveFor: 'num',
   },
   {
      content: `num = #-#

while num >= ##:
    num = num - 1`,
      solveFor: 'num',
   },
   {
      content: `num = #-#

while num > ##:
    num = num - 1`,
      solveFor: 'num',
   },
   {
      content: `num = 15

while num == 15:
    num = num - ##`,
      solveFor: 'num',
   },
   {
      content: `num = ##
count = 0
while num < #-#:
    num = num + 1
    count = count + 2`,
      solveFor: 'count',
   },
   {
      content: `count = ##
for i in range(##):
    count = count + 1`,
      solveFor: 'count',
   },
   {
      content: `count = #-#
for i in range(##):
    count = count - 1`,
      solveFor: 'count',
   },
   {
      content: `count = #-#
amt = ##
for i in range(3):
    count = count - amt`,
      solveFor: 'count',
   },
   {
      content: `count = #-#
amt = ##
for i in range(3):
    if count > ##:
        count = count - amt`,
      solveFor: 'count',
   },
   {
      content: `count = #-#
amt = ##
for i in range(3):
    if count > #-#:
        count = count - amt
    else:
        count = count + 1`,
      solveFor: 'count',
   },
   {
      content: `count = 0
for i in range(3000):
    count = count + 1`,
      solveFor: 'count',
   },
];
