import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PacmanLoader from 'react-spinners/PacmanLoader';
import Navbar from '../components/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Typed from 'typed.js';
import { Top, Jungle, Mid, Adc, Support } from '../components/roles';

const useStyles = makeStyles((theme) => ({
    heroContent: {
        minHeight: 500,
        maxWidth: "sm",
        // backgroundColor: 'black',
        // padding: theme.spacing(8, 0, 6),
    },
    element: {
        height: '200px',
        color: 'white',
        // margin: '0 auto 10px',
        textAlign: 'center',
        margin: 'auto',
        padding: 20,
        fontFamily: 'Oswald',
        fontSize: 60,
        backgroundImage: 'url(https://source.unsplash.com/random/?gaming)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    css: {
        height: '200px',
        width: '200px'
    }
}));
export default function Home() {
    const [words] = useState([
        'Want to learn Adc?',
        'Want to learn Jungle?',
        'Want to learn Support?'
      ])
    const classes = useStyles();
    useEffect(() => {
        const options = {
            strings: words,
            typeSpeed: 100,
            backSpeed: 100,
            smartBackspace: false,
            loop: true,
            cursorChar: "|",
          };
        const typed = new Typed('#instructions', options)
        return () => {
            typed.destroy();
        };
    },[words]);
    
    return (
        <React.Fragment>
            <CssBaseline />
            <Navbar />
            <div component="main" className={classes.heroContent}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" id="instructions" className={classes.element}gutterBottom>
                   {/* <span className="element"></span> */}
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary">
                    Interested
                <Container maxWidth="sm" component="main">
                <PacmanLoader
                    size={100}
                    color='#6b5ce7'
                    css={classes.css}
                />
           
                </Container>
                </Typography>



  
            </div>
            {/* <hr /> */}
        </React.Fragment>
    )
}