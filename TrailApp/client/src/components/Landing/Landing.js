import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '@material-ui/core';
import useStyles from './styles.js';
import Footer from '../../components/Navbar/Footer.js';
import pic1 from '../../images/ggcnew.jpg';
import pic2 from '../../images/exercise1.jpg';
import pic3 from '../../images/handshake1.jpg';
import pic4 from '../../images/nutrition1.jpg';  // Add image for nutrition
import pic5 from '../../images/hydration.jpg';  // Add image for hydration
import pic6 from '../../images/climate.jpg';    // Add image for climate

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
                <section class="bg-dark text-light p-5 pb-5 p-lg-0 pt-lg-5 text-center text-sm-start">
                    <div class="container">
                        <div class="d-lg-flex align-items-center justify-content-between">
                            <div class="p-3">
                                <h1>Fitness/Walking Trails App</h1>
                                <p class="lead my-4">
                                    The Walking Trails App is a mobile application designed to enhance the walking experience on Georgia Gwinnett College (GGC) trails through interactive and educational content focused on fitness, health, and wellness. 
                                    This project is a collaborative effort between ITEC students, who are responsible for app development, and EXSC students, who create the content.
                                </p>
                                <Button component={Link} to="/auth" variant="contained" color="primary" className={classes.submit}>Sign In</Button>
                            </div>
                            <img
                                class="img-fluid w-50 p-5 d-sm-none d-lg-block"
                                src={pic1}
                                alt="GGC Trails"
                            />
                        </div>
                    </div>
                    <hr />
                </section>

                {/* Workout Section */}
                <section id="workout" class="p-5 bg-dark text-light">
                    <div class="container">
                        <div class="text-white row align-items-center justify-content-between">
                            <div class="col-md d-sm-none d-lg-block">
                                <img src={pic2} class="img-fluid" alt="Workout" />
                            </div>
                            <div class="col-md p-5">
                                <h2>Personalized Workouts/Workout spaces</h2>
                                <p class="lead">
                                    Personalized workouts and tailored workout spaces represent a revolution in the fitness world, a shift towards a more individualized approach to health and wellness.
                                </p>
                                <a href="#" class="btn btn-primary mt-3">
                                    <i class="bi bi-chevron-right"></i> Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Nutrition Section */}
                <section id="hydration" class="p-5 bg-dark text-light">
    <div class="container">
        <div class="row align-items-center justify-content-between">
            <div class="col-md d-sm-none d-lg-block"> {/* Image on large screens */}
                <img src={pic5} class="img-fluid" alt="Hydration" />
            </div>
            <div class="col-md p-5"> {/* Text section */}
                <h2>Hydration</h2>
                <p class="lead">
                    Hydration is crucial for maintaining the body's balance, especially during physical activities...
                </p>
                <a href="#" class="btn btn-primary mt-3">
                    <i class="bi bi-chevron-right"></i> Read More
                </a>
            </div>
        </div>
    </div>
</section>
                {/* Hydration Section */}
                <section id="nutrition" class="p-5 bg-dark text-light">
    <div class="container">
        <div class="row align-items-center justify-content-between">
            <div class="col-md d-sm-none d-lg-block"> {/* Image on large screens */}
                <img src={pic4} class="img-fluid" alt="Nutrition" />
            </div>
            <div class="col-md p-5"> {/* Text section */}
                <h2>Nutrition</h2>
                <p class="lead">
                    Nutrition is the cornerstone of a healthy lifestyle, providing the essential nutrients needed to...
                </p>
                <a href="#" class="btn btn-primary mt-3">
                    <i class="bi bi-chevron-right"></i> Read More
                </a>
            </div>
        </div>
    </div>
</section>

                {/* Climate Section */}
                <section id="climate" class="p-5 bg-dark text-light">
                    <div class="container">
                        <div class="row align-items-center justify-content-between">
                            <div class="col-md d-sm-none d-lg-block">
                                <img src={pic6} class="img-fluid" alt="Climate" />
                            </div>
                            <div class="col-md p-5">
                                <h2>Climate and Environment</h2>
                                <p class="lead">
                                    Climate and environmental conditions play a significant role in outdoor physical activities. Understanding how weather affects your performance, from heat and humidity to cold and wind, allows you to adjust your workouts and take precautions for safe and effective exercise.
                                </p>
                                <a href="#" class="btn btn-primary mt-3">
                                    <i class="bi bi-chevron-right"></i> Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <Footer />

                {/* Newsletter Section */}
                <section class="bg-dark text-light p-5">
                    <div class="container">
                        <div class="d-md-flex justify-content-between align-items-center">
                            <h3 class="mb-3 mb-md-0">Sign Up For Our Newsletter</h3>
                            <div class="input-group news-input">
                                <input type="text" class="form-control" placeholder="Enter Email" />
                                <button class="btn btn-primary btn-lg" type="button">Submit</button>
                            </div>
                        </div>
                    </div>
                </section>
            </body>
        </html>
    </Container>
    );
};

export default Landing;