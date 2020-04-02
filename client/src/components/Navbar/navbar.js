import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../Navbar/navbar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const NavbarPage = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
          <Navbar scrolling dark expand="md" fixed='top'>
            <NavbarBrand className="brand" href="/">FRC</NavbarBrand>

            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>

                  <NavItem>
                    <NavLink tag={Link} to="/admin" className="text-info">Admin</NavLink>
                  </NavItem>

                
              </Nav>
              <NavbarText />
            </Collapse>
          </Navbar>
    

    </div>
  );
}
export default NavbarPage;
