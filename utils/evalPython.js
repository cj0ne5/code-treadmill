let pyodideInstance = null;
let loadingPromise = null;

const loadPyodideScript = () =>
   new Promise((resolve, reject) => {
      if (typeof window === 'undefined') return reject('no window');
      if (window.loadPyodide) return resolve();
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js';
      script.onload = resolve;
      script.onerror = () => reject(new Error('Failed to load Pyodide'));
      document.head.appendChild(script);
   });

export const initPyodide = () => {
   if (pyodideInstance) return Promise.resolve(pyodideInstance);
   if (!loadingPromise) {
      loadingPromise = loadPyodideScript()
         .then(() => window.loadPyodide())
         .then((pyodide) => {
            pyodideInstance = pyodide;
            return pyodide;
         });
   }
   return loadingPromise;
};

const evalPython = async (code, solveFor) => {
   try {
      const pyodide = await initPyodide();
      pyodide.globals.set('_code', code);
      pyodide.globals.set('_solve', solveFor);
      pyodide.runPython(`
_ns = {}
exec(_code, _ns)
_result = eval(_solve, _ns)
`);
      const result = pyodide.globals.get('_result');
      return String(result);
   } catch (error) {
      return error.toString();
   }
};

export default evalPython;
