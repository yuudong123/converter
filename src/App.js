import React, { useState } from "react";
import MinutesToHours from "./components/MinutesToHours";
import KilometersToMiles from "./components/KilometersToMiles";
import KilogramsToPounds from "./components/KilogramsToPounds";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [userSelect, setUserSelect] = useState("0");
  const onChange = (e) => {
    setUserSelect(e.target.value);
  };
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={12} sm={2}>
            광고이미지[구글]
          </Col>
          <Col xs={12} sm={10}>
            <h1>모든 단위 환산기</h1>
            <p>변환하고자 하는 단위 환산기를 선택하세요!</p>
            <select onChange={onChange}>
              <option value="0">==== 선택하세요 ====</option>
              <option value="1">minutes를 hours로</option>
              <option value="2">km를 mile로</option>
              <option value="3">kg을 pound로</option>
            </select>
            {userSelect === "1" ? <MinutesToHours /> : null}
            {userSelect === "2" ? <KilometersToMiles /> : null}
            {userSelect === "3" ? <KilogramsToPounds /> : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
