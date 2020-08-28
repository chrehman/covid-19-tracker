import React from 'react';


import {Card,Typography,CardContent,Grid,makeStyles} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
//import classes from './Cards.css';
import image from '../../image/image.png';
const useStyles = makeStyles((theme) => ({
  container:{
    margin: '50px 0'
},
card:{
    margin:'0 2% !important',
},

infected:{
    borderBottom: '10px solid rgba(0,0,255,0.5)',
},


deaths:{
    borderBottom: '10px solid rgba(255,0,0,0.5)',
},


recovered:{
    borderBottom: '10px solid rgba(0,255,0,0.5)',
},
}));

const Cards =({data: {confirmed,recovered,deaths,lastUpdate}}) =>{
    const classes = useStyles();
    //console.log(confirmed);
    if(!confirmed){
      return 'Loading.....';
    }
    return(
      <div className={classes.container}>
          <img src={image} alt="COVID-19"/>
          <Grid container spacing={3} justify="center">
            <Grid item component={Card} xs={12} md={3} className={cx(classes.card,classes.infected)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography variant="h5">
                    <CountUp start={0} end={confirmed.value} duration={3} separator=',' />
                      </Typography>
                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of active cases of COVID-19</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} className={cx(classes.card,classes.recovered)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography variant="h5">
                    <CountUp start={0} end={recovered.value} duration={3} separator=',' />
                      </Typography>
                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of recovered  from COVID-19</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} className={cx(classes.card,classes.deaths)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                    <Typography variant="h5">
                    <CountUp start={0} end={deaths.value} duration={3} separator=',' />
                      </Typography>
                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
                </CardContent>
            </Grid>
          </Grid>
      </div>  
    );
}

export default Cards;