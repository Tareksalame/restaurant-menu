import React from "react";
import "../App.css";
import Header from "../Components/Header/Header";
import Slider from "../Components/Slider/Slider";
import Menu from "../Components/Menu/Menu";
import Modal from "../Components/Modal/Modal";

export default function HomePage() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Menu />
      <Modal />
    </div>
  );
}
