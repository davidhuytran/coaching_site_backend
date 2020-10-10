const { User, Appointment, Coach, Role, Team, Region } = require("../models");

const resolvers = {
  Query: {
    appointments: () => Appointment.find(),
    appointment: (parent, args) => Appointment.findById(args.id),
    users: () => User.find(),
    user: (parent, args) => User.findOne({ email: args.email }),
    coaches: () => Coach.find(),
    coach: (parent, args) => Coach.findById(args.id),
    roles: () => Role.find(),
    role: (parent, args) => Role.find({ name: args.name }),
    teams: () => Team.find(),
    regions: () => Region.find(),
  },
  User: {
    appointments: (parent, args) => {
      return Appointment.find({ user_id: parent.id });
    },
  },
  Appointment: {
    user: (parent, args) => {
      return User.findById(parent.user_id);
    },
    coach: (parent, args) => {
      return Coach.findById(parent.coach_id);
    },
  },
  Coach: {
    appointments: (parent, args) => {
      return Appointment.find({ coach_id: parent.id });
    },
    role: (parent, args) => {
      return Role.findById(parent.roleID);
    },
    region: (parent, args) => Region.findById(parent.regionID),
    team: (parent, args) => Team.findById(parent.teamID),
  },
  Role: {
    coaches: (parent, args) => {
      return Coach.find({ roleID: parent.id });
    },
  },
  Team: {
    coaches: (parent, args) => {
      return Coach.find({ teamID: parent.id });
    },
  },
  Region: {
    coaches: (parent, args) => {
      return Coach.find({ regionID: parent.id });
    },
  },
  Mutation: {
    addAppointment: async (parent, args) => {
      const newAppointment = await new Appointment({
        email: args.email,
        date: args.date,
        time: args.time,
      }).save();
      return newAppointment;
    },
    removeAppointment: async (parent, args) => {
      const removedAppointment = await Appointment.findByIdAndDelete(args.id);
      return removedAppointment;
    },
    addUser: async (parent, args) => {
      for (let i = 0; i < 50; i++) {
        const newUser = await new User({
          email: `${i}@email.com`,
        });
        newUser.password = newUser.hashPassword(`password${i}`);
        newUser.save();
      }
    },
    removeUser: async (parent, args) => {
      const removedUser = await User.findOneAndDelete({ email: args.email });
      return removedUser;
    },
    changePassword: async (parent, args) => {
      const changeUser = await User.findOne({ email: args.email });
      console.log(changeUser);
      changeUser.password = args.newPassword;
      changeUser.save();
      return changeUser;
    },
    changeEmail: async (parent, args) => {
      const changeUser = await User.findOne({ email: args.email });
      changeUser.email = args.newEmail;
      changeUser.save();
      return changeUser;
    },
    addRoles: async (parent, args) => {
      for (let i = 0; i < roles.length; i++) {
        const newRole = await new Role({ name: roles[i] }).save();
      }
    },
    addCoaches: async (parent, args) => {
      for (let i = 0; i < coaches.length; i++) {
        //Response from roles database, if the name matches the role's name from database, comes back as data object with {id, name}.
        const response = await Role.findOne({
          name: coaches[i].role.toUpperCase(),
        });
        const newCoach = await new Coach({
          roleID: response.id,
          name: coaches[i].name,
          stream: coaches[i].stream,
        }).save();
      }
    },
    addAppointments: async (parent, args) => {
      for (let i = 0; i < 30; i++) {
        new Appointment({
          coach_id: coachID[Math.floor(Math.random() * 7)],
          user_id: userID[Math.floor(Math.random() * 9)].id,
        }).save();
      }
    },
    addTeam: async (_, { name }) => {
      const teamFound = await Team.findOne({ name });
      if (!teamFound) {
        const newTeam = await new Team({
          name,
        }).save();
        return newTeam;
      }
      return teamFound;
    },
    addNewTeam: async () => {
      for (let i = 0; i < dataLog.length; i++) {
        let dataTeam = dataLog[i].team;
        let dataRegion = dataLog[i].region;
        let allPlayers = dataLog[i].players;
        for (let j = 0; j < allPlayers.length; j++) {
          let player = allPlayers[j];
          const role = await Role.findOne({ name: player.role });
          const region = await Region.findOne({ name: dataRegion });
          const team = await Team.findOne({ name: dataTeam });
          new Coach({
            name: player.name,
            real_name: player.real_name,
            roleID: role.id,
            teamID: team.id,
            regionID: region.id,
          }).save();
        }
      }
    },
  },
};

module.exports = resolvers;
