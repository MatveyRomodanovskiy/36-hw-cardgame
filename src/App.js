import React from "react";
import './App.css';
import Start from "./components/Start";
import Game from "./components/Game";
import Result from "./components/Result";
import {useState} from "react";
import {result, start, game } from "./utils/constants";

function App() {
  const [page, setPage] = useState(start);
  const [name, setName] = useState("YOU")
  const [score, setScore] = useState({compScore: 0, playerScore: 0, gameScore: '0:0'})
  const changeName = name =>{
      name = name.trim();
      if(name){
          setName(name);
      }
  }

  switch (page){
     case game:
          return <Game changePage={setPage} changeName={changeName} name={name} score={score} changeScore={setScore}/>
      case result:
          return <Result changePage={setPage} score={score} changeScore={setScore}/>
      default:
          return <Start changePage={setPage} changeName={changeName}/>
  }
}

export default App;
