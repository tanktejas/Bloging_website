import react from "react";
import { data } from "../../apiforAllblog/devapi";

function Tech_blog() {
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
