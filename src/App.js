/* eslint-disable */
// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  // var [a, b] = [10, 100]; // destructuring 이라는 신 문법.

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '추천 맛집', '챔피언스리그 일정']); // b에는 변경하는 함수가 들어감.
  let [따봉, 따봉변경] = useState(0);

  function 제목바꾸기 () {
    var newArray = [...글제목]; // deep copy -> 값 공유를 하지 않음.
    newArray[0] = '여자 코트 추천';
    글제목변경( newArray );
  }
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ () => {
        let copy = [...글제목]; // [...~~] 새로운 포인터 만듦.
        // state의 특징중 하나가 기존의 state와 신규 state가 같은 경우 변경되지 않는다. 배열이 변경되어도, 기존의 포인터는 같으므로 포인트를 변경해주지 않을 시 state가 변경되지 않음.

        copy[0] = '여자 코트 추천';
        글제목변경(copy)
      }}>글수정</button>
      <div className="list">
        <h3> { 글제목[0] }&nbsp;
          <span onClick={ ()=> { 따봉변경(따봉 + 1) } }>👍</span>{ 따봉 }
        </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[1] } </h3>
        <p>2월 18일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[2] } </h3>
        <p>2월 19일 발행</p>
        <hr/>
      </div>

      <Modal />

    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
export default App;
