import React, { useState, useEffect } from "react";

const Primarchs = () => {
    const [sketch, setSketch] = useState("./images/Primarch1.jpg")



    return (
        <div>
        <h1> Primarchs </h1>
        <img src={sketch} />
        </div>
    );
};

export default Primarchs;