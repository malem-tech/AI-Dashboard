import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Top from "../components/Top"
import TopRight from "../components/TopRight"
import Paper from '@material-ui/core/Paper';

const header = () => {
    const styles={
        appbar: {marginTop:"-1rem",marginBottom:"-1rem"},
        bgstyle: {elevation: "0",background: "rgba(27,31,56,1)",},
        title: {fontSize: "1.5rem",margin:"0.5rem",color: "white"},
        top: {textAlign: "center",marginLeft:"25%"},
        topright: {textAlign: "center",marginLeft:"auto", borderRadius: "20px", padding:"4px"}

    }
   return (
    <div>
    
      <AppBar position="static" style={styles.bgstyle} >
      <Paper elevation={0}  style={styles.appbar}>
      <Toolbar style={styles.bgstyle}  >
        <IconButton edge="start" color="inherit" aria-label="menu">
         
        {/*itthe khud ka icon lagana hai */}
        </IconButton>
        <Typography variant="h6" color="inherit">
          <h1 style={styles.title}>ABC PRODUCTS</h1>
        </Typography>
        <div style={styles.top}>
        <Top />

        </div>
        <div style={styles.topright}>
        <TopRight />

        </div>
      </Toolbar>
      </Paper>
    </AppBar>
    
        
      
   
  </div>
   );
}
export default header;