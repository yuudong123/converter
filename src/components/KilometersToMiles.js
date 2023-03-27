import React, { useState } from "react";
import styles from "./KilometersToMiles.module.css";
function KilometersToMiles() {
  const [kilometers, setKilometers] = useState("");
  const [miles, setMiles] = useState("");
  const [disable, setDisable] = useState(true);

  const reverseInput = () => {
    setDisable((prev) => !prev);
  };
  const resetInput = () => {
    setKilometers("");
    setMiles("");
  };
  return (
    <div className="App">
      <h1 className={styles.title}>KilometersToMiles</h1>
      <p>킬로미터-마일 변환 앱</p>
      <form onSubmit={(e) => e.preventDefault()}>
        {disable ? (
          <>
            <div>
              <input
                type="number"
                placeholder="km"
                value={kilometers}
                disabled={!disable}
                onChange={(e) => {
                  setKilometers(e.target.value);
                  setMiles(kilometers * 0.62137119);
                }}
              />
              <label htmlFor="">kilometers</label>
            </div>
            <div>
              <input type="number" placeholder="mile" value={kilometers * 0.62137119} disabled={disable} />
              <label htmlFor="">miles</label>
            </div>
          </>
        ) : (
          <>
            <div>
              <input
                type="number"
                placeholder="mile"
                value={miles}
                disabled={!disable}
                onChange={(e) => {
                  setMiles(e.target.value);
                  setKilometers(miles / 0.62137119);
                }}
              />
              <label htmlFor="">miles</label>
            </div>
            <div>
              <input type="number" placeholder="km" value={miles / 0.62137119} disabled={disable} />
              <label htmlFor="">kilometers</label>
            </div>
          </>
        )}
        <button onClick={reverseInput}>반전</button>
        <button onClick={resetInput}>초</button>
      </form>
    </div>
  );
}

export default KilometersToMiles;
