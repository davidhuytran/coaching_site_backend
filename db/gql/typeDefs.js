const { gql } = require("apollo-server-express");
require("graphql-type-json");

const typeDefs = gql`
  scalar JSON
  scalar JSONObject

  type Appointment {
    id: ID
    date: String
    time: String
    user: User
    coach: Coach
  }
  type User {
    id: ID
    name: JSON
    email: String
    password: String
    appointments: [Appointment]
    progress: JSON
  }

  type Region {
    id: ID
    name: String
    coaches: [Coach]
  }
  type Team {
    id: ID
    name: String
    coaches: [Coach]
  }
  type Coach {
    id: ID
    role: Role
    name: String
    stream: String
    team: Team
    region: Region
    appointments: [Appointment]
  }
  type Role {
    id: ID
    name: String
    coaches: [Coach]
  }

  type Mutation {
    addAppointment(
      coach_id: String
      user_id: String
      date: String
      time: String
    ): Appointment
    removeAppointment(id: ID): Appointment
    addUser(email: String, password: String): User
    removeUser(email: String): User
    changePassword(email: String, newPassword: String): User
    changeEmail(email: String, newEmail: String): User
    addRoles: Role
    addCoaches: Coach
    addAppointments: Appointment
    addTeam(name: String): Team
    addRegion: Region
    addNewTeam: Team
  }

  type Query {
    appointments: [Appointment]
    appointment(id: ID): Appointment
    users: [User]
    user(email: String): User
    coaches: [Coach]
    coach(id: ID): Coach
    roles: [Role]
    role(name: String): Role
    teams: [Team]
    regions: [Region]
  }
`;

module.exports = typeDefs;
