{/* <br />
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
  <SliderExample /> */}