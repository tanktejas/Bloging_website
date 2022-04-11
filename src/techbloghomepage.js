import React from "react";
import apifortechblog from "./techblogapi.js";
import apiforcoding from "./Api_for_Allcard_home/coding.js";
import apiforfacts from "./Api_for_Allcard_home/facts_blog";
import apiforos from "./Api_for_Allcard_home/opensou.js";
import apifornews from "./Api_for_Allcard_home/news";

import url from "./techb1.jpg";
import { Link } from "react-router-dom";
import link from "./carddesign.css";
//for card
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useState } from "react";
import Alert from "@material-ui/lab/Alert";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
// import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import "./prompt.css";

function Data(props) {
  var data;
  if (props.data == "technology") {
    data = apifortechblog;
  } else if (props.data == "coding") {
    data = apiforcoding;
  } else if (props.data == "facts") {
    data = apiforfacts;
  } else if (props.data == "opensource") {
    data = apiforos;
  } else if (props.data == "news") {
    data = apifornews;
  }
  const [isbemember, setisbe] = useState(false);
  const [show, setshow] = useState(false);
  const [forprimiumuseremail, setpremium] = useState("");

  function fun() {
    setshow(false);
  }
  function change(e) {
    setpremium(e.target.value);
  }

  return (
    <>
      {data.map((item) => {
        return (
          <>
            <div className="card">
              <Card className="cardinner">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="220"
                    image={url}
                    alt="web technology"
                  />
                  <CardContent>
                    <p>&#x1F31F; {item.title}</p>

                    <Typography variant="body2" color="text.secondary">
                      {item.Summary}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <div className="actionofcard">
                  {(!item.isprimium || isbemember) && (
                    <Link to={item.path}>
                      <button>Read Blog</button>
                    </Link>
                  )}
                  {item.isprimium && !isbemember && (
                    <>
                      <button
                        onClick={() => {
                          setshow(true);
                        }}
                      >
                        Premium blog
                      </button>
                      <div className="app">
                        {show ? (
                          <Popup
                            text="Close Me"
                            closePopup={fun}
                            forprimiumuseremail={forprimiumuseremail}
                            change={change}
                            setisbe={setisbe}
                          />
                        ) : null}
                      </div>
                    </>
                  )}
                  <button>Share</button>
                </div>
              </Card>
            </div>
          </>
        );
      })}
    </>
  );
}

class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <h2>Enter Email of membership</h2>
          <input
            placeholder="Enter Email"
            className="inputforprimium"
            value={this.props.forprimiumuseremail}
            onChange={this.props.change}
          ></input>
          <button
            onClick={() => {
              this.props.closePopup();
            }}
          >
            close me
          </button>
          <button
            onClick={() => {
              fetch("https://bloggingwebsite1.herokuapp.com/getmemberemail", {
                method: "POST",
                body: JSON.stringify({ email: this.props.forprimiumuseremail }),
                headers: {
                  "Content-Type": "application/json",
                },
              })
                .then((data) => {
                  return data.json();
                })
                .then((data) => {
                  if (data.find) {
                    this.props.setisbe(true);
                  } else {
                    this.props.setisbe(false);
                    alert("Email dosent exist in membership record !!");
                  }
                });
            }}
          >
            Submit Mail
          </button>
        </div>
      </div>
    );
  }
}

export default Data;
