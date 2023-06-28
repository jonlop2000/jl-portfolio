import React from "react";

const LinePattern = ({ lengths }) => {
  return (
    <div className="line-container">
      {lengths.map((lengthPair, i) => (
        <div key={i} className="layer">
          <div className="line" style={{ width: `${lengthPair[0]}%` }} />
          <div className="line" style={{ width: `${lengthPair[1]}%` }} />
        </div>
      ))}
    </div>
  );
};

export default LinePattern;
