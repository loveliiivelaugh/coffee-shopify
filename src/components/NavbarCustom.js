import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { useAuth } from "./../util/auth.js";
import { useRouter } from "./../util/router.js";
import { Cart } from "../components/Cart";

function NavbarCustom(props) {
  const auth = useAuth();
  const router = useRouter();

  return (
    <Navbar bg={props.bg} variant={props.variant} expand={props.expand}>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            COFFEE
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="mr-1">
            <LinkContainer to="/">
              <Nav.Link active={false}>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/menu">
              <Nav.Link active={false}>Menu</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/services">
              <Nav.Link active={false}>Services</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/blog">
              <Nav.Link active={false}>Blog</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/about">
              <Nav.Link active={false}>About</Nav.Link>
            </LinkContainer>

            <NavDropdown id="dropdown" title="Shop" alignRight={true}>
              <LinkContainer to="/shop">
                <NavDropdown.Item active={false}>Shop</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to="/cart">
                <NavDropdown.Item active={false}>Cart</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            <LinkContainer to="/contact">
              <Nav.Link active={false}>Contact</Nav.Link>
            </LinkContainer>

            <Button
              variant="link"
              onClick={() => {
                router.push("/cart");
              }}
            >
              <Cart />
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
