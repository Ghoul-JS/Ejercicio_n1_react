import React from "react";
import "./styles.css";
import Profile from "./Profile";
import Interests from "./Interests";
import Learn from "./Learn";
import Expectations from "./Expectations";
import Empty from "./Empty";

export default function App() {
  return (
    <div className="App">
      <Profile />
      <Interests />
      <Learn />
      <Expectations />
      <Empty />
    </div>
  );
}
