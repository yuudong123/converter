import React, { useState } from "react";

function App() {
  const [minutes, setMinutes] = useState("");
  const [disable, setDisable] = useState(true);

  const reverseInput = () => {
    setDisable((prev) => !prev);
  };

  return (
    <div className="App">
      <h1>단위 환산기</h1>
      <p>시간을 분으로 환산해주는 리액트 앱</p>
      <form onSubmit={(e) => e.preventDefault()}>
        {disable ? (
          <>
            <div>
              <input type="number" placeholder="minute" value={minutes} onChange={(e) => setMinutes(e.target.value)} disabled={!disable} />
              <label htmlFor="">minutes</label>
            </div>
            <div>
              <input type="number" placeholder="hour" value={minutes / 60} disabled={disable} />
              <label htmlFor="">hours</label>
            </div>
          </>
        ) : (
          <>
            <div>
              <input type="number" placeholder="hour" value={minutes / 60} disabled={disable} />
              <label htmlFor="">hours</label>
            </div>
            <div>
              <input type="number" placeholder="minute" value={minutes} onChange={(e) => setMinutes(e.target.value)} disabled={!disable} />
              <label htmlFor="">minutes</label>
            </div>
          </>
        )}
      </form>
      <button onClick={reverseInput}>반전</button>
    </div>
  );
}

export default App;
