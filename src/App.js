import React from 'react';
import './App.css';
import Header from "./components/header/header.component";
import NewPostButton from "./components/NewPostButton/NewPostButton.component";
import FollowButton from "./components/FollowButton/FollowButton.component";
import Spinner from "./components/Spinner/Spinner.component";
import CommentBox from "./components/CommentBox/CommentBox.component";

function App() {
  return (
    <div className="App">
    <Header/>
    <NewPostButton/>
    <FollowButton/>
    <Spinner/>
    <CommentBox/>
    </div>
  );
}

export default App;
