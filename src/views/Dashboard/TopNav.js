import React, { Component } from 'react';
import ProfessorBtn from './ProfessorBtn';
import Grid from '@material-ui/core/Grid';
import '../style.css';
import Top from "../../components/Top"
import Typography from '@material-ui/core/Typography';


const styles={
    appbar: {marginTop:"-1rem",marginBottom:"-1rem"},
    bgstyle: {elevation: "0",background: "rgba(27,31,56,1)",},
    title: {fontSize: "1.5rem",margin:"0.5rem",color: "white"},
    top: {textAlign: "center",marginLeft:"25%"},
    topright: {textAlign: "center",marginLeft:"auto", borderRadius: "20px", padding:"4px"}

}

class TopNav extends Component {
    render() {
        return (

            <Grid container spacing={3} >
                <Grid item xs={5} sm={4}><Typography variant="h6" color="inherit">
          <h1 style={styles.title}>ABC PRODUCTS</h1>
        </Typography></Grid>
                <Grid item xs={2} sm={4}><Top/></Grid>
                <Grid item xs={5} sm={4} container justify="flex-end" > <ProfessorBtn/> </Grid>
            </Grid>
        );
    }
}
export default TopNav