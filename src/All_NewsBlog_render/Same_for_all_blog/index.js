import react from "react";
import { useState } from "react";
import { News1 } from "../../apiforAllblog/News";
import { News2 } from "../../apiforAllblog/News";
import { News3 } from "../../apiforAllblog/News";
import { News4 } from "../../apiforAllblog/News";

function Tech_blog(props) {
  var data = [];
  if (props.dataforwhichblog == "news1") {
    data = News1; 
  } else if (props.dataforwhichblog == "news2") {
    data = News2;
  } else if (props.dataforwhichblog == "news3") {
    data = News3;
  } else if (props.dataforwhichblog == "news4") {
    data = News4;
  }
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
