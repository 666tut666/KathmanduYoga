import React from "react";
import { Box, Container, Typography, Button, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Zoom, Fade, Slide } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  banner: {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    objectPosition: "top",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    marginBottom: "32px",
  },
  welcomeText: {
    fontWeight: "700",
    color: "#333",
    marginBottom: "24px",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  },
  subheading: {
    fontWeight: "600",
    color: "#555",
    marginBottom: "16px",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
  },
  description: {
    color: "#333",
    fontSize: "18px",
    fontFamily: "Georgia, serif",
    textAlign: "center",
    marginBottom: "40px",
    lineHeight: "1.6",
  },
  container: {
    padding: "32px",
    backgroundColor: "#f9f9f9",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    marginTop: "40px",
    textAlign: "center",
  },
  section: {
    marginTop: "40px",
    textAlign: "center",
    padding: "24px",
    borderRadius: "20px",
    background: "linear-gradient(145deg, #ffffff, #f0f0f0)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
    },
  },
  button: {
    marginTop: "16px",
    fontWeight: "600",
    textTransform: "none",
    padding: "10px 20px",
    backgroundColor: "#1976d2",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#1565c0",
    },
    borderRadius: "30px",
  },
  about: {
    background: "linear-gradient(145deg, #d8f5d8, #c8e6c9)", // Light green gradient
  },
  why: {
    background: "linear-gradient(145deg, #d0ebff, #bbdefb)", // Light blue gradient
  },
  nature: {
    background: "linear-gradient(145deg, #fff3e0, #ffe0b2)", // Light orange gradient
  },
  schedule: {
    background: "linear-gradient(145deg, #e8eaf6, #c5cae9)", // Light purple gradient
  },
  practices: {
    background: "linear-gradient(145deg, #ffebee, #ffcdd2)", // Light pink gradient
  },
  costs: {
    background: "linear-gradient(145deg, #e0f7fa, #b2ebf2)", // Light cyan gradient
  },
}));

function Home() {
  const classes = useStyles();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container className={classes.container}>
      <Zoom in={true} style={{ transitionDelay: "200ms" }}>
        <img 
          src="/static/images/everest-banner.png" 
          alt="Himalayan Peaks Yoga" 
          style={{ 
            width: "100%", 
            height: isMobile ? "300px" : "400px",
            objectFit: "cover",
            objectPosition: isMobile ? "top" : "center",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
            marginBottom: "32px",
            marginTop: "40px"
          }}
          loading="lazy"
        />
      </Zoom>
      <Fade in={true} style={{ transitionDelay: "400ms" }}>
        <Typography variant="h2" className={classes.welcomeText}>
          Welcome to Kathmandu Yoga
        </Typography>
      </Fade>
      <Fade in={true} style={{ transitionDelay: "600ms" }}>
        <Typography variant="body1" className={classes.description}>
          Your journey to explore Health, Happiness, and Harmony starts here.
        </Typography>
      </Fade>

      <Slide in={true} direction="up" timeout={800}>
        <Paper className={`${classes.section} ${classes.about}`} elevation={3}>
          <Typography variant="h4" className={classes.subheading}>
            Kathmandu Yoga
          </Typography>
          <Typography variant="body1" className={classes.description}>
            Kathmandu Yoga is a registered yoga institution with the Government of Nepal. We are dedicated to sharing the transformative power of yoga, following the teachings of Paramahamsa Satyananda Saraswati, the founder of Satyananda Yoga and Bihar Yoga. Our teachings are based on the Yoga Chakra (Wheel of Yoga) concept, which integrates physical, mental, and spiritual practices for holistic well-being.
          </Typography>
        </Paper>
      </Slide>

      <Slide in={true} direction="up" timeout={1000}>
        <Paper className={`${classes.section} ${classes.why}`} elevation={3}>
          <Typography variant="h4" className={classes.subheading}>
            Why Kathmandu Yoga?
          </Typography>
          <Typography variant="body1" className={classes.description}>
            • Thousands of aspirants from over 42 countries and 5 continents have been inspired by our teachings. <br />
            • Our founder, Sannyasi Premananda (Shiva Basyal), holds a Master's Degree in Yoga Psychology with First Class honors from Bihar Yoga Bharati, the first yoga university in the world. <br />
            • With over 26 years of dedicated practice and teaching, he is Nepal's first registered and certified yoga master. <br />
            • Our syllabus is rooted in classical scriptures, ensuring an authentic and transformative yoga experience. <br />
            • We offer personalized, one-on-one, and group sessions tailored to your needs and interests. <br />
            • Our approach goes beyond physical fitness, focusing on the mind-body-spirit connection to help you experience yoga in its fullest form.
          </Typography>
        </Paper>
      </Slide>

      <Slide in={true} direction="up" timeout={1200}>
        <Paper className={`${classes.section} ${classes.nature}`} elevation={3}>
          <Typography variant="h4" className={classes.subheading}>
            Nature of Classes
          </Typography>
          <Typography variant="body1" className={classes.description}>
            Our classes are fully guided, with a focus on deepening your awareness of each practice. Whether you prefer one-on-one sessions or group classes with friends or family, we cater to your needs. Online classes are also available for those who cannot attend in person.
          </Typography>
        </Paper>
      </Slide>

      <Slide in={true} direction="up" timeout={1400}>
        <Paper className={`${classes.section} ${classes.schedule}`} elevation={3}>
          <Typography variant="h4" className={classes.subheading}>
            Time Schedule
          </Typography>
          <Typography variant="body1" className={classes.description}>
            We offer flexible schedules to accommodate your lifestyle. Classes can be arranged at any time, depending on your and our availability. All appointments must be made in advance.
          </Typography>
        </Paper>
      </Slide>

      <Slide in={true} direction="up" timeout={1600}>
        <Paper className={`${classes.section} ${classes.practices}`} elevation={3}>
          <Typography variant="h4" className={classes.subheading}>
            Synopsis of Practices
          </Typography>
          <Typography variant="body1" className={classes.description}>
            Our sessions include a blend of Asanas (Body Postures), Pranayamas (Breathing Techniques), Mudras (Psychic Gestures), Bandhas (Energy Locks), Shatkarmas (Cleansing Practices), Yoga Nidra (Deep Relaxation), and Guided Meditation. Each practice is explained in detail to help you understand its benefits and purpose.
          </Typography>
        </Paper>
      </Slide>

      <Slide in={true} direction="up" timeout={1800}>
        <Paper className={`${classes.section} ${classes.costs}`} elevation={3}>
          <Typography variant="h4" className={classes.subheading}>
            Costs
          </Typography>
          <Typography variant="body1" className={classes.description}>
            Our pricing varies depending on the package you choose. Contact us for more details and to find a plan that suits your needs.
          </Typography>
        </Paper>
      </Slide>

      <Slide in={true} direction="up" timeout={2000}>
        <div className={classes.section}>
          <Typography variant="h4" className={classes.subheading}>
            Ready to Begin?
          </Typography>
          <Typography variant="body1" className={classes.description}>
            Start your journey to wellness with Kathmandu Yoga. Contact us today to book your first session!
          </Typography>
          <Button
            variant="contained"
            className={classes.button}
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </Button>
        </div>
      </Slide>
    </Container>
  );
}

export default Home;
