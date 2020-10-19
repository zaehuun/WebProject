import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Join.css";

function Join() {
  const warning = () => {
    alert("아직 준비중입니다.");
  };

  const handleSubmit = e => {
    e.preventDefault();

    axios({
      method: 'post',
      url: '/join/',
      data : {
        username : document.getElementById('Name').value,
        userid : document.getElementById('Student-id').value,
        userpassword : document.getElementById('Passward').value,
        state : document.getElementById('state').value
      }
    });
    warning();
  };
  return (
    <section id="sign-up">
      <header>
        <Link to="/">
          <img src="/images/logo_test.png" className="logo-img" alt="logo_sample" />
        </Link>
      </header>
      <hr />

      <form className="form-signup" onSubmit={handleSubmit}>
        <h1 className="title">회원가입</h1>
        <br />
        <div className="input-box">
          <label htmlFor="Name">이름</label> <br />
          <input type="text" name="username" className="log-box" id="Name" placeholder="ex)홍길동" required />
          <br />
        </div>

        <div className="input-box">
          <label htmlFor="Student_id">학번</label> <br />
          <input type="text" name="userid" className="log-box" id="Student-id" placeholder="ex)20200000" maxLength="8" minLength="8" required />
          <br />
        </div>

        <div className="input-box">
          <label htmlFor="Passward">비밀번호</label> <br />
          <input  type="password" name="userpassword" className="log-box" id="Passward" placeholder="password" required />
          <br />
        </div>

        <div className="student-state">
          <h2>학적상태</h2>
          <div className="radio-box">
            <input id="state" name="state" type="radio" value="ing" required />
            <label htmlFor="attending">재학</label>
            <br />
          </div>
          <div className="radio-box">
            <input name="state"  type="radio" value="break" required />
            <label htmlFor="take-off">휴학</label>
            <br />
          </div>
          <div className="radio-box">
            <input name="state"  type="radio" value="grad" required />
            <label htmlFor="graduated">졸업</label>
          </div>
        </div>
        <button className="log-button" type="submit">
          회원가입
        </button>
      </form>

      <footer>
        <p className="text-center">&copy;2020.10.07</p>
      </footer>
    </section>
  );
}

export default Join;
