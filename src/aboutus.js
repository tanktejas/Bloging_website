import react from "react";
import Nav from "./homenav";
import CardOfuser from "./cardofinfoofuser.js";
import urloftejas from "./images/a.jpeg";
import urlofjk from "./images/jk.jpg";

import "./aboutus/aboutus.css";
function Aboutus() {
  return (
    <>
      <Nav />
      <div className="aboutmain">
        <h1>About Us</h1>
        <div className="mainforabout">
          <div className="Tejasinfo">
            <CardOfuser
              info={{
                name: "tejas",
                workingarea: "full-stack developer",
                instagram: "https://www.instagram.com/tejas__tank_235/",
                linkedin: "https://www.linkedin.com/in/tejas-tank-122648204/",
                twitter: "https://twitter.com/TejasTa65040578",
                github: "https://github.com/tanktejas",
                pic: `${urloftejas}`,
                skills: [
                  "Html",
                  "Css",
                  "JavaScript",
                  "react",
                  "Data Structure",
                  "Algorithm",
                  "C++",
                  "Node.js",
                ],
                city: "junagadh",
              }}
            />
          </div>
          <div className="Jaydevinfo"> 
            <CardOfuser
              info={{
                name: "Jaydev Kalariya",
                workingarea: "full-stack developer",
                instagram: "https://www.instagram.com/tejas__tank_235/",
                linkedin: "https://www.linkedin.com/in/tejas-tank-122648204/",
                twitter: "https://twitter.com/TejasTa65040578",
                github: "https://github.com/tanktejas",
                pic: `${urlofjk}`,
                skills: [
                  "Html",
                  "Css",
                  "JavaScript",
                  "react",
                  "Data Structure",
                  "Algorithm",
                  "C++",
                  "Node.js",
                ],
                city: "Morbi",
              }}
            />
          </div>
          <div className="website-info">
            <div className="real-info">
              <h1>TECH-BLOG</h1>
              <p>
                Our Website is helpful to those people who are interested to
                know more about technology.
              </p>
              <p>
                We have uploaded and will upload number of tech blog in this
                site. if you're interested in newest technology then read it out
                and give your suggestion in comment section.
              </p>
              <p>
                Make sure give your valuable suggestion to make our site more
                informative.
              </p>
              <p>Github :- url</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
