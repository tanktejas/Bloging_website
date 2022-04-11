import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Tech from "./Technologyblog";
import WebBlog from "./All_blog_render/webblog/webblog";
import "./App.css";
import React from "react";
import Nav from "./nav.js";
import Footer from "./footer.js";
import Spi from "./spinner";
import About from "./aboutus.js";
import Membership from "./membership/membership.js";
import Loginsign from "./loginsignin.js/Login-Signin.js";
import Allblog from "./AllBlogs/allblog.js";
import Home from "./homepageformainwebsite/homepage.js";
import Linka from "./sidebarsticky/stickylink.js";
import Techblog from "./Technologyblog";

//technology blog articles.
import Aiblog from "./All_blog_render/AI/AI";
import Mlblog from "./All_blog_render/machine_learning/machine";
import Androidblog from "./All_blog_render/android_dev/android";
import Cloud from "./All_blog_render/cloud_comp/cloud";
import Cyber from "./All_blog_render/cybersec/cyber";
import Data from "./All_blog_render/data_sci/data";
import Iot from "./All_blog_render/Iot/Iot";

// coding blogs article import.
import Cplus from "./All_CodingBlog_render/c++/c++";
import Java from "./All_CodingBlog_render/Java/java";
import Cp from "./All_CodingBlog_render/Competitive Coding/CP";
import Python from "./All_CodingBlog_render/Python/python";

//facts blogs articles import.
import Iscss from "./All_FactsBlog_render/CSS Support/CSSSupport";
import Surprise from "./All_FactsBlog_render/Surprise_frame/Surprise";
import WillAI from "./All_FactsBlog_render/Will_AI/Will_AI";
import FactsofCC from "./All_FactsBlog_render/Surprise_frame/Surprise";

//open-source blogs articles import.
import How from "./All_OpensourceBlog_render/How_to_do/os";
import Gssoc from "./All_OpensourceBlog_render/GSSOC/gssoc";
import Gsoc from "./All_OpensourceBlog_render/GSOC/gsoc";
import Mozilla from "./All_OpensourceBlog_render/Mozilla/mozilla";

//open-source blogs articles import.
import News1 from "./All_NewsBlog_render/News-1/News1";
import News2 from "./All_NewsBlog_render/News-2/News2";
import News3 from "./All_NewsBlog_render/News-3/News3";
import News4 from "./All_NewsBlog_render/News-4/News4";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Routes> 
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/blogs" element={<Allblog />}></Route>

            {/* routes for technology blogs  */}

            <Route
              exact
              path="/blogs/techblog"
              element={<Techblog data="technology" />}
            ></Route>
            <Route
              exact
              path="/blogs/Techblog/webblog"
              element={<WebBlog />}
            ></Route>
            <Route
              exact
              path="/blogs/Techblog/aiblog"
              element={<Aiblog />}
            ></Route>
            <Route
              exact
              path="/blogs/Techblog/mlblog"
              element={<Mlblog />}
            ></Route>
            <Route
              exact
              path="/blogs/techblog/androidblog"
              element={<Androidblog />}
            ></Route>
            <Route
              exact
              path="/blogs/techblog/cloudblog"
              element={<Cloud />}
            ></Route>
            <Route
              exact
              path="/blogs/techblog/cyberblog"
              element={<Cyber />}
            ></Route>
            <Route
              exact
              path="/blogs/techblog/datablog"
              element={<Data />}
            ></Route>
            <Route
              exact
              path="/blogs/techblog/interblog"
              element={<Iot />}
            ></Route>

            {/* routes for coding blogs  */}

            <Route
              exact
              path="/blogs/codingblogs"
              element={<Techblog data="coding" />}
            ></Route>
            <Route
              exact
              path="/blogs/codingblog/c++"
              element={<Cplus />}
            ></Route>
            <Route
              exact
              path="/blogs/codingblog/python"
              element={<Python />}
            ></Route>
            <Route exact path="/blogs/codingblog/cp" element={<Cp />}></Route>
            <Route
              exact
              path="/blogs/codingblog/java"
              element={<Java />}
            ></Route>

            {/* routes for facts blogs */}

            <Route
              exact
              path="/blogs/factsblog"
              element={<Techblog data="facts" />}
            ></Route>
            <Route
              exact
              path="/blogs/factsblog/CSSSupportsifelse"
              element={<Iscss dataforwhichblog="CSSSupport" />}
            ></Route>
            <Route
              exact
              path="/blogs/factsblog/surpriseframework"
              element={<Surprise dataforwhichblog="Surprise" />}
            ></Route>
            <Route
              exact
              path="/blogs/factsblog/willAIBeatsCP"
              element={<WillAI dataforwhichblog="Will" />}
            ></Route>
            <Route
              exact
              path="/blogs/factsblog/FactsaboutCodechef"
              element={<FactsofCC dataforwhichblog="Facts" />}
            ></Route>

            {/* routes for Open Source blogs */}
            <Route
              exact
              path="/blogs/opensourceblog"
              element={<Techblog data="opensource" />}
            ></Route>
            <Route
              exact
              path="/blogs/opensourceblog/how"
              element={<How dataforwhichblog="how" />}
            ></Route>
            <Route
              exact
              path="/blogs/opensourceblog/gssoc"
              element={<Gssoc dataforwhichblog="gssoc" />}
            ></Route>
            <Route
              exact
              path="/blogs/opensourceblog/gsoc"
              element={<Gsoc dataforwhichblog="gsoc" />}
            ></Route>
            <Route
              exact
              path="/blogs/opensourceblog/mozilla"
              element={<Mozilla dataforwhichblog="mozilla" />}
            ></Route>

            {/* routes for News Blogs blogs */}
            <Route
              exact
              path="/blogs/newsblog"
              element={<Techblog data="news" />}
            ></Route>
            <Route
              exact
              path="/blogs/news/News1"
              element={<News1 dataforwhichblog="news1" />}
            ></Route>
            <Route
              exact
              path="/blogs/news/News2"
              element={<News2 dataforwhichblog="news2" />}
            ></Route>
            <Route
              exact
              path="/blogs/news/News3"
              element={<News3 dataforwhichblog="news3" />}
            ></Route>
            <Route
              exact
              path="/blogs/news/News4"
              element={<News4 dataforwhichblog="news4" />}
            ></Route>

            <Route exact path="/membership" element={<Membership />}></Route>
            <Route exact path="/aboutus" element={<About />}></Route>
            <Route exact path="/login" element={<Loginsign />}></Route>
          </Routes>
        </Router>
        <Linka />
        <Footer />
      </>
    );
  }
}

export default App;
