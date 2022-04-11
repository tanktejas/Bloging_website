import react from "react";
import "../../blog.css";
import Nav from "../../nav";
import Item from "../../item.js";
import Addcomment from "../../commrntadd.js";
import Spinnner from "../../spinner.js";
import Joinform from "../../joinform.js";
import TechBlogdata from "../same_for_all_os/index";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

class Blog extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      data: [{}],
      dataforwhichblog: props.dataforwhichblog,
    };
  }

  componentDidMount() {
    setInterval(() => {
      fetch("https://bloggingwebsite1.herokuapp.com/datastore", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(async (data) => {
          return await data.json();
        })
        .then((res) => {
          this.setState({
            flag: true,
            data: res,
          });
        });
    }, 1000);
  }

  render() {
    const { data, flag } = this.state;
    if (!flag) {
      return (
        <>
          <Spinnner />
        </>
      );
    }
    return (
      <>
        <Nav />
        <div className="blm">
          <TechBlogdata dataforwhichblog={this.state.dataforwhichblog} />
          <Joinform />
        </div>
        {/* //for comments */}
        <div className="commentshead">
          <h1 className="headcomment">Comments</h1>
          {this.state.data.map((ele) => {
            return (
              <Item
                name={ele.name}
                comment={ele.comment}
                ratting={ele.ratting}
              />
            );
          })}
          <Addcomment />
        </div>
      </>
    );
  }
}

export default Blog;
