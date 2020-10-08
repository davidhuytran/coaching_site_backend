import React from 'react';
import { Link } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import SquareLoader from 'react-spinners/SquareLoader';
import { Top, Jungle, Mid, Adc, Support} from './roles';
import { css , keyframes } from "styled-components";







const GET_GREETING = gql`
{
    coaches {
      id
      name
      role {
        name
      }
      team {
        name
      }
      region {
        name
      }
    }
  }
`;

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(8, 0, 6),
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        minHeight: '90vh',
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
        border: '2px solid gold',
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
        backgroundColor: 'black',
        textTransform: 'capitalize'
      },
      position: {
        position: 'relative',
        bottom: -125,
    
      },
      paperTitle: {
          margin: 0,
          padding: 9,
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
    },
    css: {
        margin: '0 auto'
    },
  }));


export default function Hello() {
  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_GREETING);
  const teams = ["Team Liquid", "INTZ", "Rogue", "MAD Lions", "JD Gaming"]
  const colors = ["gold", "red", "green", "blue", "orange"]
  const random = Math.floor(Math.random() * 5);
  
  if (loading) 
        return (               
          <SquareLoader
            css={
                css`
                height: 350px;
                width: 350px;
                display: block;
                margin: 0 auto;
                border-radius: 50%;
                background: url('/assets/images/teams/${teams[random]}/icon.png') !important;
                background-color: ${colors[random]} !important;
                background-repeat: no-repeat !important;
                background-position: center !important;
                background-size: 300px 300px !important;
                `
              }
            // size={100}
          />
        )
      

  const { coaches } = data
  return (
<React.Fragment>
<CssBaseline />

<Grid container className={classes.paperGrid}>
                {coaches.map((coach, i) => 
                <Link key={coach.id} to={`/coachid=${coach.id}`}>
                    <CardMedia
                    data-aos='flip-right'
              
                    className={classes.media}
                    variant="outlined"
                    // image={`https://source.unsplash.com/random/?${word}`}
                    image={`/assets/images/teams/${coach.team.name}/${coach.name}.png`}
                    
                    >
                        <h1 className={classes.paperRole}>
                        {coach.role.name === 'top' ? <Top className={classes.role}/> : null}
                        {coach.role.name === 'jungle' ? <Jungle className={classes.role}/> : null}
                        {coach.role.name === 'mid' ? <Mid className={classes.role}/> : null}
                        {coach.role.name === 'adc' ? <Adc className={classes.role}/> : null}
                        {coach.role.name === 'support' ? <Support className={classes.role}/> : null}
                            {coach.role.name}
                        </h1>
                        {/* <h1 className={classes.paperTitle}>{word}</h1> */}
                        <span className={classes.position}>
                            <h1 className={classes.paperTitle}>{coach.name}</h1>
                            {/* <a href={coach.stream} target="_blank"> */}
                                <img src={`/assets/images/teams/${coach.team.name}/icon.png`} className={classes.icon}/>
                            {/* </a>   */}
                        </span>
                    </CardMedia>
                    </Link>
                )}
                </Grid>
  </React.Fragment>)
}