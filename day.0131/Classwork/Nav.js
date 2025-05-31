import React from "react";

const Nav = () => {
  return (
    <nav style={styles.nav}>
      <a href="#home">Home</a>
      <a href="#about">About Us</a>
      <a href="#team">Team</a>
      <a href="#pricing">Pricing</a>
      <a href="#contact">Contact Us</a>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#f0f0f0",
    position: "sticky",
    top: 0,
    zIndex: 1000
  }
};

export default Nav;