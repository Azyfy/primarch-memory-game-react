import React, { useState, useEffect } from "react";

const Primarchs = () => {
    let primarchArray = [];
    const [primarchs, setPrimarchs] = useState(primarchArray);

    const primarchFactory = (name, legion, sketch, i) => {
        let key = i;
        return { name, legion, sketch, key }
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
                primarch = primarchFactory(name, legion, sketch, i);
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
                case 13:
                    name = "Magnus the Red";
                    legion = "XV";
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
            primarch = primarchFactory(name, legion, sketch, i);
            primarchArray.push(primarch);
                
        }
        }
    }
    addPrimarchs();

    return (
        <div>
        <h1> Primarchs </h1>
        {console.log("render")}
        {console.log(primarchs)}

        {primarchs.map( (primarch) => {

            return <img key={primarch.key} src={primarch.sketch} />;
        })

}

        </div>

    );
};

export default Primarchs;