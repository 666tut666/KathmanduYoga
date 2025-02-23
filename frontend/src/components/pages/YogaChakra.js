import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "40px",
    background: "linear-gradient(145deg, #f8f9fa, #e9ecef)",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    marginTop: "40px",
    position: 'relative',
    overflow: 'hidden',
  },
  title: {
    fontWeight: "900",
    color: "#2c3e50",
    marginBottom: "32px",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "2.8rem",
    letterSpacing: "1px",
    textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
    textAlign: "center",
  },
  description: {
    color: "#555",
    fontSize: "18px",
    fontFamily: "'Merriweather', serif",
    marginBottom: "40px",
    lineHeight: "1.8",
    padding: '20px',
    background: 'rgba(255,255,255,0.9)',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
  },
  chakraSection: {
    marginTop: "32px",
    textAlign: "center",
    padding: "32px",
    borderRadius: "20px",
    background: "linear-gradient(145deg, #ffffff, #f8f9fa)",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
  },
  chakraTitle: {
    fontWeight: "700",
    color: "#2c3e50",
    marginBottom: "24px",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "2rem",
  },
  chakraContent: {
    color: "#666",
    fontSize: "17px",
    lineHeight: "1.8",
    marginBottom: "24px",
    fontFamily: "'Merriweather', serif",
  },
  diagramContainer: {
    margin: '40px 0',
    padding: '20px',
    background: '#fff',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  diagramImage: {
    width: '100%',
    maxWidth: '800px',
    height: 'auto',
    borderRadius: '15px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
    display: 'block',
    margin: '0 auto',
    '@media (max-width: 600px)': {
      width: '90%',
    },
  },
}));

function YogaChakra() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      {/* Page Title */}
      <Typography variant="h2" className={classes.title}>
        Yoga Chakra (Wheel of Yoga)
      </Typography>
      
      {/* Hatha Yoga Section */}
      <Paper className={classes.chakraSection} elevation={3}>
        <Typography variant="h4" className={classes.chakraTitle}>
          Hatha Yoga
        </Typography>
        <Typography variant="body1" className={classes.chakraContent}>
          Hatha Yoga aims to purify and balance body and mind. It focuses on physical postures (asanas), breath control (pranayama), and meditation to promote overall well-being. Hatha Yoga prepares the body for deeper spiritual practices and enhances physical strength and flexibility.
        </Typography>
      </Paper>
      
      {/* Raja (Ashtanga) Yoga Section */}
      <Paper className={classes.chakraSection} elevation={3}>
        <Typography variant="h4" className={classes.chakraTitle}>
          Raja (Ashtanga) Yoga
        </Typography>
        <Typography variant="body1" className={classes.chakraContent}>
          Raja (Ashtanga) Yoga aims to harmonize mind, emotions, and spirit. It follows the 8-fold path (ashtanga) which includes ethical principles, physical postures, breath control, and deep meditation. This form of yoga helps attain self-mastery and mental clarity.
        </Typography>
      </Paper>
      
      {/* Kriya Yoga Section */}
      <Paper className={classes.chakraSection} elevation={3}>
        <Typography variant="h4" className={classes.chakraTitle}>
          Kriya Yoga
        </Typography>
        <Typography variant="body1" className={classes.chakraContent}>
          Kriya Yoga aims to harmonize Prana (energy) in the body. It involves specific techniques of breath control and meditation to awaken spiritual energy and bring balance to the mind and body. Kriya Yoga is about direct experience, offering the practitioner an opportunity to feel goodness and positivity.
        </Typography>
      </Paper>
      
      {/* Jnana Yoga Section */}
      <Paper className={classes.chakraSection} elevation={3}>
        <Typography variant="h4" className={classes.chakraTitle}>
          Jnana Yoga
        </Typography>
        <Typography variant="body1" className={classes.chakraContent}>
          Jnana Yoga aims to express goodness and positivity through the Head (mind). It fosters balanced intellectual expressions, proper understanding, mental clarity, and positive thoughts. This path is about wisdom, self-inquiry, and the pursuit of truth.
        </Typography>
      </Paper>
      
      {/* Bhakti Yoga Section */}
      <Paper className={classes.chakraSection} elevation={3}>
        <Typography variant="h4" className={classes.chakraTitle}>
          Bhakti Yoga
        </Typography>
        <Typography variant="body1" className={classes.chakraContent}>
          Bhakti Yoga aims to express goodness and positivity through the Heart (emotion). It emphasizes love, compassion, kindness, empathy, and generosity. Bhakti is the path of devotion and surrender to a higher power, cultivating an open and loving heart.
        </Typography>
      </Paper>
      
      {/* Karma Yoga Section */}
      <Paper className={classes.chakraSection} elevation={3}>
        <Typography variant="h4" className={classes.chakraTitle}>
          Karma Yoga
        </Typography>
        <Typography variant="body1" className={classes.chakraContent}>
          Karma Yoga aims to express goodness and positivity through the Hands (action). It teaches the importance of performing selfless, responsible, and mindful actions without attachment to the results. It is the yoga of service, where one seeks to act for the welfare of others.
        </Typography>
      </Paper>
      
      {/* Diagram Section */}
      <Box 
        className={classes.diagramContainer}
        sx={{ 
          textAlign: 'center',
          padding: '40px 20px',
          margin: '60px auto'
        }}
      >
        <img
          src="/static/images/yogachakra.png"
          alt="Yoga Chakra Diagram"
          className={classes.diagramImage}
        />
      </Box>
      
      <Typography variant="body1" className={classes.description} style={{ marginTop: "40px" }}>
        This is Experiential Yoga, where you experience goodness and positivity through Bahiranga Yoga. It is also Expressive Yoga, where you express this goodness through Antaranga Yoga in your daily life. This holistic approach is the essence of the Satyananda Yoga Tradition or Bihar Yoga Tradition, where Yoga is viewed as the Science of Life.
      </Typography>
    </Container>
  );
}

export default YogaChakra;