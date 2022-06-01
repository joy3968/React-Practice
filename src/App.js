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
      <button onClick={ 제목바꾸기 }>버튼</button>
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
