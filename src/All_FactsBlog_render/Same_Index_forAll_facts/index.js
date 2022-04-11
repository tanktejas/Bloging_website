import react from "react";
import { useState } from "react";
import { IsCSS } from "../../apiforAllblog/Facts_blog";
import { Surprise } from "../../apiforAllblog/Facts_blog";
import { WillAI } from "../../apiforAllblog/Facts_blog";
import { Facts } from "../../apiforAllblog/Facts_blog";

function Tech_blog(props) {
  var data = [];
  if (props.dataforwhichblog === "CSSSupport") {
    data = IsCSS;
  } else if (props.dataforwhichblog == "Surprise") {
    data = Surprise;
  } else if (props.dataforwhichblog == "Will") {
    data = WillAI;
  } else if (props.dataforwhichblog == "Facts") {
    data = Facts;
  }
  console.log(props.dataforwhichblog);
  return (
    <>
      {data.map((item) => {
        return (
          <>
            <div className="bloghead">
              <div className="innerdivforrattng">
                <div>
                  <h2>{item.title}</h2>
                  <span>{item.date}</span>
                </div>
                <div>
                  <div className="iconforrat"></div>
                </div>
              </div>
              <hr />
              <div className="contentoftech">
                <p>Hello Fam!</p>
                <p>{item.p1}</p>
                <p>{item.p2}</p>
                <p>{item.p3}</p>
                <ul>
                  <li>{item.p4}</li>
                  <li>{item.p5}</li>
                  <li>{item.p6}</li>
                </ul>
                <p>{item.p7}</p>
                <p>{item.p8}</p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Tech_blog;
