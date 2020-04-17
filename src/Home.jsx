import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <div className="body">
      <h1 className="home__h1">Welcome To Our Website</h1>
      <Link to="form">
        <Button variant="secondary">Proceed</Button>
      </Link>
    </div>
  );
};

export default Home;
