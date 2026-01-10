import React, { useContext, useEffect, useState, useRef } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import ThemeToggle from './ThemeToggle';
import { ThemeContext } from '../context/ThemeContext';
import styled from 'styled-components';

/* =======================
   Styled Components
======================= */

const ThemeToggleWrapper = styled.div`
  margin-left: 15px;
  display: flex;
  align-items: center;

  &:hover {
    transform: rotate(10deg);
  }
`;

const NavbarBrandWrapper = styled.div`
  .brand-text {
    font-weight: 700;
    font-size: 1.5rem;
    color: var(--text-main);
    transition: color 0.3s ease;
  }
`;


const CustomToggle = styled(Navbar.Toggle)`
  border-color: var(--accent);

  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='%23ffffff' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }
`;

const StyledNavLink = styled(Nav.Link)`
  color: var(--text-main) !important;
`;

/* =======================
   Header
======================= */

const Header = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleNavClick = (e) => {
      const href = e.target.getAttribute('href');
      if (!href?.startsWith('#')) return;

      e.preventDefault();
      const target = document.getElementById(href.substring(1));
      if (!target) return;

      const offset = document.querySelector('.navbar')?.offsetHeight || 80;
      window.scrollTo({
        top: target.offsetTop - offset - 10,
        behavior: 'smooth',
      });

      setExpanded(false);
    };

    document.querySelectorAll('.nav-link')
      .forEach(link => link.addEventListener('click', handleNavClick));

    return () => {
      document.querySelectorAll('.nav-link')
        .forEach(link => link.removeEventListener('click', handleNavClick));
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      sticky="top"
      expanded={expanded}
      ref={navbarRef}
    >
      <Container>
        <NavbarBrandWrapper>
          <Navbar.Brand href="#home" className="gradient-text">
            DevOps Portfolio
          </Navbar.Brand>
        </NavbarBrandWrapper>

        <div className="d-flex align-items-center">
          <ThemeToggleWrapper className="d-lg-none me-2">
            <ThemeToggle />
          </ThemeToggleWrapper>

          <CustomToggle onClick={() => setExpanded(!expanded)} />
        </div>

        <Navbar.Collapse>
          <Nav className="ms-auto">
            {[
              'home',
              'about',
              'skills',
              'certifications',
              'projects',
              'resume',
              'contact',
            ].map(section => (
              <StyledNavLink key={section} href={`#${section}`}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </StyledNavLink>
            ))}

            <ThemeToggleWrapper className="d-none d-lg-flex">
              <ThemeToggle />
            </ThemeToggleWrapper>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
