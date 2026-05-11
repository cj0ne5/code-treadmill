/* eslint-disable import/no-anonymous-default-export */
export default [
  {
    content: `  let num = ##;`,
    solveFor: "num",
  },
  {
    content: `  let count = ##;
   count = count + ##;`,
    solveFor: "count",
  },
  {
    content: `  let x = #-#;
          x = x - ##;     `,
    solveFor: "x",
  },
  {
    content: `  let counter = ##;
         counter += ##;    `,
    solveFor: "counter",
  },
  {
    content: `  let counter = ##;
         counter++;    `,
    solveFor: "counter",
  },
  {
    content: `  let counter = ##;
    counter--;    `,
    solveFor: "counter",
  },
  {
    content: `  let i = ##;
         i -= ##;    
             `,
    solveFor: "i",
  },
  {
    content: `  let a = ##;
          let b = ##;
          b = a;
          `,
    solveFor: "b",
  },
  {
    content: `  let num1 = ##;
          let num2 = ##;
          num1 = num2;
          `,
    solveFor: "num1",
  },
  {
    content: `  let i = ##;
          let j = ##;
          i = i + j;
          `,
    solveFor: "i",
  },
  {
    content: `  let x = ##;
          let y = ##;
          x += y;
          `,
    solveFor: "x",
  },
  {
    content: `  let a = ##;
          let b = ##;
          let c;
          c = a;
          a = b;
          b = c;
          `,
    solveFor: "c",
  },
  {
    content: `  let a = ##;
          let b = ##;
          let c;
          c = a;
          a = b;
          b = c;
          `,
    solveFor: "a",
  },
  {
    content: `  let a = ##;
          let b = ##;
          let c;
          c = a;
          a = b;
          b = c;
          `,
    solveFor: "b",
  },
  {
    content: `  let radius = ##;
         let diameter = radius * 2
         `,
    solveFor: "diameter",
  },
  {
    content: `
       let r = #-#;
       let s = r/2;
       r = s;
       r *= 2;
         `,
    solveFor: "r",
  },
  {
    content: `
       let t;
       let u = ##;
       let v = @@;
       t = v + u;
         `,
    solveFor: "t",
  },
  {
    content: `
        let t;
        let u = ##;
        let v = @@;
        t = v + u;
          `,
    solveFor: "t",
  },
  {
    content: `
       let result = $$ + " " + @@;
         `,
    solveFor: "result",
  },
  {
    content: `
       let adjective = $$;
       let animal = @@;
       let result = adjective + " " + animal;
         `,
    solveFor: "result",
  },
  {
    content: `
      let adjective = $$;
      let animal = @@;
      let person = ^^;
      let result = adjective + " " + person;
        `,
    solveFor: "result",
  },
  {
    content: `
      let person = ^^;
      let animal = @@;
      let result = person + " has an " + animal;
        `,
    solveFor: "result",
  },
];
