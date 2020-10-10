{
  /* <br />
<span className={classes.dividertext}><b>{coaches[name].name.toUpperCase()}</b></span>
<Divider variant="middle" />
<br />
<Slider {...settings}>
{coaches.map((coach, i) => 
    <CardMedia
    key={i}
    className={classes.slidermedia}
    variant="outlined"
    image={`/assets/images/coaches/${coach.name}.png`}
    
    >
        <h1 className={classes.paperRole}>{coach.role.toUpperCase()}</h1>
        <span className={classes.position}>
            <h1 className={classes.paperTitle}>{coach.name.toUpperCase()}</h1>
            <a href={coach.stream} target="_blank">
                <img src="/assets/images/twitch_icon.png" className={classes.icon3}/>
            </a>
        </span>
    </CardMedia>
)}
</Slider>
  <SliderExample />
  <SliderExample /> */
}

// const [value, setValue] = useState({});
// const [team, setTeam] = useState("TSM");

// const handleClick = async (event) => {
//   event.preventDefault();
//   console.log("clicked");
//   const response = await axios.post("/auth/login", {
//     email: value.email,
//     password: value.password,
//   });
//   console.log(response);
// };

// const onChange = (event) => {
//   event.preventDefault();
//   console.log("changed");
//   setValue({
//     ...value,
//     [event.target.name]: event.target.value,
//   });
// };
//  <form>
//   <input onChange={onChange} name="email" value={value.email || ""} />
//   <input
//     onChange={onChange}
//     name="password"
//     value={value.password || ""}
//   />
// </form>
// <button onClick={handleClick}>Click me</button>
// <img src={`/assets/images/teams/${team}/icon.png`} />

// const API_KEY = "RGAPI-bfade6ad-ea80-488f-b3fe-37c32a935ee8";
// const summoner_name = "Faded David";
// const hey = axios.get(
//   `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner_name}?api_key=${API_KEY}`
// );
// console.log(hey.data);
// console.log("Error?");
// const getSummoner = await axios.get(`${API_KEY}/`)

//CAN'T USE THE ABOVE BECAUSE RIOT GAMES DOESN'T ALLOW API GRAB FROM FRONTEND
