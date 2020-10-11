import React from "react";
import { Link } from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';
import { Top, Jungle, Mid, Adc, Support} from './roles';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
    link: {
      textDecoration: 'none',
    },
    media: {
        height: 200,
        width: 200,
        margin: '20px 10px 20px 10px',
        color: 'gold',
        border: '2px solid gold',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
          theme.palette.type === 'dark' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: '0 24px 18px -18px black',
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
        textDecoration: 'none',
      },
      position: {
        position: 'relative',
        bottom: -125,
      },
      role: {
        position: 'relative',
        left: 0,
        height: 28,
        width: 28,
      },
      icon: {          
        height: 150,
        width: 150,
        margin: '0 auto',
        position: 'absolute',
        top: 20,
        left: 0,
        right: 0,
        zIndex: '-99999',
        opacity: '0.5',
      },
      titleName: {
        margin: 5
      },
      player: {
        top: 20,
        height: '150px',
        zIndex: '-1',
        position: 'absolute',
        width: '100%'
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
    })
);

export default function Cards({ coach_Id, coach_name, team_name, role_name }) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Link key={coach_Id} className={classes.link} to={`/coachid=${coach_Id}`}>
            <CardMedia
            data-aos='flip-right'
        
            className={classes.media}
            variant="outlined"
            // image={`https://source.unsplash.com/random/?${word}`}
            // image={`/assets/images/teams/${team_name}/${coach_name}.png`}
            
            >
                <h1 className={classes.paperRole}>
                {role_name === 'top' ? <Top className={classes.role}/> : null}
                {role_name === 'jungle' ? <Jungle className={classes.role}/> : null}
                {role_name === 'mid' ? <Mid className={classes.role}/> : null}
                {role_name === 'adc' ? <Adc className={classes.role}/> : null}
                {role_name === 'support' ? <Support className={classes.role}/> : null}
                    <h6 className={classes.titleName}>{role_name.toUpperCase()}</h6>
                </h1>
          
                <span className={classes.position}>
                    <h1 className={classes.paperTitle}>{coach_name}</h1>
                </span>
                <img src={`/assets/images/teams/${team_name}/${coach_name}.png`} className={classes.player}/>
                <img src={`/assets/images/teams/${team_name}/icon.png`} className={classes.icon}/>
           
            </CardMedia>
            </Link>
        </React.Fragment>
    )
}