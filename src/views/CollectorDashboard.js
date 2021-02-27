import React, { Component } from 'react';
import theme, { pxToVh } from '../utils/theme';
import { withStyles } from '@material-ui/core/styles';
import { callDummyAPI } from '../services/services';
import Paper from "@material-ui/core/Paper";
import HeaderCard from "./Dashboard/HeaderCard"
import Grid from '@material-ui/core/Grid';
import ProfessorBtn from "./Dashboard/ProfessorBtn"
import TopNav from "./Dashboard/TopNav"

import Cinvc2 from "./Dashboard/cinvc2"
import  MyTable from "./Dashboard/MyTable"
import Axios from "axios";
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import Footer from '../components/Footer';
import { Typography, Card } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { InputBase, TextField, OutlinedInput, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Cinv3 from './Dashboard/cinv3';
import Bar from "./Dashboard/Barcharts"
//import Footer from "./Dashboard/footer"

const styles = (theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
      height: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: '#6D7183',
      outline: '1px solid slategrey',
    },
  },
  mainBackground: {
    background: theme.palette.primary.main,
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },

  notchedOutline: { borderWidth: '1px', borderColor: '#5DAAE0 !important' },
  searchBtn: {
    marginTop: '8vh',
    minWidth: '5vw',
    minHeight: '2.188vw',
    fontSize: '0.95vw',
    border: 'solid 0.75px #3B617C',
    alignSelf: 'center',
    color: '#5DAAE0',
    '&:hover': {
      backgroundColor: '#5daae0',
      color: 'white',
    },
  },
  searchBtnDisabled: {
    minWidth: '5vw',
    minHeight: '2.188vw',
    fontSize: '0.95vw',
    border: 'solid 0.75px #3B617C',
    // marginRight: '0.5rem',
    alignSelf: 'center',
    color: 'white !important',
    background: '#FFFFFFa5',
    '&:hover': {
      cursor: 'default',
      backgroundColor: '#FFFFFFa5',
    },
  },
});







class CollectorDashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      response: 0,
      redirect: false,
      loading: false,
      search: "",
      data : null,
    };
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  componentDidMount(){
    Axios.get('http://localhost:8080/1705797/serv')
    .then(res=>{
        const data = res.data;
        console.log('Collector data',data);
        this.setState({data});
    });
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleGetStarted = (e) => {
    callDummyAPI(this.state.name).then((response) => {
      // });
      this.setState({
        response: response.data.name,
        redirect: true,
        loading: false,
      });
    });
  };

  onChange = (e) =>{
    this.setState({ search: e.target.value });
    console.log('Most searched',this.state.search);
  }
  

 render() {
    
    console.log('theme', theme);
    const { classes, user } = this.props;
    return (
      <div className={classes.mainBackground}>
       <div className="dashboardBody">
        <Grid container spacing={3} alignItems="center">        
            <Grid item xs={12} sm={12}> <TopNav></TopNav> </Grid>
            <Grid item xs={12} sm={3} 
            autoid = "total-customers-text-collector"> <HeaderCard str1="Total Customers" str2="2091" /> </Grid>
            <Grid item xs={12} sm={3} 
            autoid = "total-open-ar-text-collector"> <HeaderCard str1="Total Open AR" str2="$43M" /> </Grid>
            <Grid item xs={12} sm={3} 
            autoid = "average-days-delay-text-collector"> <HeaderCard str1="Average Days Delay" str2="3 Days" /> </Grid>
            <Grid item xs={12} sm={3} 
            autoid = "total-open-invoice-text-collector"> <HeaderCard str1="Total Open Invoices" str2="27698" /> </Grid>

            <Grid item xs={12} sm={4}>
                   <Bar/>
            
            <Grid item xs={12} sm={12}> 
                <input type="text" placeholder="Search Customer" id="ip2" onChange={this.onChange} style={{color:'white',transform: 'translate(12%, 20%)',borderRadius: '25px',border: '2px solid #5dbcd2',padding: '15px 30px', width: '310px',height: '0px',background:'#252c48'}}/>
                <Button variant="contained" href="#contained-buttons" style={{transform:'translate(8%,-55%)',borderRadius:'100%',width:'10px',height:'50px',background:'#5dbcd2'}} autoid ="search-icon">
                  <SearchIcon style={{color:'white',transform:'translate(0%,0%)'}}/>
                </Button>
                <div style={{overflowY:'scroll',height:'180px',width:'420px',transform: 'translate(0%, -18%)',color:'white'}}>
                    {console.log('Dashboard',this.state.search)}
                    {<Cinvc2 data={this.state.search}/>}
                </div>
            </Grid>
            </Grid>

            <Grid item xs={12} sm={8}>
              <MyTable></MyTable>
            </Grid>
        <Footer/>
        </Grid>
      </div>

      </div>
    );
  }
}


export default withStyles(styles, { withTheme: true })(CollectorDashboard);