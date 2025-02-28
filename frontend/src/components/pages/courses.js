import * as React from 'react';
import { Container, Grid, Card, CardContent, CardActions, Button, Typography, Box, Collapse } from '@mui/material';
import { styled } from '@mui/system';
import { Spa, SelfImprovement, Groups, School, Favorite } from '@mui/icons-material';

const coursesData = [
  {
    title: 'General Package',
    icon: <Spa fontSize="large" />, 
    description: 'A comprehensive practical session focusing on maintaining overall health and wellbeing through guided practices. Includes diverse asana sequences, pranayama techniques, mudra practices, and Yoga Nidra meditation.',
    highlights: ['Suitable for all levels', 'Fully guided sessions', 'Balanced mind-body approach']
  },
  {
    title: 'Specific Packages',
    icon: <Groups fontSize="large" />,
    description: 'Tailored programs combining theory and practice for specific needs and groups:',
    details: [
      'Yoga Therapy for Chronic Conditions (Hypertension, Diabetes, Respiratory problems, Gynecological problems, Infertility, Back pain, and others)',
      'Pre/Postnatal Wellness',
      'Stress Reduction Techniques',
      'Youth & Educator Programs',
      'Senior-Friendly Practices',
      'Corporate Wellness Modules',
      'Yoga for Children',
      'Yoga for School Teachers',
      'Yoga for Medical Practitioners and Students',
      'Yoga for Executives',
      'Yoga for Psychological Management (Depression, Anxiety, PTSD, OCD, and others)'
    ]
  },
  {
    title: 'Intensive Packages',
    icon: <SelfImprovement fontSize="large" />,
    description: 'These packages are for those who are keenly interested to deepen and widen their knowledge and experience in different aspects of yogic sciences. Depending upon your need, interest and convenience, we have designed the packages with different options:',
    options: [
      {
        name: '30 Hours Package',
        practice: 'asana, pranayama, mudra and yoga nidra / guided meditation',
        theory: 'general philosophy, history, theory and principles of yoga'
      },
      {
        name: '75 Hours Package',
        practice: 'asana, pranayama, mudra, bandha and yoga nidra',
        theory: 'general philosophy, history, theory and principles of yoga',
        note: 'This package covers a more extended form of theory and practice'
      },
    ],
    certification: false
  },
  {
    title: 'Certification Course on Yogic Studies',
    icon: <School fontSize="large" />,
    description: 'Complete immersion program combining practical mastery with theoretical understanding. Includes comprehensive assessment and certification upon completion.',
    options: [
      {
        name: '200 Hours Package',
        practice: 'asana, pranayama, mudra, bandha and yoga nidra',
        theory: 'general philosophy, history, theory and principles of yoga',
        note: 'A certificate is issued after the completion of the package.'
      },
    ],
  }
];

const GradientContainer = styled(Container)(({ theme }) => ({
  background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
  padding: theme.spacing(6),
  borderRadius: '2rem',
  marginTop: theme.spacing(8),
  boxShadow: '0 16px 40px -12px rgba(0,0,0,0.15)'
}));

const StyledCard = styled(Card)(({ theme }) => ({
  minHeight: 300,
  borderRadius: '1.5rem',
  transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 24px -6px rgba(0,0,0,0.15)'
  }
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  background: 'linear-gradient(45deg, #2c3e50 0%, #3498db 100%)',
  width: 60,
  height: 60,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  marginBottom: theme.spacing(2)
}));

export default function Courses() {
  const [expanded, setExpanded] = React.useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <GradientContainer maxWidth="lg">
      <Typography variant="h2" component="h2" gutterBottom sx={{
        textAlign: 'center',
        fontWeight: 700,
        color: '#2c3e50',
        mb: 6,
        fontSize: { xs: '2rem', md: '2.5rem' },
        '&:after': {
          content: '""',
          display: 'block',
          width: '80px',
          height: '4px',
          background: '#3498db',
          margin: '1.5rem auto'
        }
      }}>
        Transformative Yoga Programs
      </Typography>

      <Grid container spacing={4}>
        {coursesData.map((course, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StyledCard>
              <CardContent sx={{ px: 3, pt: 3 }}>
                <IconWrapper>{course.icon}</IconWrapper>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: '#2c3e50', minHeight: 72 }}>
                  {course.title}
                </Typography>
                <Typography variant="body1" sx={{ color: '#6c757d', mb: 2, minHeight: 80 }}>
                  {course.description}
                </Typography>
                <Collapse in={expanded === index}>
                  <Box sx={{ pl: 2 }}>
                    {course.highlights && course.highlights.map((item, i) => (
                      <Typography key={i} variant="body2" sx={{ color: '#6c757d', mb: 1, display: 'flex', alignItems: 'center' }}>
                        <Favorite color="primary" sx={{ fontSize: 16, mr: 1 }} /> {item}
                      </Typography>
                    ))}
                    {course.details && course.details.map((detail, i) => (
                      <Typography key={i} variant="body2" sx={{ color: '#6c757d', mb: 1 }}>
                        - {detail}
                      </Typography>
                    ))}
                    {course.options && course.options.map((option, i) => (
                      <Box key={i} sx={{ mb: 2 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#3498db' }}>
                          {option.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#6c757d' }}>
                          Practice: {option.practice}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#6c757d' }}>
                          Theory: {option.theory}
                        </Typography>
                        {option.note && (
                          <Typography variant="body2" sx={{ color: '#6c757d' }}>
                            {option.note}
                          </Typography>
                        )}
                      </Box>
                    ))}
                    {course.note && (
                      <Typography variant="body2" sx={{ color: '#6c757d', mt: 1 }}>
                        {course.note}
                      </Typography>
                    )}
                  </Box>
                </Collapse>
              </CardContent>
              <CardActions sx={{ px: 3, pb: 3 }}>
                <Button size="small" onClick={() => toggleExpand(index)} sx={{ fontWeight: 600, color: '#3498db', '&:hover': { color: '#2980b9', bgcolor: 'transparent' } }}>
                  {expanded === index ? 'Show Less' : 'Explore More'}
                </Button>
              </CardActions>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </GradientContainer>
  );
}
