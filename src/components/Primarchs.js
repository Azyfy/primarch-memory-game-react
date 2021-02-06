import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import "../styles/Primarch.css";

const Primarchs = () => {
    let primarchArray = [];
    const [primarchs, setPrimarchs] = useState(primarchArray);

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
                        legion = "III";
                        break;
                    case 9:
                        name = "Ferrus Manus";
                        legion = "X";
                        break;
                    case 12:
                        name = "Mortarion";
                        legion = "XIV";
                        break;
                    case 14:
                        name = "Horus Lupercal";
                        legion = "XVI";
                        break;
                }
                sketch = `./images/Primarch${i}.png`;
                primarch = primarchFactory(name, legion, sketch);
                primarchArray.push(primarch);
            }
        else if(i==13) {
            name = "Magnus the Red";
            legion = "XV";
            sketch = `./images/Primarch${i}.jpeg`;
            primarch = primarchFactory(name, legion, sketch);
            primarchArray.push(primarch);

        }
        else {
            switch (i) {
                case 1:
                    name = "Lion El`Jonson";
                    legion = "I";
                    break;
                case 3:
                    name = "Perturabo";
                    legion = "IV";
                    break;
                case 4:
                    name = "Jaghatai Khan";
                    legion = "V";
                    break;
                case 5:
                    name = "Leman Russ";
                    legion = "VI";
                    break;
                case 6:
                    name = "Rogal Dorn";
                    legion = "VII";
                    break;
                case 7:
                    name = "Konrad Kruze";
                    legion = "VIII";
                    break;
                case 8:
                    name = "Sanguinius";
                    legion = "IX";
                    break;
                case 10:
                    name = "Angron";
                    legion = "XII";
                    break;
                case 11:
                    name = "Roboute Guilliman";
                    legion = "XIII";
                    break;
                case 15:
                    name = "Lorgar";
                    legion = "XVII";
                    break;
                case 16:
                    name = "Vulcan";
                    legion = "XVIII";
                    break;
                case 17:
                    name = "Corax";
                    legion = "XIX";
                    break;
                case 18:
                    name = "Alpharius Omegon";
                    legion = "XX";
                    break;
            }
            sketch = `./images/Primarch${i}.jpg`;
            primarch = primarchFactory(name, legion, sketch);
            primarchArray.push(primarch);
                
        }
        }
    }
    addPrimarchs();

    return (
        <div className="primarch-card">
        {console.log("render")}
        {console.log(primarchs)}
        {primarchs.map( (primarch) => {
            return (
                <div key={uniqid()} className="primarch-card">
                <img className="sketch" key={uniqid()} src={primarch.sketch} />
                <p key={uniqid()} className="name"> {primarch.name} </p>
                <p key={uniqid()} className="legion"> {primarch.legion} </p>
            </div> 
            )
        })
        }

        </div>

    );
};

export default Primarchs;