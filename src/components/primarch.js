const primarchArray = [];

const primarchFactory = (name, legion, sketch) => {
    return { name, legion, sketch }
};

function addPrimarchs(){
    let name;
    let legion;
    let sketch;
    let primarch;
    // the i indicates the legion number, and since the 2nd and 11th are unknown they are empty
    for (let i=1; i<=20; i++) {
            switch (i) {
                case 1:
                    name = "Lion El`Jonson";
                    legion = "Dark Angels";
                    break;
                case 2:
                    continue;
                case 3:
                    name = "Fulgrim";
                    legion = "Emperor`s Children";
                    break;
                case 4:
                    name = "Perturabo";
                    legion = "Iron Warriors";
                    break;
                case 5:
                    name = "Jaghatai Khan";
                    legion = "White Scars";
                    break;
                case 6:
                    name = "Leman Russ";
                    legion = "Space Wolves";
                    break;
                case 7:
                    name = "Rogal Dorn";
                    legion = "Imperial Fists";
                    break;
                case 8:
                    name = "Konrad Kruze";
                    legion = "Night Lords";
                    break;
                case 9:
                    name = "Sanguinius";
                    legion = "Blood Angels";
                    break;
                case 10:
                    name = "Ferrus Manus";
                    legion = "Iron Hands";
                    break;
                case 11:
                    continue;
                case 12:
                    name = "Angron";
                    legion = "World Eaters";
                    break;
                case 13:
                    name = "Roboute Guilliman";
                    legion = "Ultramarines";
                    break;
                case 14:
                    name = "Mortarion";
                    legion = "Death Guard";
                    break;
                case 15:
                    name = "Magnus the Red";
                    legion = "Thousand Son";
                    break;
                case 16:
                    name = "Horus Lupercal";
                    legion = "Sons of Horus";
                    break;
                case 17:
                    name = "Lorgar";
                    legion = "Word Bearers";
                    break;
                case 18:
                    name = "Vulcan";
                    legion = "Salamanders";
                    break;
                case 19:
                    name = "Corax";
                    legion = "Raven Guard";
                    break;
                case 20:
                    name = "Alpharius Omegon";
                    legion = "Alpha Legion";
                    break;
            }
            if (i===3 || i===10 || i===14 || i===16) {
                sketch = `./images/Primarch${i}.png`;
            }
            else if (i===15) {
                sketch = `./images/Primarch${i}.jpeg`;
            }
            else {
                sketch = `./images/Primarch${i}.jpg`;
            }
            primarch = primarchFactory(name, legion, sketch);
            primarchArray.push(primarch);
        
        }
}
addPrimarchs();

export default primarchArray