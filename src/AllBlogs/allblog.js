import React from "react";
import Nav from "../nav.js";
import url from "../images/a.jpeg";
import Blogtitle from "./blogtitle.js";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WebIcon from "@material-ui/icons/Web";
import "./allblog.css";
function Allblog() { 
  return (
    <>
      <Nav />

      <div className="allblogs">
        <Blogtitle 
          blgname="1)  Technology Blogs"
          t1="It Covers Newest Tech. like Web dev, ML, AI etc.. Read this and explore more. Here You will find some technology related blogs. Read Blog and stay knowledgeble."
          author="Tejas Tank"
          linkforref="https://en.wikipedia.org/wiki/Blog"
          path="/blogs/techblog"
          contref="Know More"
          classn="blogimg webtech"
          onestbutname="Technology"
        />  
        <Blogtitle
          blgname="2)  Coding Blogs"
          t1="It Covers Newest Tech. like Web dev, ML, AI etc.. Read this and explore more. Here You will find some technology related blogs. Read Blog and stay knowledgeble. "
          author="jaydev kalariya"
          linkforref="https://en.wikipedia.org/wiki/Blog"
          path="/blogs/codingblogs"
          contref="Know More"
          classn="blogimg webtech"
          onestbutname="Coding"
        /> 
        <Blogtitle
          blgname="3)  Facts Blogs"
          t1="It Covers Newest Tech. like Web dev, ML, AI etc.. Read this and explore more. Here You will find some technology related blogs. Read Blog and stay knowledgeble. "
          author="Tejas Tank"
          linkforref="https://en.wikipedia.org/wiki/Blog"
          path="/blogs/factsblog"
          contref="Know More"
          classn="blogimg webtech"
          onestbutname="Tech_facts"
        />
        <Blogtitle
          blgname="4)  Open-Source Blogs"
          t1="It Covers Newest Tech. like Web dev, ML, AI etc.. Read this and explore more. Here You will find some technology related blogs. Read Blog and stay knowledgeble. "
          author="Tejas Tank"
          linkforref="https://en.wikipedia.org/wiki/Blog"
          path="/blogs/opensourceblog"
          contref="Know More"
          classn="blogimg webtech"
          onestbutname="OpenSource"
        />
        <Blogtitle
          blgname="5)  News Blogs"
          t1="It Covers Newest Tech. like Web dev, ML, AI etc.. Read this and explore more. Here You will find some technology related blogs. Read Blog and stay knowledgeble. "
          author="Tejas Tank"
          linkforref="https://en.wikipedia.org/wiki/Blog"
          path="/blogs/newsblog"
          contref="Know More"
          classn="blogimg webtech"
          onestbutname="News"
        />
      </div>
    </>
  );
}

export default Allblog;
