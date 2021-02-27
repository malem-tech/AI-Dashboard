import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography, Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Cinv3 from "./Dashboard/cinv3"
import CardContent from '@material-ui/core/CardContent';
import { Card } from '@material-ui/core';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: '1vw',
    paddingRight: '1vw',
  },
  hellotext: {
    fontSize: '4vw',
    color: '#FFFFFFA6',
    height: '10vh',
  },
  hellotext1: {
    fontSize: '2.5vw',
    marginTop: '5vh',
    padding: '1vh',
    color: '#FFFFFF',
    backgroundColor: '#5DAAE0',
  },
  hellotext3: {
    fontSize: '1vw',
    marginTop: '5vh',
    padding: '0.5vh',
    color: '#FFFFFF',
    backgroundColor: '#5DAAE0',
  },
  hellotext2: {
    fontSize: '1.2vw',
    marginTop: '5vh',
    padding: '1vh',
    color: '#FFFFFF',
    backgroundColor: '#5DAAE0',
  },
  hellotext4: {
    fontSize: '1.5vw',
    marginTop: '2vh',
    padding: '1vh',
    color: '#FFFFFF',
  },
  searchBtn: {
    marginTop: '2vh',
    minWidth: '5vw',
    minHeight: '2.188vw',
    fontSize: '0.95vw',
    border: 'solid 0.75px #3B617C',
    // marginRight: '0.5rem',
    alignSelf: 'center',
    color: '#5DAAE0',
    '&:hover': {
      backgroundColor: '#5daae0',
      color: 'white',
    },
  },
});

class CustomerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : props.data,
    };
  }

  componentDidMount() {
    const {handle} = this.props.match.params
    const {cinvc2} = this.props.location.state
    console.log('Data', cinvc2);
    this.setState({cinvc2});
  }

  render() {
    const { classes } = this.props;
    let cinvc2 = this.props.location.state;
    console.log('Data', cinvc2);
    //this.state.players.filter(player => player.name.includes(this.state.player))
    //var cinvc4 = JSON.stringify(cinvc2.cinvc2)
    //<h1>{cinvc4}</h1>
    return (
      <div style={{color:'white'}}>
        
        <Card className={classes.root} style={{overflowY:'scroll',overflowX:'scroll',width:'1600px',height:'680px',transform: 'translate(1%, 15%)',background:'#252c48'}}>
        <CardContent>
        <Cinv3 data = {cinvc2}/>
        </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(CustomerDetails);