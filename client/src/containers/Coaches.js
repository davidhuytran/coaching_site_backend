import React, { useEffect, useRef, useState } from 'react';
import CoachCard from '../components/CoachCard';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { cards } from '../components/test_data';
import Divider from '@material-ui/core/Divider';
import Footer from '../components/Footer';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Navbar from '../components/Navbar';
import { coaches } from '../components/test_data';
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderExample from '../components/Slider';
import AllCoach from '../components/AllCoaches';

const random = Math.floor(Math.random() * 5);

const words = [
    'gaming',
    'san francisco',
    'san diego',
    'cat',
    'dog',
    'basketball',
    'city',
    'cars'
]


const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(8, 0, 6),
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
      },
      main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
      },
      dividertext: {
          textAlign: 'center',
          position: 'relative',
          textAlign: 'center',
          top: 10,
          width: 200,
          margin: '0 auto',
          backgroundColor: '#fafafa',
      },
      media: {
        height: 200,
        width: 200,
        margin: 10,
        color: 'gold',
        border: '5px solid gold',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
          theme.palette.type === 'dark' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
      paperGrid: {
          justifyContent: 'center',
      },
      slidermedia: {
        height: 200,
        width: 200,
        margin: 0,
        color: 'gold',
        borderTop: '5px solid gold',
        borderBottom: '5px solid gold',
        borderLeft: '1px solid gold',
        borderRight: '1px solid gold',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
          theme.palette.type === 'dark' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
      },
      paper: {
          height: 200,
          width: 200,
          margin: 10,
          backgroundImage: 'url(https://source.unsplash.com/random/?gaming)',
        //   backgroundImage: `url(/assets/images/${random}.jpg)`,
          backgroundRepeat: 'no-repeat',
          backgroundColor:
            theme.palette.type === 'dark' ? theme.palette.grey[50] : theme.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
      },
      paperRole: {
        padding: 2,
        margin: 0,
        fontFamily: "'Lobster', cursive",
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        top: 0,
        backgroundColor: 'black'
      },
      position: {
        position: 'relative',
        bottom: -125,
    
      },
      paperTitle: {
          margin: 0,
          padding: 8,
          fontFamily: "'Lobster', cursive",
          fontSize: 15,
          textAlign: 'center',
          color: 'gold',
          backgroundColor: 'black'
      },
      icon: {          
          position: 'absolute',
          top: 10,
          right: -180,
        //   bottom: -120,
        //   right: 1,
          height: 20,
          color: 'white',
          background: 'black'
      },
      icon3: {          
        position: 'relative',
        top: -30,
        right: -880,
      //   bottom: -120,
      //   right: 1,
        height: 20,
        color: 'white',
        background: 'black'
    },
      icons: {          
        position: 'absolute',
        top: 10,
        right: -250,
      //   bottom: -120,
      //   right: 1,
        height: 20,
        color: 'white',
        background: 'black'
    }
  }));

const Coaches = () => {
    const classes = useStyles();
    const [slideIndex, setIndex] = useState(0);
    const [updateCount, setCount] = useState(0) 
    const [name, setName] = useState(0);
    const [current, setCurrent] = useState(0) 
    const settings = {
        // dots: true,
        arrows: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        // beforeChange: (current, next) => setCurrent(next),
        afterChange: current => setName(current)
      };
      const center = {
        className: "center",
        arrows: true,
        // dots: true,
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        beforeChange: (current, next) => setCount(next),
        // afterChange: current => setIndex(current)
      };

      useEffect(()=> {
        AOS.init({
          duration : 1000
        })
      },[])
    return(
        <React.Fragment>
        <CssBaseline />
        <Navbar />
        <button>All</button>
        <button>Role</button>
        <button>Team</button>
        <Container maxWidth="md" component="main" className={classes.root}>
            {/* <Grid container spacing={5}>
                {cards.map((card, i) => 
                    <Grid key={i} item xs={12} sm={6}>
                        <CoachCard
                            title={card.title}
                            image={`https://source.unsplash.com/random/?gaming`}
                            date={card.date}
                            description={card.description} 
                        />
                    </Grid>
                )}
            </Grid>
                <hr />
                <span className={classes.dividertext}>OR</span>
                <Divider variant="middle" />
                <hr /> */}

                <AllCoach />
            < Footer />
        </Container>
        </React.Fragment>
    )
}

export default Coaches