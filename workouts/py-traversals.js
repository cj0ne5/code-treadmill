/* eslint-disable import/no-anonymous-default-export */
export default [
   {
      content: `nums = [##, ##, ##, ##, ##]
total = 0
for n in nums:
    total = total + n`,
      solveFor: 'total',
   },
   {
      content: `words = [^^, ^^, ^^]
result = ""
for w in words:
    result = result + w`,
      solveFor: 'result',
   },
   {
      content: `nums = [##, ##, ##, ##, ##]
count = 0
for n in nums:
    if n > ##:
        count += 1`,
      solveFor: 'count',
   },
   {
      content: `scores = [#-#, #-#, #-#, #-#, #-#]
total = 0
for score in scores:
    total += score`,
      solveFor: 'total',
   },
   {
      content: `names = [^^, ^^, ^^, ^^]
result = []
for name in names:
    result.append(len(name))`,
      solveFor: 'result[0]',
   },
   {
      content: `nums = [##, ##, ##]
doubled = []
for n in nums:
    doubled.append(n * 2)`,
      solveFor: 'doubled[1]',
   },
   {
      content: `nums = [##, ##, ##, ##]
result = 0
for i in range(len(nums)):
    result = result + nums[i]`,
      solveFor: 'result',
   },
   {
      content: `nums = [##, ##, ##, ##]
maximum = nums[0]
for n in nums:
    if n > maximum:
        maximum = n`,
      solveFor: 'maximum',
   },
   {
      content: `count = ##
items = [^^, ^^, ^^]
for item in items:
    count = count + len(item)`,
      solveFor: 'count',
   },
   {
      content: `letters = [~~, ~~, ~~, ~~]
result = ""
for letter in letters:
    result = letter + result`,
      solveFor: 'result',
   },
];
