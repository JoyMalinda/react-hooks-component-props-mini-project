import React from "react";
import blogData from "../data/blog";
import Header from "../components/Header";
import About from "../components/About";
import Article from "../components/Article"
import ArticleList from "../components/ArticleList"
import logo from "../assets/logo.svg";

console.log(blogData);

function App() {
  return (
    <div>
    <Header name={blogData.name}/>
    <About about = {blogData.about} image={blogData.image} logo={logo} />
    <ArticleList posts={blogData.posts} id={blogData.id} />
    <Article />
    </div>
  );
}

export default App;