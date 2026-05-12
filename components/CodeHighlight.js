import Highlight, { defaultProps } from "prism-react-renderer";
import React, { Fragment } from "react";

function CodeHighlight(code, t, language = "javascript") {
  return (
    <Highlight {...defaultProps} theme={t} code={code} language={language}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <Fragment>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Fragment>
      )}
    </Highlight>
  );
}

export default CodeHighlight;
