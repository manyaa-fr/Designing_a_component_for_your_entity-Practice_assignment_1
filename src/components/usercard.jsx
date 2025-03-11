import React from "react";

const Usercard = () => {
    // Static user details
    const profilePhoto = "https://i.pinimg.com/236x/72/82/ed/7282edba1a18a88b1300c5061d4db5f1.jpg";
    const name = "John Doe";
    const email = "johndoe@example.com";
    const phone = "+1 (555) 123-4567";
    const address = "1234 Elm Street, Springfield, USA";
  
    return (
      <div className="user-card" style={styles.card}>
        <img src={profilePhoto} alt="Profile" style={styles.image} />
        <h2 style={styles.name}>{name}</h2>
        <p style={styles.detail}><strong>Email:</strong> {email}</p>
        <p style={styles.detail}><strong>Phone:</strong> {phone}</p>
        <p style={styles.detail}><strong>Address:</strong> {address}</p>
      </div>
    );
  };
  
  const styles = {
    card: {
      border: "1px solid #ddd",
      borderRadius: "12px",
      padding: "20px",
      textAlign: "center",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
      width: "280px",
      backgroundColor: "#f9f9f9",
      transition: "transform 0.3s ease-in-out",
      cursor: "pointer",
    },
    image: {
      borderRadius: "50%",
      width: "120px",
      height: "120px",
      objectFit: "cover",
      marginBottom: "15px",
      border: "3px solid #4A90E2",
    },
    name: {
      fontSize: "1.6rem",
      margin: "12px 0",
      color: "#333",
      fontWeight: "bold",
    },
    detail: {
      fontSize: "1rem",
      margin: "6px 0",
      color: "#555",
    },
  };
  
  export default Usercard;
  