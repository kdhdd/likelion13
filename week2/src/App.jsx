import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function App() {
  return (
    <div>
      <header className="header">
        <div className="intro-text">
          <div className="intro-lead-in">My Profile</div>
          <div className="intro-heading">나만의 웹사이트를 만들어봐요!</div>
        </div>
      </header>

      <nav className="navbar fixed-top">
        <ul>
          <li>
            <a href="#about">자기소개</a>
          </li>
          <li>
            <a href="#features">관심사</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="https://github.com/kdhdd" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </nav>

      <main className="main">
        <section id="about" className="section">
          <img className="img" src="미모티콘.jpg" alt="about_image" />
          <h2>
            프론트엔드 개발자 <b>김도현</b>입니다.
          </h2>
        </section>

        <section id="features" className="section">
          <h3>취미</h3>
          <ul>
            <li>게임 하기</li>
            <li>음악 감상</li>
            <li>운동 하기</li>
          </ul>
          <img
            className="img"
            src="https://static.hubzum.zumst.com/hubzum/2020/11/03/09/d534a7eb69ed4201b756a579192b6f8c.jpg"
            alt="guitar_image"
          />

          <h3>좋아하는 음식 순위</h3>
          <ol>
            <li>피자</li>
            <li>치킨</li>
            <li>햄버거</li>
          </ol>
          <img
            className="img"
            src="http://www.youngmanpizza.co.kr/upload/M_ori/6678d099abe9c.jpg"
            alt="hamburger_image"
          />
        </section>

        <section id="contact" className="section">
          <h2>연락하기</h2>
          <p>이메일: kdso10@skuniv.ac.kr</p>
          <p>전화번호: 010-5393-3821</p>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025. SKU LIKELION. All rights reserved.</p>
      </footer>
    </div>
  );
}
