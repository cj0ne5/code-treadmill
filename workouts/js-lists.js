/* eslint-disable import/no-anonymous-default-export */

export default [
   {
      content: `
               const names = [^^, ^^, ^^];

               `,
      solveFor: 'names.length',
   },
   {
      content: `
         // zero is actually the first number

               const ages = [##, ##, ##];

               `,
      solveFor: 'ages[0]',
   },
   {
      content: `

                  const letters = [~~, ~~, ~~];

                  `,
      solveFor: 'letters[1]',
   },
   {
      content: `
               const weights = [#-#, #-#, #-#, #-#, #-#, #-#, #-#, #-#, #-#]

               `,
      solveFor: 'weights[##]',
   },
   {
      content: `
               const names = [^^, ^^, ^^];

               `,
      solveFor: 'names[0].length',
   },
   {
      content: `
                  const votes = [#-#, #-#, #-#, #-#, #-#, #-#, #-#, #-#, #-#];

                  let result = votes[0] + votes[1];

                  `,
      solveFor: 'result',
   },
   {
      content: `
                     const names = [^^, ^^, ^^];

                     `,
      solveFor: 'names[names.length - 1]',
   },
   {
      content: `
         // sometimes .length means different things

                  const names = [^^, ^^, ^^];

                  `,
      solveFor: 'names[names.length - 1].length',
   },
   {
      content: `
                  const wildBeasts = [@@, @@, @@];
                  const gentlePets = [@@, @@, @@];

                  let temp = wildBeasts[1];
                  wildBeasts[1] = gentlePets[2];
                  gentlePets[2] = temp;

                  `,
      solveFor: 'wildBeasts[1]',
   },
   {
      content: `

                     const descriptions = [$$, $$, $$];
                     descriptions[descriptions.length] = $$;

                     `,
      solveFor: 'descriptions[3]',
   },
   {
      content: `
                  const votes = [#-#, #-#, #-#, #-#, #-#, #-#, #-#, #-#, #-#,#-#, #-#, #-#];

                  `,
      solveFor: 'votes.indexOf(#-#)',
   },
   {
      content: `

                     const descriptions = [$$, $$, $$];
                     descriptions.push($$);

                     `,
      solveFor: 'descriptions[3]',
   },
   {
      content: `

                     const descriptions = [$$, $$, $$, $$];
                     descriptions.push($$);

                     `,
      solveFor: 'descriptions.length',
   },
   {
      content: `
                  const scores = [#-#, #-#, #-#, #-#, #-#, #-#, #-#, #-#];
                  let result = Math.max(...scores);

                  `,
      solveFor: 'result',
   },
   {
      content: `
                  const scores = [#-#, #-#, #-#, #-#, #-#, #-#, #-#];
                  let result = Math.min(...scores);

                  `,
      solveFor: 'scores.indexOf(result)',
   },
   {
      content: `
                     const veterinaryWaitingRoom = [@@, @@, @@, @@, @@, @@];
                     veterinaryWaitingRoom.pop();

                     `,
      solveFor: 'veterinaryWaitingRoom.length',
   },
   {
      content: `
                     const stillWaiting = [@@, @@, @@, @@, @@, @@, @@];
                     stillWaiting.pop();

                     `,
      solveFor: 'stillWaiting[stillWaiting.length-1]',
   },
   {
      content: `
                  const naughtyList = [^^, ^^, ^^, ^^];
                  const hottyList = [^^, ^^, ^^];
                  let naughtyHottyList = naughtyList.concat(hottyList);

                  `,
      solveFor: 'naughtyHottyList[naughtyHottyList.length-1]',
   },
   {
      content: `
                  const deadly = [@@, @@, @@, @@ ];
                  const cuddly = [@@, @@, @@, @@, @@, @@];
                  deadly.pop();

                  cuddly = cuddly.concat(deadly);

                  `,
      solveFor: 'cuddly[##]',
   },
   {
      content: `
                  const deadly = [@@, @@, @@, @@ ];
                  const cuddly = [@@, @@, @@, @@, @@, @@];
                  deadly.pop();

                  cuddly = deadly.concat(cuddly);

                  `,
      solveFor: 'cuddly[##]',
   },
   {
      content: `

               const letters = [~~, ~~, ~~];
               let andNow = letters.join("");
               `,
      solveFor: 'andNow',
   },
   {
      content: `

               const letters = [~~, ~~, ~~];
               let butHere = letters.join("-");
               `,
      solveFor: 'butHere',
   },
   {
      content: `

               const letters = [~~, ~~, ~~];
               let maybeAlso = letters.join(~~);
               `,
      solveFor: 'maybeAlso',
   },
   {
      content: `

               const letters = [~~, ~~, ~~];
               let butUsually = letters.join();
               `,
      solveFor: 'butUsually',
   },
   {
      content: `

               let name = "Genevieve";
               let splitUp = name.split('e');
               `,
      solveFor: 'splitUp[0]',
   },
   {
      content: `

               let name = "Genevieve";
               let splitUp = name.split('v');
               `,
      solveFor: 'splitUp[0]',
   },
   {
      content: `

               let name = "Genevieve";
               let splitUp = name.split('ev');
               `,
      solveFor: 'splitUp[1]',
   },
   {
      content: `

               let someStuff = "First Name, Last Name, Age, Height, Weight, Eye Color, DOB, Address, Organ Donor";
               let likeThis = someStuff.split(', ');
               `,
      solveFor: 'likeThis[##]',
   },
   {
      content: `

               let aSentence = !!;
               let orThis = aSentence.split(' ');
               `,
      solveFor: 'orThis[2]',
   },
   {
      content: `
        // and finally, some weird nonsense
        
         let passCode = "The " + $$ + @@ + " named " + ^^ + "!";
         let parts = passCode.split('e');
         `,
      solveFor: 'parts.length',
   },
];
