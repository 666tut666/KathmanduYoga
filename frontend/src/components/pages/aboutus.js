import React from "react";
import { Container, Typography, Grid, Card, CardContent, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
//import yogaGroup from "../../assets/images/yoga-group.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "40px",
    background: "linear-gradient(145deg, #ffffff, #f8f9fa)", // Soft gradient background
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    marginTop: "40px",
    textAlign: "center",
  },
  title: {
    fontWeight: "900",
    color: "#2c3e50", // Dark blue for contrast
    marginBottom: "32px",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "2.5rem",
    letterSpacing: "-0.5px",
    background: "linear-gradient(145deg, #6a11cb, #2575fc)", // Gradient for title
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  description: {
    color: "#555",
    fontSize: "18px",
    fontFamily: "'Merriweather', serif",
    marginBottom: "32px",
    lineHeight: "1.8",
    textAlign: "left",
  },
  highlight: {
    color: "#2575fc", // Bright blue for highlights
    fontWeight: "600",
  },
  missionSection: {
    backgroundColor: "#ffffff",
    padding: "24px",
    borderRadius: "15px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
    marginTop: "32px",
    textAlign: "left",
    borderLeft: "5px solid #6a11cb", // Accent border
  },
  missionTitle: {
    fontWeight: "700",
    color: "#2c3e50",
    marginBottom: "16px",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "1.75rem",
    background: "linear-gradient(145deg, #6a11cb, #2575fc)", // Gradient for section titles
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  missionContent: {
    color: "#666",
    fontSize: "16px",
    lineHeight: "1.8",
    fontFamily: "'Merriweather', serif",
  },
  ctaButton: {
    marginTop: "40px",
    background: "linear-gradient(145deg, #6a11cb, #2575fc)", // Gradient for button
    color: "#fff",
    padding: "12px 24px",
    borderRadius: "8px",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "16px",
    fontWeight: "600",
    textTransform: "none",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    },
  },
  testimonialSection: {
    backgroundColor: "#ffffff",
    padding: "24px",
    borderRadius: "15px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
    marginTop: "32px",
    textAlign: "left",
    borderLeft: "5px solid #2575fc", // Accent border
  },
  testimonialList: {
    paddingLeft: "20px",
    marginTop: "10px",
    listStyleType: "none",
    "& li": {
      marginBottom: "10px",
      paddingLeft: "10px",
      borderLeft: "3px solid #6a11cb", // Accent border for list items
      fontStyle: "italic",
      color: "#555",
    },
  },
  founderSection: {
    backgroundColor: "#ffffff",
    padding: "24px",
    borderRadius: "15px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
    marginTop: "32px",
    textAlign: "left",
    borderLeft: "5px solid #2575fc", // Accent border
  },
  image: {
    width: "100%",
    maxWidth: "400px",
    borderRadius: "15px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
  },
  faqSection: {
    backgroundColor: "#ffffff",
    padding: "40px 32px",
    borderRadius: "15px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.08)",
    marginTop: "40px",
    borderLeft: "5px solid #6a11cb",
    position: 'relative',
    overflow: 'hidden',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '4px',
      background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
    }
  },
  faqTitle: {
    fontWeight: "700",
    marginBottom: "40px",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "2rem",
    background: "linear-gradient(145deg, #6a11cb, #2575fc)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "flex",
    alignItems: "center",
    gap: "16px",
    padding: "8px 0",
  },
  faqItem: {
    marginBottom: "28px",
    padding: "20px",
    borderRadius: "8px",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    "&:hover": {
      background: "rgba(106, 17, 203, 0.03)",
      transform: "translateX(8px)",
    },
    '&:last-child': {
      marginBottom: 0
    }
  },
  question: {
    color: "#2c3e50",
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between", // Align text and icon to opposite ends
    fontFamily: "'Poppins', sans-serif",
    position: 'relative',
    paddingRight: "24px", // Space for the dropdown icon

  },
  answer: {
    color: "#555",
    fontSize: "16px",
    lineHeight: "1.8",
    fontFamily: "'Merriweather', serif",
    paddingLeft: "0", // Remove padding
    marginTop: "16px", // Add spacing between question and answer
    marginLeft: "0", // Remove margin
    position: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      left: '-20px', // Adjust for the removed padding
      top: '12px',
      height: 'calc(100% - 24px)',
      width: '2px',
      background: 'linear-gradient(to bottom, #6a11cb, #2575fc)',
    }
  },
  expandIcon: {
    fontSize: "1.5rem",
    cursor: "pointer",
    color: "#6a11cb",
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  }
}));

