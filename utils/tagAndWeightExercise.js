import { codeTags } from './codeTags';
import evalCode from './evalCode';
import fillItAndPrettify from './fillItAndPrettify';

export default function tagAndWeightExercise(content, solveFor, maker, lang) {
   let complexity = 0;
   const tagsUsed = codeTags.filter(({ tag }) => {
      return (content + solveFor).indexOf(tag) > 0;
   });

   tagsUsed.forEach(({ tag, weight }) => {
      complexity += (content.split(tag).length - 1) * weight;
   });

   const isPython = lang === 'py';
   let answerType = 'text';
   let answerLength = 10;

   if (!isPython) {
      let ans = evalCode(fillItAndPrettify(content, maker), solveFor);
      answerType = Number.isInteger(parseInt(ans.substring(0, 1), 10)) ? 'number' : 'text';
      answerLength = ans.toString().length;
   }

   return {
      type: 'read',
      content,
      solveFor: fillItAndPrettify(solveFor, maker || isPython),
      complexity: Math.round(complexity / 1.5),
      tagsUsed,
      answerType,
      answerLength,
   };
}
