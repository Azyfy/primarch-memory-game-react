import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import "../styles/Primarch.css";
import primarchArray from "./primarch";

const Primarchs = () => {
    const [primarchs, setPrimarchs] = useState(primarchArray);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [myPicks, setMyPicks] = useState([]);
    const [puritySeal, setPuritySeal] = useState(false);

    function playGame(e) {
        let name = e.target.id;
        let gameOver = false;
     
        myPicks.map( primarch => {
            if(primarch == name) {
                gameOver = true;
                alert("To admit defeat \n is to blaspheme against the Emperor.")
                if(highScore < score) {setHighScore(score)}
                setScore(0);
                setMyPicks([]);
                return;
            }
        }) 


        if(gameOver) { return }
        setMyPicks(myPicks.concat(name));
        setScore( score + 1 );

        shuffle();
    }

    function shuffle() {
        let cards = primarchs.slice();
        for (let i=cards.length-1; i>0; i--) {
            let j=Math.floor(Math.random() * (i+1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        setPrimarchs(cards);
    }

    useEffect(() => {
        if (score == 18 ) {

            setHighScore(score);
            setScore(0);
            setMyPicks([]);
            setPuritySeal(true);

            alert("The Emperor protects.")

        }
    }, [score] );

    return (
        <div className="primarch-container">
			<p className="score-board"> <span>Score</span> {score}   &emsp;   <span>Highscore</span> {highScore} </p>

			{(puritySeal)? (
				<img id="purity-seal" className="purity-seal" src="./images/PuritySeal.png" />
			) : (null)  }
			{primarchs.map( (primarch) => {
				return (
					<div key={uniqid()} className="primarch-card" id={primarch.name} onClick={playGame}>
						<img className="sketch" id={primarch.name} src={primarch.sketch} />
						<p id={primarch.name} className="name"> {primarch.name} </p>
						<p id={primarch.name} className="legion"> {primarch.legion} </p>
					</div> 
				)
			})
			}
        </div>
    );
};

export default Primarchs;