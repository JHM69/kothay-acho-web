/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import {
  Button,
  Col,
  Collapse,
  Form,
  Input,
  Label,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
var k;
export default class AppNavbar extends Component {
  constructor(props) {
    super(props);
    k = props.k;
    console.log(props)
    this.state = { isOpen: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <Navbar className="color-nav" expand="md">
        <NavbarBrand tag={Link} to="/">
          <img src="../logo.svg" height="40" width="40" /> <b>Kothay Acho? </b>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Form>
                <Row className="row-cols-lg-auto g-3 align-items-center">
                  <Col>
                    <Label className="visually-hidden" for="s_key">
                      Share Key
                    </Label>
                    <Input
                      id="s_key"
                      defaultValue={k}
                      name="key"
                      placeholder="1234"
                      type="number"
                    />
                  </Col>
                
                  <Col>
                    <Button>Find</Button>
                  </Col>
                </Row>
              </Form>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
