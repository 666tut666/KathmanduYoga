import React from "react";
import { Container, Typography, Grid, Button, Box, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"; // Import quote icons

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "40px",
    background: "linear-gradient(145deg, #ffffff, #f8f9fa)", // Gradient background
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    marginTop: "40px",
  },
  title: {
    fontWeight: "900",
    color: "#2c3e50",
    marginBottom: "32px",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "2.5rem",
    textAlign: "center",
  },
  section: {
    marginBottom: "40px",
    padding: "20px",
    borderRadius: "15px",
    background: "#fff",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    },
  },
  image: {
    width: "100%",
    maxWidth: "400px",
    borderRadius: "15px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
  },
  content: {
    padding: "24px",
  },
  guruTitle: {
    fontWeight: "700",
    color: "#2c3e50",
    marginBottom: "16px",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "1.75rem",
  },
  guruDescription: {
    color: "#666",
    fontSize: "16px",
    lineHeight: "1.8",
    fontFamily: "'Merriweather', serif",
  },
  quote: {
    fontStyle: "italic",
    color: "#2c3e50",
    marginTop: "16px",
    marginBottom: "32px", // Increased marginBottom for a two-line gap
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  ctaButton: {
    marginTop: "40px",
    backgroundColor: "#2c3e50",
    color: "#fff",
    padding: "12px 24px",
    borderRadius: "8px",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "16px",
    fontWeight: "600",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#1a2a3a",
    },
  },
  divider: {
    margin: "24px 0",
    backgroundColor: "#ddd",
  },
}));

