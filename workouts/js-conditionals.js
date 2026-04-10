/* eslint-disable import/no-anonymous-default-export */

export default [
   {
      content: `  let widgets = ##;
  let gadgets = ##;
  
  if(widgets > gadgets){
    widgets = widgets - gadgets;
  }`,
      solveFor: 'widgets',
   },
   {
      content: `  const count = ##;
  let howMany = "a few";

  if(count >= ##){
    howMany = "So many!"
  }`,
      solveFor: 'howMany',
   },
   {
      content: `   let age = ##;
    let canVote;

    if(age >= 18){
      canVote = true;
    }
    else{
      canVote = false;
    }`,
      solveFor: 'canVote',
   },
   {
      content: `
    const babyStartedWalking = #-#; //months old
    let howTheyDoin;

    if(babyStartedWalking < 8){
      howTheyDoin = "Dang baby, how you doin' that??";
    }
    else if(babyStartedWalking < 14){
      howTheyDoin = "What you so proud of?";
    }
    else{
      howTheyDoin = "Get off ya butt, baby!";
    }`,

      solveFor: 'howTheyDoin',
   },
   {
      content: `    let inchesOfSnow = ##;
    let schoolStatus;

    if(inchesOfSnow >= 5){
      schoolStatus = "Cancel";
    }
    else if(inchesOfSnow >= 1){
      schoolStatus = "Delay";
    }
    else{
      schoolStatus = "Open";
    }`,
      solveFor: 'schoolStatus',
   },
   {
      content: `    let inchesOfSnow = ##;
    let schoolStatus;

    if(inchesOfSnow < 1){
      schoolStatus = "Open";
    }
    else if(inchesOfSnow < 5){
      schoolStatus = "Delay";
    }
    else{
      schoolStatus = "Cancel";
    }`,
      solveFor: 'schoolStatus',
   },
   {
      content: `    let inchesOfSnow = ##;
    let iceAmount = #.# //fraction of inch ice
    let schoolStatus;

    if(inchesOfSnow >= 5){
      schoolStatus = "Snow - Cancel";
    }
    else if(inchesOfSnow >= 1){
      if(iceAmount > 0.4){
        schoolStatus = "Ice - Cancel";
      }
      else{
        schoolStatus = "Delay";
      }
    }
    else{
      schoolStatus = "Open";
    }`,
      solveFor: 'schoolStatus',
   },
   {
      content: `    let inchesOfSnow = ##;
    let iceAmount = #.#; //fraction of inch ice
    let schoolStatus;

    if(inchesOfSnow >= 5){
      schoolStatus = "Snow - Cancel";
    }
    else if(inchesOfSnow >= 1){
      if(iceAmount > 0.5){
        schoolStatus = "Ice - Cancel";
      }
      else{
        schoolStatus = "Snow - Delay";
      }
    }
    else{
      if(iceAmount > 0.25){
        schoolStatus = "Ice - Delay";
      }
      else{
        schoolStatus = "Open";
      }
    }`,
      solveFor: 'schoolStatus',
   },
   {
      content: `    let inchesOfSnow = ##;
    let iceAmount = #.#; //fraction of inch ice
    let schoolStatus;

    if(inchesOfSnow >= 5){
      schoolStatus = "Snow - Cancel";
    }
    else if(inchesOfSnow >= 1 && iceAmount > 0.5){
        schoolStatus = "Ice & Snow - Cancel";
    }
    else if (inchesOfSnow >= 1 || iceAmount > 0.25){
        schoolStatus = "Delay";
    }
    else{
      schoolStatus = "Open";
    }`,
      solveFor: 'schoolStatus',
   },
   {
      content: `    let x = ## + 3;

    if(x > 5){
      x = 10;
    }`,
      solveFor: 'x',
   },
   {
      content: `    let x = ## + 3;

    if(x > 5){
      x = 10;
    }

    if(x <= 5){
      x = 0;
    }`,
      solveFor: 'x',
   },
   {
      content: `    let age = ## + 7;
    let canHuntDeer = age > 12;
    let answer = "No";

    if(canHuntDeer){
      answer = "Yes";
    }`,
      solveFor: 'answer',
   },
   {
      content: `    let age = ## + 7;
    let canRideBike = **;
    let bigKid = age > 10 && canRideBike;
    let answer = "No";
 
    `,
      solveFor: 'answer',
   },
   {
      content: `  
    
    
    var let = "All done. Nice work!"`,
      solveFor: 'yay',
   },
];
