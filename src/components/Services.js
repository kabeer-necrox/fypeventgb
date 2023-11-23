import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Services() {
  return (
    <>
      <div className="mainourServices">
        <h2 className="servicesheading">Services</h2>
        <p className="whatwedo">what we do</p>
        <br />
        <br />
        <div className="myAllCards">
          <div>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <img
                style={{ width: "250px" }}
                src="https://thumbs.dreamstime.com/b/little-girl-celebrate-happy-birthday-party-rose-outdoor-decor-beautiful-garden-40026117.jpg?w=768"
              />

              <Card.Title>Wishing You a Fantastic Birthday</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            {/* <ListGroup className="list-group-flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup> */}
           
          </Card>
          </div>
          <div>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <img
                style={{ width: "250px",height:'200px' }}
                src="https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D"
              />

              <Card.Title>Photographic Wonders</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            {/* <ListGroup className="list-group-flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup> */}
           
          </Card>
          </div>
          <div>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <img
                style={{ width: "250px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_gwhDsqbQp2RXxS7UAUGbShts4Yu3yFqC037ApzkCLA&s"
              />

              <Card.Title>Celebrating Love and Commitment</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            {/* <ListGroup className="list-group-flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup> */}
            
          </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
