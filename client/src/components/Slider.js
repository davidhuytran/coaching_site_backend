import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Slider from "react-slick";
import CardMedia from '@material-ui/core/CardMedia';
import { coaches } from './test_data';
import _ from 'lodash';

const random = Math.floor(Math.random() * 5);

const useStyles = makeStyles((theme) => ({
      slider: {
        width:   '80vw',
        margin: '0 auto'
      },
      main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
      },
      dividertext: {
          textAlign: 'center',
          position: 'absolute',
          left: 0,
          right: 0,
          textAlign: 'center',
          width: 200,
          margin: '-8px auto',
          backgroundColor:  '#666'
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
        zIndex: -2,
      },
      coaches: {
        position: 'relative',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      height: 190,
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
      // width: 'auto',
      // padding: 10,
      margin: '0 auto',
      zIndex: 9999,
      display: 'block',
      backgroundRepeat: 'no-repeat',

    },
      logo_background: {
          position: 'relative',
          left: 0,
          right: 0,
          top: -200,
          bottom: 0,
        height: 230,
        [theme.breakpoints.down('md')]:{
          width: '100%',
        },
        padding: 10,
        margin: '0 auto',
        zIndex: 999,
        display: 'block',
        opacity: '0.5',
      },
      paper: {
          height: 200,
          width: 200,
          margin: 10,
          backgroundImage: 'url(https://source.unsplash.com/random/?gaming)',
        //   backgroundImage: `url(/assets/images/${random}.jpg)`,
          backgroundRepeat: 'no-repeat',

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

export default function SliderExample(props) {
  console.log(props)
    const [updateCount, setCount] = useState(0) 
    const classes = useStyles();
    // const center = {
    //     className: 'center',
    //     arrows: true,
    //     centerMode: true,
    //     infinite: true,
    //     // centerPadding: "60px",
    //     slidesToShow: 3,
    //     speed: 500,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     beforeChange: (current, next) => setCount(next),
    //     // afterChange: current => setIndex(current)
    //   };
    const center = {
       className: 'center',
        arrows: true,
        centerMode: true,
        infinite: true,
        // centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        beforeChange: (current, next) => setCount(next),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

      const list = _.filter(props.region.coaches, (o) => { return o.id !== props.coach_id });
    return(
        <div className={classes.slider}>
        <br />
        <span className={classes.dividertext}><b>{list[updateCount].name}</b></span>
        <Divider variant="middle" />
        <br />
        <Slider {...center}>
        {list.map((coach, i) => 
    
            <CardMedia
            key={i}
            className={classes.slidermedia}
            variant="outlined"
            // image={`https://source.unsplash.com/random/?${word}`}
            // image={`/assets/images/coaches/${coach.name}.png`}
            
            >
            <Link key={coach.id} to={`/coachid=${coach.id}`}>
            <img src={`/assets/images/teams/${coach.team.name}/${coach.name}.png`} className={classes.coaches}/>
            <img src={`/assets/images/teams/${coach.team.name}/icon.png`} className={classes.logo_background} />
            </Link>
            </CardMedia>
           
        )}
        </Slider>
        </div>
    )
}