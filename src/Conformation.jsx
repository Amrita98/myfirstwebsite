import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Conformation = () => {
  const { name } = useParams();

  return (
    <div className="body">
      <h1>
        Thank You <span className="name">{name}</span>
      </h1>
      <Link to="/">
        <Button size="lg" variant="secondary">
          Home
        </Button>
      </Link>
    </div>
  );
};

export default Conformation;
