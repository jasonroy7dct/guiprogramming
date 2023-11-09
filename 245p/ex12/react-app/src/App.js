import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header"; 
import Navigation from './components/Navigation';
import TeamInfo from './components/TeamInfo';
import '@fortawesome/fontawesome-free/css/all.css'; 

function App() {
  const teamData = {
    "Boston Celtics": {
      teamInfo:
        "The Boston Celtics (/ˈsɛltɪks/ SEL-tiks) are an American professional basketball team based in Boston, Massachusetts. The Celtics compete in the National Basketball Association (NBA) as a member of the Atlantic Division of the Eastern Conference. Founded in 1946 as one of the league's original eight teams, the Celtics play their home games at TD Garden, which is also the home of the National Hockey League's Boston Bruins. The Celtics are one of the most successful teams in NBA history. The franchise's 17 NBA championships are the joint most of any team, alongside their historical rival Los Angeles Lakers. The Celtics currently hold the record for the most recorded wins of any NBA team.",
    },
    "Los Angeles Lakers": {
      teamInfo:
        "The Los Angeles Lakers are an American professional basketball team based in Los Angeles. The Lakers compete in the National Basketball Association (NBA) as a member of the Pacific Division of the Western Conference. The Lakers play their home games at Crypto.com Arena, an arena shared with the NBA's Los Angeles Clippers, the Los Angeles Sparks of the Women's National Basketball Association, and the Los Angeles Kings of the National Hockey League. The Lakers are the most successful team in the history of the NBA, and have won 17 NBA championships, tied with the Boston Celtics for the most in NBA history.",
    },
    "Los Angeles Clippers": {
      teamInfo:
        "The Los Angeles Clippers are an American professional basketball team based in Los Angeles. The Clippers compete in the National Basketball Association (NBA) as a member of the Pacific Division of the Western Conference. The Clippers play their home games at Crypto.com Arena, which they share with NBA team Los Angeles Lakers, the Los Angeles Sparks of the Women's National Basketball Association (WNBA), and the Los Angeles Kings of the National Hockey League (NHL). The Clippers plan to move into their own arena, the Intuit Dome in nearby Inglewood, by 2024.",
    },
  };

  return (
    <Router>
      <div>
        <Header />
        <section>
          <Navigation />
          <Routes>
            <Route path="/boston" element={<TeamInfo teamName="Boston Celtics" teamInfo={teamData["Boston Celtics"].teamInfo} />} />
            <Route path="/lakers" element={<TeamInfo teamName="Los Angeles Lakers" teamInfo={teamData["Los Angeles Lakers"].teamInfo} />} />
            <Route path="/clippers" element={<TeamInfo teamName="Los Angeles Clippers" teamInfo={teamData["Los Angeles Clippers"].teamInfo} />} />
          </Routes>
        </section>
        <footer>
          <p>Jason Hsieh</p>
          <a href="https://github.com/jasonroy7dct">
            <i className="fab fa-github" style={{ fontSize: "30px" }}></i>
          </a>
          <a href="https://github.com/jasonroy7dct">Jason Hsieh's GitHub</a>
        </footer>
      </div>
    </Router>
  );
}

export default App;
