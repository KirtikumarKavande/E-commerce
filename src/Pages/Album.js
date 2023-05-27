import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Album = () => {
  const BookTicketOptions = [
    {
      id: 1,
      name: "paytm",
    },
    {
      id: 2,
      name: "Book My Show",
    },
    {
      id: 3,
      name: "Google ticket",
    },
    {
      id: 4,
      name: "phone pay",
    },
  ];

  return (
    <div>
      <Table striped bordered hover variant="primary">
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Name</th>
            <th>Place</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>16JULY</td>
            <td>Otto</td>
            <td>JIGGY LUBE LIVE</td>
            <td>
              <Button>Buy Ticket</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>19JULY</td>
            <td>TORONTO,ON</td>
            <td>T-MOBILE ARENA</td>
            <td>
              <Button>Buy Ticket</Button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>21JULY</td>
            <td>PHOENIX, AZ</td>
            <td>JIGGY LUBE LIVE</td>
            <td>
              <Button>Buy Ticket</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>19JULY</td>
            <td>PHOENIX, AZ</td>
            <td>BUDWEISER STAGE</td>
            <td>
              <Button>Buy Ticket</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>23JULY</td>
            <td>TORONTO,ON</td>
            <td>T-MOBILE ARENA</td>
            <td>
              <Button>Buy Ticket</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>25JULY</td>
            <td>TORONTO,ON</td>
            <td>JIGGY LUBE LIVE</td>
            <td>
              <Button>Buy Ticket</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>27JULY</td>
            <td>CONCORD, CA</td>
            <td>T-MOBILE ARENA</td>
            <td>
              <Button>Buy Ticket</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>28JULY</td>
            <td>PHOENIX, AZ</td>
            <td>BUDWEISER STAGE</td>
            <td>
              <Button>Buy Ticket</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>29JULY</td>
            <td>TORONTO,ON</td>
            <td>JIGGY LUBE LIVE</td>
            <td>
              <Button>Buy Ticket</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>30JULY</td>
            <td>PHOENIX, AZ</td>
            <td>T-MOBILE ARENA</td>
            <td>
              <Button>Buy Ticket</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>31JULY</td>
            <td>TORONTO,ON</td>
            <td>JIGGY LUBE LIVE</td>
            <td>
              <Button>Buy Ticket</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>1aUG</td>
            <td>PHOENIX, AZ</td>
            <td>BUDWEISER STAGE</td>
            <td>
              <Button>Buy Ticket</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>3AUG</td>
            <td>PHOENIX, AZ</td>
            <td>T-MOBILE ARENA</td>
            <td>
              <Button>Buy Ticket</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>5AUG</td>
            <td>TORONTO,ON</td>
            <td>JIGGY LUBE LIVE</td>
            <td>
              <Button>Buy Ticket</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>13AUG</td>
            <td>TORONTO,ON</td>
            <td>BUDWEISER STAGE</td>
            <td>
              <Button>Buy Ticket</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>15AUG</td>
            <td>CONCORD, CA</td>
            <td>T-MOBILE ARENA</td>
            <td>
              <Button>Buy Ticket</Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <Card>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>You can Book Ticket from ...</Card.Title>
          <Card.Text>
            {BookTicketOptions.map((item) => {
              return <Link to={`${item.name}`} style={{marginRight:'2rem'}}>{item.name}</Link>;
            })}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Album;
