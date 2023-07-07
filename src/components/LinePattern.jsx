import React from "react";

function LinePattern({ lengths, children }) {
  if (React.Children.count(children) !== lengths.length) {
    throw new Error(
      "Mismatch between number of lengths and number of children"
    );
  }

  return (
    <div className="container">
      {lengths.map((lengthPair, i) => (
        <div key={i} className="layer">
          <div
            className="line"
            style={{ width: `${lengthPair[0]}%`, left: 0 }}
          />
          <div className="text-container">{children[i]}</div>
          <div
            className="line"
            style={{ width: `${lengthPair[1]}%`, right: 0 }}
          />
        </div>
      ))}
    </div>
  );
}

export default LinePattern;
