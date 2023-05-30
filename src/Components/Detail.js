import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import { useLocation } from "react-router-dom";
import "./Detail.css";

function Detail() {
  const location = useLocation();
  const { pokemon } = location.state;

  return (
    <Container className="d-flex justify-content-center align-items-center h-100">
      <main>
        <Card
          className="pokemon-card"
          style={{ width: "auto",
          borderRadius: "30px",
          backgroundColor: "transparent",
          border: "1px solid #000",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
          textAlign: "center" }}
        >
          <Card.Img
            variant="top"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            alt="pokemon"
            style={{ objectFit: "cover", height: "300px" }}
          />
          <Card.Body>
            <Card.Title>{pokemon.name}</Card.Title>
            <div className="stats">
              <div className="row">
                <div className="col">
                  <h6>HP</h6>
                  <p>{pokemon.stats[0].base_stat}</p>
                </div>
                <div className="col">
                  <h6>Attack</h6>
                  <p>{pokemon.stats[1].base_stat}</p>
                </div>
                <div className="col">
                  <h6>Defense</h6>
                  <p>{pokemon.stats[2].base_stat}</p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h6>Special Attack</h6>
                  <p>{pokemon.stats[3].base_stat}</p>
                </div>
                <div className="col">
                  <h6>Special Defense</h6>
                  <p>{pokemon.stats[4].base_stat}</p>
                </div>
                <div className="col">
                  <h6>Speed</h6>
                  <p>{pokemon.stats[5].base_stat}</p>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </main>
    </Container>
  );
}

export default Detail;
