import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center">
      <Container>
        <p>Made with <i style={{color: 'red'}} className="fas fa-heart" /> by Ryan H.</p>
        <p className="m-0">&copy; {new Date().getFullYear()}</p>
      </Container>
    </footer>
  );
};

export default Footer;
