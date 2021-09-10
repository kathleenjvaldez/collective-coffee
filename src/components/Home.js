import React from "react";
import styled from "styled-components";
import Image from "../images/CoffeeHomePage4.jpeg";

const HomePage = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 815px;
  z-index: -1;

  .box {
    position: relative;
    color: white;
    display: inline-block;

    background-color: rgba(117 113 113 / 70%);
    left: 100px;
    top: 350px;
  }

  h1,
  p {
    padding: 20px;
    font-weight: 400;
  }

  hr {
    border-bottom: 2px solid gray;
    width: 50%;
    margin-left: 20px;
  }
`;

function Home() {
  return (
    <HomePage
      className="homepage"
      style={{
        backgroundImage: "url(" + Image + ")",
        backgroundSize: "cover",
      }}
    >
      <div className="box">
        <h1>Coffee delivered straight to your door</h1>
        <hr></hr>
        <p>Shipping or same day delivery available</p>
      </div>
    </HomePage>
  );
}

export default Home;