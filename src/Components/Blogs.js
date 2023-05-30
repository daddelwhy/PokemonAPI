import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Blogs.css";

function Blogs() {
  const [pokemon, setPokemon] = useState({});
  const [name, setName] = useState("ditto");

  useEffect(() => {
    const fetchPokemon = () => {
      const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setPokemon(data);
        });
    };
    fetchPokemon();
  }, [name]);

  return (
    <>
      <Container>
        <main>
          <Card
            style={{
              width: "30rem",
              borderRadius: "30px",
              backgroundColor: "transparent",
              border: "1px solid #000",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
              textAlign: "center"
            }}
          >
            <Card.Img
              variant="top"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
              style={{ objectFit: "cover", height: "auto" }}
            />
            <Card.Body>
              <Card.Title>{pokemon.name}</Card.Title>

              <form>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="Pokémon...."
                />
                <Link to={`/blog/${pokemon.id}`} state={{ pokemon }}>
                  <Button variant="secondary" size="sm" style={{ marginLeft: "3px",marginBottom:"6px" }}>
                    info
                  </Button>
                </Link>
              </form>
            </Card.Body>
          </Card>
        </main>
      </Container>
    </>
  );
}

export default Blogs;
