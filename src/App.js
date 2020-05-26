import React from 'react';
import './App.css';
import Header from "./components/header/header.component";
import NewPostButton from "./components/NewPostButton/NewPostButton.component";
import FollowButton from "./components/FollowButton/FollowButton.component";

function App() {
  return (
    <div className="App">
    <Header/>
    <NewPostButton/>
    <FollowButton/>
    </div>
  );
}

export default App;
