/* eslint-disable import/no-anonymous-default-export */
export default [
   {
      content: `names = [^^, ^^, ^^]`,
      solveFor: 'len(names)',
   },
   {
      content: `# zero is actually the first index

ages = [##, ##, ##]`,
      solveFor: 'ages[0]',
   },
   {
      content: `letters = [~~, ~~, ~~]`,
      solveFor: 'letters[1]',
   },
   {
      content: `weights = [#-#, #-#, #-#, #-#, #-#, #-#, #-#, #-#, #-#]`,
      solveFor: 'weights[##]',
   },
   {
      content: `names = [^^, ^^, ^^]`,
      solveFor: 'len(names[0])',
   },
   {
      content: `votes = [#-#, #-#, #-#, #-#, #-#, #-#, #-#, #-#, #-#]
result = votes[0] + votes[1]`,
      solveFor: 'result',
   },
   {
      content: `names = [^^, ^^, ^^]`,
      solveFor: 'names[-1]',
   },
   {
      content: `# sometimes len() means different things

names = [^^, ^^, ^^]`,
      solveFor: 'len(names[-1])',
   },
   {
      content: `wild_beasts = [@@, @@, @@]
gentle_pets = [@@, @@, @@]

temp = wild_beasts[1]
wild_beasts[1] = gentle_pets[2]
gentle_pets[2] = temp`,
      solveFor: 'wild_beasts[1]',
   },
   {
      content: `descriptions = [$$, $$, $$]
descriptions.append($$)`,
      solveFor: 'descriptions[3]',
   },
   {
      content: `descriptions = [$$, $$, $$, $$]
descriptions.append($$)`,
      solveFor: 'len(descriptions)',
   },
   {
      content: `scores = [##, ##, ##, ##, ##]
result = max(scores)`,
      solveFor: 'result',
   },
   {
      content: `scores = [##, ##, ##, ##, ##]
result = min(scores)`,
      solveFor: 'scores.index(result)',
   },
   {
      content: `veterinary_waiting_room = [@@, @@, @@, @@, @@, @@]
veterinary_waiting_room.pop()`,
      solveFor: 'len(veterinary_waiting_room)',
   },
   {
      content: `still_waiting = [@@, @@, @@, @@, @@, @@, @@]
still_waiting.pop()`,
      solveFor: 'still_waiting[-1]',
   },
   {
      content: `naughty_list = [^^, ^^, ^^, ^^]
hotty_list = [^^, ^^, ^^]
naughty_hotty_list = naughty_list + hotty_list`,
      solveFor: 'naughty_hotty_list[-1]',
   },
   {
      content: `deadly = [@@, @@, @@, @@]
cuddly = [@@, @@, @@, @@, @@, @@]
deadly.pop()

cuddly = cuddly + deadly`,
      solveFor: 'cuddly[##]',
   },
   {
      content: `deadly = [@@, @@, @@, @@]
cuddly = [@@, @@, @@, @@, @@, @@]
deadly.pop()

cuddly = deadly + cuddly`,
      solveFor: 'cuddly[##]',
   },
   {
      content: `letters = [~~, ~~, ~~]
and_now = "".join(letters)`,
      solveFor: 'and_now',
   },
   {
      content: `letters = [~~, ~~, ~~]
but_here = "-".join(letters)`,
      solveFor: 'but_here',
   },
   {
      content: `letters = [~~, ~~, ~~]
maybe_also = ~~.join(letters)`,
      solveFor: 'maybe_also',
   },
   {
      content: `letters = [~~, ~~, ~~]
but_usually = ", ".join(letters)`,
      solveFor: 'but_usually',
   },
   {
      content: `name = "Genevieve"
split_up = name.split('e')`,
      solveFor: 'split_up[0]',
   },
   {
      content: `name = "Genevieve"
split_up = name.split('v')`,
      solveFor: 'split_up[0]',
   },
   {
      content: `name = "Genevieve"
split_up = name.split('ev')`,
      solveFor: 'split_up[1]',
   },
   {
      content: `some_stuff = "First Name, Last Name, Age, Height, Weight, Eye Color, DOB, Address, Organ Donor"
like_this = some_stuff.split(', ')`,
      solveFor: 'like_this[##]',
   },
   {
      content: `a_sentence = !!
or_this = a_sentence.split(' ')`,
      solveFor: 'or_this[2]',
   },
   {
      content: `# and finally, some weird nonsense

pass_code = "The " + $$ + @@ + " named " + ^^ + "!"
parts = pass_code.split('e')`,
      solveFor: 'len(parts)',
   },
];