function YogaTradition() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h2" className={classes.title}>
        Our Tradition
      </Typography>

      {/* Saraswati Parampara - Image Section Removed */}
      <Box className={classes.section}>
        <Grid container>
          {/* Removed image grid item */}
          <Grid item xs={12} className={classes.content}>
            <Typography variant="h4" className={classes.guruTitle}>
              The Saraswati Parampara
            </Typography>
            <Typography variant="body1" className={classes.quote}>
              <FaQuoteLeft />
              <b>Knowledge is the eye of all beings, and without knowledge, the eye cannot see</b>
              <FaQuoteRight />
            </Typography>
            <Divider className={classes.divider} />
            <Typography variant="body1" className={classes.guruDescription}>
              The Saraswati Parampara of Shankaracharya refers to the spiritual lineage that emphasizes 
              the pursuit of knowledge and wisdom, tracing its roots back to the goddess Saraswati. 
              This tradition is part of the broader Dashnami Sannyasa tradition established by 
              Adi Shankaracharya to unify various groups of renunciates under Sanatan Dharma. 
              The Saraswati Parampara focuses on the study and teaching of sacred texts, philosophy, 
              and the practice of meditation and yoga to attain self-realization and liberation (moksha). 
              It highlights the importance of intellectual and spiritual growth in the path to enlightenment.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Adi Guru Shankaracharya */}
      <Box className={classes.section}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <img
              src="/static/images/shankaracharya.jpg"
              alt="Adi Guru Shankaracharya"
              className={classes.image}
            />
          </Grid>
          <Grid item xs={12} md={6} className={classes.content}>
            <Typography variant="h4" className={classes.guruTitle}>
              Adi Guru Shankaracharya
            </Typography>
            <Typography variant="body1" className={classes.quote}>
              <FaQuoteLeft />
              <b>The world is unreal; only Brahman is real. Brahman is the world.</b>
              <FaQuoteRight />
            </Typography>
            <Divider className={classes.divider} />
            <Typography variant="body1" className={classes.guruDescription}>
              Adi Guru Shankaracharya, an 8th-century Indian philosopher, revitalized Hinduism by consolidating Advaita Vedanta—a doctrine emphasizing the oneness of the individual soul (Atman) with the ultimate reality (Brahman). His influential commentaries on the Upanishads, Bhagavad Gita, and Brahma Sutras remain foundational to Hindu philosophy. Shankaracharya also established four mathas (monastic centers) across India, fostering learning and spirituality. His efforts unified Vedic knowledge, promoting a non-sectarian approach. Shankaracharya's legacy as a spiritual reformer and philosophical pioneer endures, marking him as one of India's greatest minds.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Swami Sivananda Saraswati */}
      <Box className={classes.section}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <img
              src="/static/images/Sivananda.png"
              alt="Swami Sivananda Saraswati"
              className={classes.image}
            />
          </Grid>
          <Grid item xs={12} md={6} className={classes.content}>
            <Typography variant="h4" className={classes.guruTitle}>
              Swami Sivananda Saraswati
            </Typography>
            <Typography variant="body1" className={classes.quote}>
              <FaQuoteLeft />
              <b>Serve, Love, Give, Purify, Meditate, Realize, Be Good, Do Good, Be Kind, Be Compassionate.</b>
              <FaQuoteRight />
            </Typography>
            <Divider className={classes.divider} />
            <Typography variant="body1" className={classes.guruDescription}>
             Swami Sivananda Saraswati, born Kuppuswami in 1887 in Tamil Nadu, India, was a renowned yoga master and spiritual luminary. After practicing medicine for several years, he renounced worldly life to pursue spiritual enlightenment. In 1936, he founded the Divine Life Society in Rishikesh, which promotes yoga, Vedanta, and a holistic approach to well-being. Swami Sivananda authored over 200 books on yoga, Vedanta, and various subjects, leaving a lasting legacy in the field of spiritual and physical wellness. His teachings emphasized the importance of a balanced life through the principles of yoga, emphasizing physical health, mental clarity, and spiritual growth. One of his disciples, Swami Satyananda Saraswati, continued to spread his teachings worldwide. His message of "Be Good, Do Good, Be Kind, Be Compassionate" continues to inspire millions to lead a divine life.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Swami Satyananda Saraswati */}
      <Box className={classes.section}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <img
              src="/static/images/Satyananda.png"
              alt="Swami Satyananda Saraswati"
              className={classes.image}
            />
          </Grid>
          <Grid item xs={12} md={6} className={classes.content}>
            <Typography variant="h4" className={classes.guruTitle}>
              Swami Satyananda Saraswati
            </Typography>
            <Typography variant="body1" className={classes.quote}>
              <FaQuoteLeft />
              <b>Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.</b>
              <FaQuoteRight />
            </Typography>
            <Divider className={classes.divider} />
            <Typography variant="body1" className={classes.guruDescription}>
            Swami Satyananda Saraswati, born in 1923 in Almora, Uttarakhand, was a distinguished yoga exponent and spiritual luminary. As a young man, he became a disciple of Swami Sivananda Saraswati, immersing himself in rigorous spiritual training and service. In 1964, he founded the Bihar School of Yoga, which has become one of the foremost institutions for yoga education globally. Swami Satyananda's contributions to yoga literature are vast, with over 80 influential books such as "Asana Pranayama Mudra Bandha" that are considered essential reading for yoga practitioners. Swami Satyananda's teachings emphasized a holistic approach to well-being, integrating physical, mental, and spiritual practices. He introduced and systematized practices like Yoga Nidra, which have gained worldwide acclaim for their profound benefits. Throughout his life, he traveled extensively, establishing ashrams and yoga centers, and spreading his message of self-realization and inner peace. Swami Satyananda's legacy lives on through the Bihar School of Yoga and the countless individuals and teachers he inspired, continuing to guide practitioners on their path to holistic health and spiritual enlightenment. He attained maha Samadhi at midnight of 5th December, 2009 in the presence of his disciples.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Swami Niranjanananda Saraswati */}
      <Box className={classes.section}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <img
              src="/static/images/Niranjanananda.png"
              alt="Swami Niranjanananda Saraswati"
              className={classes.image}
            />
          </Grid>
          <Grid item xs={12} md={6} className={classes.content}>
            <Typography variant="h4" className={classes.guruTitle}>
              Swami Niranjanananda Saraswati
            </Typography>
            <Typography variant="body1" className={classes.quote}>
              <FaQuoteLeft />
              <b>Yoga is not a practice confined to the mat. It is a way of life that influences your thoughts, words, and actions.</b>
              <FaQuoteRight />
            </Typography>
            <Divider className={classes.divider} />
            <Typography variant="body1" className={classes.guruDescription}>
            Swami Niranjanananda Saraswati, born on February 14, 1960, in Rajnandgaon, Chhattisgarh, India, is a revered spiritual propagator and the designated successor of Swami Satyananda Saraswati. His spiritual journey began at a remarkably young age under the guidance of his guru. By the age of four, Swami Niranjanananda had already embarked on his yogic path at the Bihar School of Yoga. In 1971, he was initiated into Dashnami sannyasa, and for the next eleven years, he traveled extensively, sharing the teachings of yoga in Europe, Australia, and the Americas. His international experiences enriched his understanding and practice of yoga, contributing to his global perspective on spiritual and holistic health. Upon his return to India in 1983, Swami Niranjanananda assumed leadership roles at the Bihar School of Yoga and its associated institutions. His vision led to the establishment of Bihar Yoga Bharati in 1994, the first university dedicated to the study of yoga. He also founded the Yoga Publications Trust in 2000, ensuring the widespread dissemination of yogic knowledge. Swami Niranjanananda's contributions to literature include numerous books on yoga, tantra, and the Upanishads, providing valuable insights and guidance to practitioners worldwide. In recognition of his distinguished service in the field of yoga, he was awarded the Padma Bhushan in 2017, one of India's highest civilian honors. Swami Niranjanananda continues to inspire countless individuals, embodying the principles of yoga and leading them on a path of self-realization and inner peace.


            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Swami Satyasangananda Saraswati */}
      <Box className={classes.section}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <img
              src="/static/images/Satyasangananda.png"
              alt="Swami Satyasangananda Saraswati"
              className={classes.image}
            />
          </Grid>
          <Grid item xs={12} md={6} className={classes.content}>
            <Typography variant="h4" className={classes.guruTitle}>
              Swami Satyasangananda Saraswati
            </Typography>
            <Typography variant="body1" className={classes.quote}>
              <FaQuoteLeft />
              <b>The journey of self-discovery is a lifelong path. Embrace each step with openness and certainty.</b>
              <FaQuoteRight />
            </Typography>
            <Divider className={classes.divider} />
            <Typography variant="body1" className={classes.guruDescription}>
              Swami Satyasangananda Saraswati, born in 1953 in West Bengal, is a distinguished spiritual propagator and author. Initiated into the Dashnami sannyasa tradition by Swami Satyananda Saraswati in 1982, she has dedicated her life to the propagation of yoga and tantra. Known for her ability to present ancient teachings in a modern context, she has authored several influential books. In 2007, she became the Peethadhishwari of Rikhiapeeth, where she continues to promote holistic well-being and selfless service. Swami Satyasangananda's dedication to her guru's teachings and her work at Rikhiapeeth have made her an inspirational figure in the world of yoga and spirituality.
            </Typography>
          </Grid>
        </Grid> 
      </Box>
    </Container>
  );
}

export default YogaTradition;
