import React from 'react';

const blocks = (props)=>{
    const styles={
        bgstyle: {backgroundColor: "rgba(27,31,56,.9)",textAlign:"center",marginTop: "-1rem",},
        title: {fontSize: "1.2rem",color:"rgba(255,255,255,.8)",fontWeight: 'normal',paddingTop:"1.0rem"},
        title2: {fontSize: "1.2rem",color:"white",paddingBottom: "1.2rem", fontWeight: 'bold'},

    }
    return <div style={styles.bgstyle}>
        <h1 style={styles.title}>{props.heading}</h1>
        <h1 style={styles.title2}>{props.value}</h1>
    </div>
}

export default blocks;