import React from 'react';

function Children({ title, fact, anotherFact, textPosition }) {
  return (
    <div className={`container ${textPosition}`}>
      {title ? <h2>{title}</h2> : null}
      <div className={`container-children`}>
        {fact ? <p>{fact}</p> : null}
        {anotherFact ? <p>{anotherFact}</p> : null}
      </div>
    </div>
  );
}

export default Children;
