import React, { useState } from "react";
import styles from "./KilogramsToPounds.module.css";
function KilogramsToPounds() {
  const [kilograms, setKilograms] = useState("");
  const [pounds, setPounds] = useState("");
  const [disable, setDisable] = useState(true);

  const reverseInput = () => {
    setDisable((prev) => !prev);
  };
  const resetInput = () => {
    setKilograms("");
    setPounds("");
  };
  return (
    <div className="App">
      <h1 className={styles.title}>KilogramsToPounds</h1>
      <p>킬로그램-파운드 변환 앱</p>
      <form onSubmit={(e) => e.preventDefault()}>
        {disable ? (
          <>
            <div>
              <input
                type="number"
                placeholder="kg"
                value={kilograms}
                disabled={!disable}
                onChange={(e) => {
                  setKilograms(e.target.value);
                  setPounds(kilograms * 2.20462262185);
                }}
              />
              <label htmlFor="">kilograms</label>
            </div>
            <div>
              <input type="number" placeholder="pound" value={kilograms * 2.20462262185} disabled={disable} />
              <label htmlFor="">pounds</label>
            </div>
          </>
        ) : (
          <>
            <div>
              <input
                type="number"
                placeholder="pound"
                value={pounds}
                disabled={!disable}
                onChange={(e) => {
                  setPounds(e.target.value);
                  setKilograms(pounds / 2.20462262185);
                }}
              />
              <label htmlFor="">pounds</label>
            </div>
            <div>
              <input type="number" placeholder="kg" value={pounds / 2.20462262185} disabled={disable} />
              <label htmlFor="">kilograms</label>
            </div>
          </>
        )}
        <button onClick={reverseInput}>반전</button>
        <button onClick={resetInput}>초</button>
      </form>
    </div>
  );
}

export default KilogramsToPounds;
