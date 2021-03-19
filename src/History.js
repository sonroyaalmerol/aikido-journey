import React from "react";
import "./History.css";

function History({ ref, onRender }) {
  React.useEffect(() => onRender);

  return (
    <div className="row" ref={ref}>
      <center>
        <img src="/history.png" style={{ width: '70%' }} />
      </center>
    </div>
  );
}

export default History;
