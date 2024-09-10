import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '@material-ui/core';
import Footer from '../../components/Navbar/Footer.js';
import pic1 from '../../images/ggcnew.jpg';
import pic2 from '../../images/exercise1.jpg';
import pic4 from '../../images/nutrition1.jpg';
import pic5 from '../../images/hydration.jpg';
import pic6 from '../../images/climate.jpg';
import useStyles from './styles.js';

const Landing = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
            crossorigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
          />
          <link
            href="https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="style.css" />
          <title>WALKERS</title>
        </head>
        <body>
        
        {/* Showcase Section */}
        <section className={classes.section}>
          <div className="container">
            <div className="d-lg-flex align-items-center justify-content-between">
              <div className="p-3">
                <h1 className={classes.sectionTitle}>Fitness/Walking Trails App</h1>
                <p className="lead my-4">
                  The Walking Trails App is a mobile application designed to enhance the walking experience on Georgia Gwinnett College (GGC) trails through interactive and educational content focused on fitness, health, and wellness. 
                  This project is a collaborative effort between ITEC students, who are responsible for app development, and EXSC students, who create the content.
                </p>
                <Button component={Link} to="/auth" variant="contained" className={classes.button}>Sign In</Button>
              </div>
              <img
                className={`${classes.imgFluid} ${classes.imgHiddenOnSm}`}
                src={pic1}
                alt="GGC Trails"
              />
            </div>
          </div>
          <hr />
        </section>

        {/* Workout Section */}
        <section id="workout" className={classes.section}>
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md d-sm-none d-lg-block">
                <img src={pic2} className="img-fluid" alt="Workout" />
              </div>
              <div className="col-md p-5">
                <div className="card-body">
                  <h2 className={classes.sectionSubtitle}>Personalized Workouts/Workout Spaces</h2>
                  <p className="lead">
                    Personalized workouts and tailored workout spaces represent a revolution in the fitness world, a shift towards a more individualized approach to health and wellness.
                  </p>
                  <a href="#" className="btn btn-primary mt-3">
                    <i className="bi bi-chevron-right"></i> Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hydration Section */}
        <section id="hydration" className={classes.section}>
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md d-sm-none d-lg-block">
                <img src={pic5} className="img-fluid" alt="Hydration" />
              </div>
              <div className="col-md p-5">
                <div className="card-body">
                  <h2 className={classes.sectionGreen}>Hydration</h2>
                  <p className="lead">
                    Hydration is crucial for maintaining the body's balance, especially during physical activities...
                  </p>
                  <a href="#" className="btn btn-primary mt-3">
                    <i className="bi bi-chevron-right"></i> Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nutrition Section */}
        <section id="nutrition" className={classes.section}>
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md d-sm-none d-lg-block">
                <img src={pic4} className="img-fluid" alt="Nutrition" />
              </div>
              <div className="col-md p-5">
                <div className="card-body">
                  <h2 className={classes.sectionTitle}>Nutrition</h2>
                  <p className="lead">
                    Nutrition is the cornerstone of a healthy lifestyle, providing the essential nutrients needed to...
                  </p>
                  <a href="#" className="btn btn-primary mt-3">
                    <i className="bi bi-chevron-right"></i> Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Climate Section */}
        <section id="climate" className={classes.section}>
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md d-sm-none d-lg-block">
                <img src={pic6} className="img-fluid" alt="Climate" />
              </div>
              <div className="col-md p-5">
                <div className="card-body">
                  <h2 className={classes.sectionSubtitle}>Climate and Environment</h2>
                  <p className="lead">
                    Climate and environmental conditions play a significant role in outdoor physical activities. Understanding how weather affects your performance, from heat and humidity to cold and wind, allows you to adjust your workouts and take precautions for safe and effective exercise.
                  </p>
                  <a href="#" className="btn btn-primary mt-3">
                    <i className="bi bi-chevron-right"></i> Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

{/* Newsletter Section */}
<section className={classes.section}>
          <div className="container">
            <div className="d-md-flex justify-content-between align-items-center">
              <h3 className="mb-3 mb-md-0">Sign Up For Our Newsletter</h3>
              <div className={classes.newsInput}>
                <input type="text" className={`form-control ${classes.input}`} placeholder="Enter Email" />
                <button className="btn btn-primary btn-lg" type="button">Submit</button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer className={classes.footer} />

        
        </body>
      </html>
    </Container>
  );
};

export default Landing;