function AboutUs() {
  const classes = useStyles();

  const faqData = [
    {
      question: "What kind of yoga do you teach?",
      answer: (
        <>
          We follow the systems of teaching of Satyananda Yoga/Bihar Yoga founded by Paramhamsa Satyananda Saraswati,
          giving more emphasis to the particular need and interest of aspirants.
          <br /><br />

          <a href="http://www.biharyoga.net" target="_blank" rel="noopener noreferrer" className={classes.highlight}>
            www.biharyoga.net
          </a><br /><br />

          Considering Yoga NOT just as science of body but as science of life.<br />
          <b><i>EXPERIENCE GOOD<br />
          EXPRESS GOOD</i></b>
        </>
      ),
    },
    {
      question: "What should I wear?",
      answer: "Any loose and comfortable clothing. Natural fabrics like cotton are best.",
    },
    {
      question: "Do I need to bring a mat?",
      answer: "We provide clean and hygienic mats. If you want to bring your own mat, you can bring it.",
    },
    {
      question: "What ages do you teach?",
      answer: (
        "We teach all ages aspirants. We have well designed packages suited to different age groups: Custom programs for specific age groups, Packages tailored to individual capacities, Specialized solutions for common age-related challenges, and CCYS program for easier progression."
      ),
    },
    {
      question: "I am pregnant, is it safe to practice yoga?",
      answer: (
        "Yes. Our specialized prenatal package includes: Trimester-specific modifications (1-3, 4-6, 7-9 months), Enhanced yoga nidra practices, Postnatal recovery support and Mother-child wellness techniques."
      ),
    },
    {
      question: "Is it a residential yoga school?",
      answer: (
        "No. We don't have residential facilities currently. Nearby accommodation options include: Hotels, Service apartments and Guest houses."
      ),
    },
    {
      question: "Do you provide any training?",
      answer: (
        "We offer comprehensive training programs: 30-200 hour intensive courses, Traditional scripture-based philosophy, Practical theory integration and Historical context and principles."
      ),
    },
    {
      question: "I have some health issues. Can I still practice Yoga?",
      answer: (
        "Yes, with our therapeutic approach: Customized practice selection, Health condition-specific modifications, Expert-guided safe progression and Integrated wellness monitoring."
      ),
    },
    {
      question: "What is the method of teaching?",
      answer: (
        "Our instructional methodology focuses on: Auditory learning emphasis, Awareness development, Concentration enhancement and Experiential understanding."
      ),
    },
    {
      question: "Can I record the session in the classroom?",
      answer: (
        "No. Our policy requires: No recording devices during sessions, Mobile phones turned off, Focused participation and Respect for communal learning space."
      ),
    },
  ];

  return (
    <Container className={classes.container}>
      {/* Page Title */}
      <Typography variant="h2" className={classes.title}>
        About Kathmandu Yoga
      </Typography>

      {/* Introduction */}
      <Typography variant="body1" className={classes.description}>
        Welcome to <span className={classes.highlight}>Kathmandu Yoga</span>, where we blend ancient wisdom with modern lifestyle to help you achieve holistic well-being. Founded by <span className={classes.highlight}>Sannyasi Premananda</span> in 1996, our journey began with a deep passion for yoga and its transformative power. After earning his <span className={classes.highlight}>M.A. in Yoga Psychology</span> with first-class honors from the prestigious <span className={classes.highlight}>Bihar School of Yoga</span> in 2000, Sannyasi Premananda has dedicated his life to sharing the profound benefits of yoga with the world.
      </Typography>

      {/* Our Founder Section */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <img
            src="/static/images/founder.jpg" // Path to founder's image
            alt="Premananda (Shiva Basyal)"
            className={classes.image}
          />
        </Grid>
        <Grid item xs={12} md={6} className={classes.content}>
          <Typography variant="h4" className={classes.missionTitle}>
            Our Founder/Instructor
          </Typography>
          <Typography variant="body1" className={classes.missionContent}>
            <span className={classes.highlight}>Premananda (Shiva Basyal)</span> is the Founder/Instructor of Kathmandu Yoga. He holds an <span className={classes.highlight}>M.A. in Yoga Psychology</span> from Bihar Yoga Bharati (the First Yoga University in the World), India, and is the first registered and certified yoga master in Nepal. With over <span className={classes.highlight}>27 years of experience</span> in yoga, he has successfully applied his expertise to various sectors, including government agencies, INGOs, NGOs, and private sectors in health and education. He is also an M. A. in Sociology from Tribhuvan University, Kathmandu, Nepal. 
          </Typography>
          <Typography variant="body1" className={classes.missionContent}>
            <br></br> Premananda is initiated as a <span className={classes.highlight}>Karma Sannyasi</span> by his Guru, <span className={classes.highlight}>Paramhamsa Niranjanananda Saraswati</span>. Kathmandu Yoga follows the techniques systematized by <span className={classes.highlight}>Paramahamsa Satyananda Saraswati</span>, the Founder of Satyananda Yoga/Bihar Yoga Tradition (<a href="http://www.biharyoga.net" target="_blank" rel="noopener noreferrer" className={classes.highlight}>www.biharyoga.net</a>), addressing the diverse interests and needs of aspirants.
          </Typography>
        </Grid>
      </Grid>

      {/* Mission Section */}
      <Card className={classes.missionSection}>
        <CardContent>
          <Typography variant="h4" className={classes.missionTitle}>
            Our Mission
          </Typography>
          <Typography variant="body1" className={classes.missionContent}>
          At Kathmandu Yoga, our mission is to create a welcoming and inclusive space where everyone—from beginners to advanced practitioners—can explore the transformative power of yoga. We believe yoga is not just a physical practice but a way of life that nurtures the body, mind, emotion and soul. Our goal is to empower you to live a healthy, happy and harmonious life through the understanding, practice and application of yoga in every moment of life.
          </Typography>
        </CardContent>
      </Card>

      {/* Core Values Section */}
      <Card className={classes.missionSection} style={{ marginTop: "24px" }}>
        <CardContent>
          <Typography variant="h4" className={classes.missionTitle}>
            Our Core Values
          </Typography>
          <Typography variant="body1" className={classes.missionContent}>
          At the heart of Kathmandu Yoga, our core values are: awareness, inclusivity, and holistic well-being. We are committed to creating a supportive community where everyone feels valued and respected. Our compassionate instructors guide you with personalized attention, ensuring your yoga journey to its fulfillment.
          </Typography>
        </CardContent>
      </Card>

      {/* Unique Offering Section */}
      <Card className={classes.missionSection} style={{ marginTop: "24px" }}>
        <CardContent>
          <Typography variant="h4" className={classes.missionTitle}>
            What Sets Us Apart
          </Typography>
          <Typography variant="body1" className={classes.missionContent}>
           What makes Kathmandu Yoga unique is our deep-rooted connection to the Satyananda Yoga Tradition. This tradition, rooted in ancient wisdom, emphasizes the integration of experience and expression of yoga to achieve harmony in life. Our classes are designed to be accessible to all, whether you're a beginner or an experienced practitioner. We also offer online classes, making yoga accessible to anyone, anywhere.
          </Typography>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card className={classes.faqSection}>
        <CardContent>
          <Typography variant="h4" className={classes.faqTitle}>
            Frequently Asked Questions
          </Typography>

          {faqData.map((item, index) => (
            <Card className={classes.faqItem} key={index}>
              <Typography variant="h6" className={classes.question}>
                <Box display="flex" alignItems="center">
                  {item.question}
                </Box>
              </Typography>
              <Typography variant="body1" className={classes.answer}>
                {item.answer}
              </Typography>
            </Card>
          ))}
        </CardContent>
      </Card>
    </Container>
  );
}

export default AboutUs;
