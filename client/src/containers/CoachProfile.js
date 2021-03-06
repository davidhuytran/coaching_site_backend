import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { gql, useQuery } from '@apollo/client';
import Navbar from '../components/Navbar';
import SliderExample from '../components/Slider';
import Book_Button from '../components/Book_Button';
import Footer from '../components/Footer'

const GET_GREETING = gql`
  query GetCoach($id: ID!) {
    coach(id: $id) {
      name
      role {
        name
        coaches {
          id
          name
          team {
            name
          }
        }
      }
      region {
        name
        coaches {
          id
          name
          team {
            name
          }
        }
      }
      team {
        name
        coaches {
          id
          name
          team {
            name
          }
        }
      }
    }
  }
`;

function CoachProfile(props) {

    const { id } = props.match.params;
    const { loading, error, data } = useQuery(GET_GREETING, {
        variables: { id: id },
      });
      if (loading) return <div>Loading ...</div>;
      const { coach } = data
      console.log(data)
    return (
      <React.Fragment>
        <Navbar />
        <CssBaseline />
        <Container maxWidth="lg">
        <Typography component="div">
        <h1>View Console for data of {coach.name}</h1>
        <h2>Region: {coach.region.name}</h2>
        <img src={`/assets/images/teams/${coach.team.name}/${coach.name}.png`} />
        <h2>Name: {coach.name}</h2>
        <h2>Team: {coach.team.name}</h2>
        <h2>Role: {coach.role.name}</h2>
        <Book_Button 
          coachId={coach.id}
          coachName={coach.name}
        />
        <h1>Other players from this region</h1>
        <SliderExample coach_id={id} region={coach.region} />
        <h1>Other players with the same Role</h1>
        <SliderExample coach_id={id} region={coach.role} />
        <h1>Team members</h1>
        <SliderExample coach_id={id} region={coach.team} />
        </Typography>
        </Container>
        <Footer />
      </React.Fragment>
    )
}


export default CoachProfile