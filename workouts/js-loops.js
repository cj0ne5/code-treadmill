/* eslint-disable import/no-anonymous-default-export */
export default [
   {
      content: `
        let num = 0;

        while(num < #-#){
          num = num +1
        }

         `,
      solveFor: 'num',
   },
   {
      content: `
     let num = #-#;

     while(num < ##){
       num = num - 1;
     }

      `,
      solveFor: 'num',
   },
   {
      content: `
     let num = #-#;

     while(num >= ##){
       num = num - 1;
     }

      `,
      solveFor: 'num',
   },
   {
      content: `
     let num = #-#;

     while(num > ##){
       num = num - 1;
     }

      `,
      solveFor: 'num',
   },
   {
      content: `
     let num = 15;

     while(num == 15){
       num = num - ##;
     }

      `,
      solveFor: 'num',
   },
   {
      content: `
       let num = ##;
       count = 0;
       while(num < #-#){
         num = num + 1;
         count = count + 2;
       }

        `,
      solveFor: 'count',
   },
   {
      content: `
     let count = ##;
    for(let i = 0; i < ##; i++){
     count = count + 1;
    }

      `,
      solveFor: 'count',
   },

   {
      content: `
     let count = #-#;
    for(let i = 0; i < ##; i++){
     count = count - 1;
    }

      `,
      solveFor: 'count',
   },
   {
      content: `
     let count = #-#;
     let amt = ##;
    for(let i = 0; i < 3; i++){
     count = count - amt;
    }

      `,
      solveFor: 'count',
   },
   {
      content: `
     let count = #-#;
     let amt = ##;
    for(let i = 0; i < 3; i++){
      if(count > ##){
        count = count - amt;
      }

    }

      `,
      solveFor: 'count',
   },
   {
      content: `
     let count = #-#;
     let amt = ##;
    for(let i = 0; i < 3; i++){
     if(count > #-#){
       count = count - amt;
     }
     else {
       count = count + 1;
     }
    }

      `,
      solveFor: 'count',
   },
   {
      content: `
     let count = #-#;
     let amt = ##;
    for(let i = 0; i < 3; i++){
     if(count > #-#){
       count = count - amt;
     }
     else {
       count = count + 1;
     }
    }

      `,
      solveFor: 'count',
   },
   {
      content: `
  let count = 0;
 for(let i = 0; i < 3000; i++){
  count = count + 1;
 }

   `,
      solveFor: 'count',
   },
];
