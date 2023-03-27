import React, { useState } from "react";
import styles from "./MinutesToHours.module.css";
function MinutesToHours() {
  const [minutes, setMinutes] = useState("");
  const [hours, setHours] = useState("");
  const [disable, setDisable] = useState(true);

  const reverseInput = () => {
    setDisable((prev) => !prev);
  };
  const resetInput = () => {
    setMinutes("");
    setHours("");
  };
  return (
    <div className="App">
      <h1 className={styles.title}>MinutesToHours</h1>
      <p>시간-분 변환 앱</p>
      <form onSubmit={(e) => e.preventDefault()}>
        {disable ? (
          <>
            <div>
              <input
                type="number"
                placeholder="minute"
                value={minutes}
                disabled={!disable}
                onChange={(e) => {
                  setMinutes(e.target.value);
                  setHours(minutes / 60);
                }}
              />
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
              <input
                type="number"
                placeholder="hour"
                value={hours}
                disabled={!disable}
                onChange={(e) => {
                  setHours(e.target.value);
                  setMinutes(hours * 60);
                }}
              />
              <label htmlFor="">hours</label>
            </div>
            <div>
              <input type="number" placeholder="minute" value={hours * 60} disabled={disable} />
              <label htmlFor="">minutes</label>
            </div>
          </>
        )}
        <button onClick={reverseInput}>반전</button>
        <button onClick={resetInput}>초</button>
      </form>
    </div>
  );
}

export default MinutesToHours;
