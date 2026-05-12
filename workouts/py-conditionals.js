/* eslint-disable import/no-anonymous-default-export */
export default [
   {
      content: `widgets = ##
gadgets = ##

if widgets > gadgets:
    widgets = widgets - gadgets`,
      solveFor: 'widgets',
   },
   {
      content: `count = ##
how_many = "a few"

if count >= ##:
    how_many = "So many!"`,
      solveFor: 'how_many',
   },
   {
      content: `age = ##

if age >= 18:
    can_vote = True
else:
    can_vote = False`,
      solveFor: 'can_vote',
   },
   {
      content: `baby_started_walking = #-#  # months old

if baby_started_walking < 8:
    how_they_doin = "Dang baby, how you doin' that??"
elif baby_started_walking < 14:
    how_they_doin = "What you so proud of?"
else:
    how_they_doin = "Get off ya butt, baby!"`,
      solveFor: 'how_they_doin',
   },
   {
      content: `inches_of_snow = ##

if inches_of_snow >= 5:
    school_status = "Cancel"
elif inches_of_snow >= 1:
    school_status = "Delay"
else:
    school_status = "Open"`,
      solveFor: 'school_status',
   },
   {
      content: `inches_of_snow = ##

if inches_of_snow < 1:
    school_status = "Open"
elif inches_of_snow < 5:
    school_status = "Delay"
else:
    school_status = "Cancel"`,
      solveFor: 'school_status',
   },
   {
      content: `inches_of_snow = ##
ice_amount = #.#  # fraction of inch

if inches_of_snow >= 5:
    school_status = "Snow - Cancel"
elif inches_of_snow >= 1:
    if ice_amount > 0.4:
        school_status = "Ice - Cancel"
    else:
        school_status = "Delay"
else:
    school_status = "Open"`,
      solveFor: 'school_status',
   },
   {
      content: `inches_of_snow = ##
ice_amount = #.#  # fraction of inch

if inches_of_snow >= 5:
    school_status = "Snow - Cancel"
elif inches_of_snow >= 1:
    if ice_amount > 0.5:
        school_status = "Ice - Cancel"
    else:
        school_status = "Snow - Delay"
else:
    if ice_amount > 0.25:
        school_status = "Ice - Delay"
    else:
        school_status = "Open"`,
      solveFor: 'school_status',
   },
   {
      content: `inches_of_snow = ##
ice_amount = #.#  # fraction of inch

if inches_of_snow >= 5:
    school_status = "Snow - Cancel"
elif inches_of_snow >= 1 and ice_amount > 0.5:
    school_status = "Ice & Snow - Cancel"
elif inches_of_snow >= 1 or ice_amount > 0.25:
    school_status = "Delay"
else:
    school_status = "Open"`,
      solveFor: 'school_status',
   },
   {
      content: `x = ## + 3

if x > 5:
    x = 10`,
      solveFor: 'x',
   },
   {
      content: `x = ## + 3

if x > 5:
    x = 10

if x <= 5:
    x = 0`,
      solveFor: 'x',
   },
   {
      content: `age = ## + 7
can_hunt_deer = age > 12
answer = "No"

if can_hunt_deer:
    answer = "Yes"`,
      solveFor: 'answer',
   },
   {
      content: `age = ## + 7
can_ride_bike = %%
big_kid = age > 10 and can_ride_bike
answer = "No"`,
      solveFor: 'answer',
   },
];
