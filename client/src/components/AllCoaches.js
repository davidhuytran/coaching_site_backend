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

import Cards from './Cards';





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
  paperGrid: {
      justifyContent: 'center',
  },
}));


export default function Hello() {
  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_GREETING);
  const teams = ["Team Liquid", "Gen.G", "Rogue", "MAD Lions", "JD Gaming", "Top Esports", "Fnatic"]
  const colors = ["#F3F9A7", "#91EAE4", "#7F7FD5", "#3fada8", "#91EAE4", "#86A8E7", "#FF8C00"]
  const random = Math.floor(Math.random() * 7);
  const number = Math.floor(Math.random() * 7);
  
  if (loading) 
        return (               
          <SquareLoader
            css={
                css`
                height: 350px;
                width: 350px;
                display: block;
                margin: 0 auto;
                padding: 10px;
                border-radius: 50%;
                background: url('/assets/images/teams/${teams[random]}/icon.png') !important;
                background-color: ${colors[number]} !important;
                background-repeat: no-repeat !important;
                background-position: center !important;
                background-size: 250px 250px !important;
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
                  <Cards 
                    coach_Id={coach.id}
                    coach_name={coach.name}
                    team_name={coach.team.name}
                    role_name={coach.role.name}
                  />
                )}
                </Grid>
  </React.Fragment>)
}