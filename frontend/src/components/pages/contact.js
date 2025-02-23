import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MapIcon from '@mui/icons-material/Map';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "32px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    marginTop: "20px",
  },
  title: {
    fontWeight: "600",
    color: "#333",
    marginBottom: "16px",
  },
  contactInfo: {
    color: "#555",
    marginBottom: "24px",
  },
  email: {
    cursor: "pointer",
    color: "#3f51b5",
    textDecoration: "underline",
    fontWeight: "bold",
    marginTop: "8px",
  },
  button: {
    marginTop: "16px",
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: "16px",
    marginBottom: "16px",
  },
  buttonHover: {
    "&:hover": {
      backgroundColor: "#3f51b5",
      color: "#fff",
    },
  },
  whatsappButton: {
    backgroundColor: '#25D366',
    color: '#fff',
    border: '2px solid #25D366',
    '&:hover': {
      backgroundColor: '#25D366', // Keeps the same green on hover
      borderColor: '#25D366',
    },
    '&:focus': {
      outline: '2px solid #075E54',
    },
  },
}));

function Contact() {
  const classes = useStyles();
  const phoneNumber = "+9779851168145"; // Nepal phone number
  const email = "kathmanduyoga108@gmail.com"; // Email

  const openMap = () => {
    window.open("https://maps.app.goo.gl/eTNFqxGANcJnYVP5A", "_blank");
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/9779851168145", "_blank"); // Nepal country code +977
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        alert("Email copied to clipboard!");
      })
      .catch((err) => {
        console.error("Error copying text: ", err);
      });
  };

  // Implement form validation logic
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  return (
    <Container maxWidth="md" className={classes.container}>
      <Typography variant="h3" className={classes.title} align="center"><b><u>
        Contact Us</u></b>
      </Typography>
      <Typography variant="body1" className={classes.contactInfo} align="center">
        <p>Dhobighat near Dhungedhara, Lalitpur, Nepal.</p>
        <p>+977-98511-68145, +977-98030-28296</p>
        <p 
          className={classes.email} 
          onClick={copyEmailToClipboard}
        >
          {email}
        </p>
      </Typography>
      
      <div className={classes.buttonRow}>
        <Button
          variant="contained"
          className={`${classes.button} ${classes.whatsappButton}`}
          onClick={openWhatsApp}
          startIcon={<WhatsAppIcon />}
        >
          WhatsApp
        </Button>

        <Button
          variant="contained"
          color="primary"
          className={`${classes.button} ${classes.buttonHover}`}
          onClick={openMap}
          startIcon={<MapIcon />}
        >
          Google Maps
        </Button>
      </div>
    </Container>
  );
}

export default Contact;
