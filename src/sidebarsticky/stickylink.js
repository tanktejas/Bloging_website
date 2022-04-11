import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WebIcon from "@material-ui/icons/Web";

function Link() {
  return (
    <>
      <div className="icons">
        <a href="https://www.instagram.com/tejas__tank_235/"> 
          <InstagramIcon />
        </a>
        <a href="https://www.facebook.com/tejas.tank.94064">
          <FacebookIcon />
        </a>
        <a href="https://twitter.com/TejasTa65040578">
          <TwitterIcon />
        </a>
        <a href="https://www.linkedin.com/in/tejas-tank-122648204/">
          <LinkedInIcon />
        </a>
        <a href="https://tejas-codevese.herokuapp.com/">
          <WebIcon />
        </a>
      </div>
    </>
  );
}
export default Link;
