import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import "../styles/Primarch.css";

const Primarchs = () => {
    let primarchArray = [];
    const [primarchs, setPrimarchs] = useState(primarchArray);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [myPicks, setMyPicks] = useState([]);
    const [puritySeal, setPuritySeal] = useState(false);

    const primarchFactory = (name, legion, sketch) => {
        return { name, legion, sketch }
    };

    function addPrimarchs(){ 
        let name;
        let legion;
        let sketch;
        let primarch;

        for (let i=1; i<=18; i++) {
            if (i==2 || i==9 || i==12 || i==14) {
                switch (i) {
                    case 2:
                        name = "Fulgrim";
                        legion = "Emperor`s Children";
                        break;
                    case 9:
                        name = "Ferrus Manus";
                        legion = "Iron Hands";
                        break;
                    case 12:
                        name = "Mortarion";
                        legion = "Death Guard";
                        break;
                    case 14:
                        name = "Horus Lupercal";
                        legion = "Sons of Horus";
                        break;
                }
                sketch = `./images/Primarch${i}.png`;
                primarch = primarchFactory(name, legion, sketch);
                primarchArray.push(primarch);
            }
        else if(i==13) {
            name = "Magnus the Red";
            legion = "Thousand Sons";
            sketch = `./images/Primarch${i}.jpeg`;
            primarch = primarchFactory(name, legion, sketch);
            primarchArray.push(primarch);

        }
        else {
            switch (i) {
                case 1:
                    name = "Lion El`Jonson";
                    legion = "Dark Angels";
                    break;
                case 3:
                    name = "Perturabo";
                    legion = "Iron Warriors";
                    break;
                case 4:
                    name = "Jaghatai Khan";
                    legion = "White Scars";
                    break;
                case 5:
                    name = "Leman Russ";
                    legion = "Space Wolves";
                    break;
                case 6:
                    name = "Rogal Dorn";
                    legion = "Imperial Fists";
                    break;
                case 7:
                    name = "Konrad Kruze";
                    legion = "Night Lords";
                    break;
                case 8:
                    name = "Sanguinius";
                    legion = "Blood Angels";
                    break;
                case 10:
                    name = "Angron";
                    legion = "World Eaters";
                    break;
                case 11:
                    name = "Roboute Guilliman";
                    legion = "Ultramarines";
                    break;
                case 15:
                    name = "Lorgar";
                    legion = "Word Bearers";
                    break;
                case 16:
                    name = "Vulcan";
                    legion = "Salamanders";
                    break;
                case 17:
                    name = "Corax";
                    legion = "Raven Guard";
                    break;
                case 18:
                    name = "Alpharius Omegon";
                    legion = "Alpha Legion";
                    break;
            }
            sketch = `./images/Primarch${i}.jpg`;
            primarch = primarchFactory(name, legion, sketch);
            primarchArray.push(primarch);
                
        }
        }
    }
    addPrimarchs();


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
            <img className="purity-seal" src="./images/PuritySeal.png" />
        ) : (null)  }
        {primarchs.map( (primarch) => {
            return (
                <div key={uniqid()} className="primarch-card" id={primarch.name} onClick={playGame}>
                <img className="sketch" key={uniqid()} id={primarch.name} src={primarch.sketch} />
                <p key={uniqid()} id={primarch.name} className="name"> {primarch.name} </p>
                <p key={uniqid()} id={primarch.name} className="legion"> {primarch.legion} </p>
            </div> 
            )
        })
        }

        </div>

    );
};

export default Primarchs;