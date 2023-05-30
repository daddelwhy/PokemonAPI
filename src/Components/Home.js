import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Home.css";
import Container from "react-bootstrap/esm/Container";
import { LoremIpsum } from "react-lorem-ipsum";

function Home() {
  return (
    <>
      <section>
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1613771404721-1f92d799e49f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80://plus.unsplash.com/premium_photo-1664804190504-805fb3666dce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
              alt="First slide"
            />
            <Carousel.Caption>
              <h2>POPOKEMON</h2>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.mos.cms.futurecdn.net/DVg3vj34mtKrKQhpy6z4H-1200-80.png"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h2>POPOKEMON</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      <section className="price">
        <Container>
          <div className="box">
            <h1>NOW YOU CAN BUY</h1>
            <LoremIpsum p={1} />
          </div>
          <div className="cardkuy">
            <div className="card1">
              <div class="card text-center shadow">
                <div class="card-header">
                  <h3>Free</h3>
                  <h5>£0!</h5>
                </div>

                <div class="card-body">
                  <h5 class="card-title">For individuals</h5>
                  <p class="card-text">Great for personal projects</p>
                </div>

                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Feature 1</li>
                  <li class="list-group-item">Feature 2</li>
                  <li class="list-group-item">Feature 3</li>
                </ul>
              </div>
            </div>
            <div className="card2">
              <div class="card text-center shadow border-success">
                <div class="card-header text-white bg-success">
                  <h3>Standard</h3>
                  <h5>£20</h5>
                </div>

                <div class="card-body">
                  <h5 class="card-title">For small teams</h5>
                  <p class="card-text">Great for teams of 2 - 10</p>
                </div>

                <ul class="list-group list-group-flush">
                  <li class="list-group-item border-success">
                    All free features
                  </li>
                  <li class="list-group-item border-success">Feature 4</li>
                  <li class="list-group-item border-success">Feature 5</li>
                </ul>
              </div>
            </div>
            <div className="card3">
              <div class="card text-center shadow">
                <div class="card-header">
                  <h3>Premium</h3>
                  <h5>£30</h5>
                </div>

                <div class="card-body">
                  <h5 class="card-title">For larger teams</h5>
                  <p class="card-text">Great for teams of 11 or more</p>
                </div>

                <ul class="list-group list-group-flush">
                  <li class="list-group-item">All standard features</li>
                  <li class="list-group-item">Feature 6</li>
                  <li class="list-group-item">Feature 7</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Home;
