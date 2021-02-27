import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Grid from '@material-ui/core/Grid';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import {Link} from 'react-router-dom';
import EnhancedTable from '../Dashboard/EnhancedTable';

export default class Cinv3 extends React.Component{
    constructor(props){
        super(props);
        console.log('View in constructor is',this.props);
        this.state = {
          data : props.data,
          cinv3 : [],
        }
    
      }

    componentDidMount(){
        axios.get('http://localhost:8080/1705797/serv')
        .then(res=>{
            const cinv3 = res.data;
            //console.log(cinv3);
            //console.log(data);
            this.setState({cinv3});
        });
    }
    render(){
           const { data } = this.state;
           console.log('View in render is',data);
           //this.state.cinv3.filter(person => person.customer_name.includes(data));
           //var cinvc4 = JSON.stringify(data['cinvc2']['customer_name']);
           var filtered = this.state.cinv3.filter(a=>a.customer_name==data['cinvc2']['customer_name']);
           var flt = filtered;
           console.log('Filtered data',flt);
           return( 
            <Grid item xs={12} sm={9}>

           <div>

                   { 
   
                   flt.slice(0,1).map(cin=><div>
                       {filtered && <EnhancedTable data = {filtered}/>}
                   </div>
                    )
                    }
                   </div>
                   </Grid>

           );
    }

}