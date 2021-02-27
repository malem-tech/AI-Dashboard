import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';


import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import theme from '../../utils/theme';
import {Link} from 'react-router-dom';

export default class Cinvc2 extends React.Component{
    constructor(props){
        super(props);
        console.log('View in constructor is',this.props);
        this.state = {
          data : props.data,
          cinvc2 : [],
          nextProps : "",
        }
    
      }

    componentDidMount(){
        axios.get('http://localhost:8080/1705797/serv')
        .then(res=>{
            const cinvc2 = res.data;
            console.log(cinvc2);
            this.setState({cinvc2});
        });
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps.data);
        this.setState(nextProps);
    }

    render(){
           console.log('Data',this.state.cinvc2);
           const {data} = this.state;
           console.log('Searched data',data);
           
           
           if(data===""){
               var filter = this.state.cinvc2;
           }else{
               var filter = this.state.cinvc2.filter(a=>a.customer_name.startsWith(data));
           }
           console.log(filter);
           return( 
                   <Table aria-label="simple table" 
                   autoid = "search-text-field">
                   <TableHead>
                   <TableRow>
                   <TableCell  style={{color:'white'}} align="left">Customer Name</TableCell>
                   <TableCell  style={{color:'white'}} align="left">Customer Number</TableCell>
                   <TableCell  style={{color:'white'}} align="left">Open Amount</TableCell>
                   </TableRow>
                   </TableHead>
                   <TableBody>{    
                   filter.map(cin=><TableRow key={cin.pk_id}>
                       <TableCell  style={{color:'white'}} align="left"><Link to = {{pathname : '/customer-dashboard' , state : {
                           cinvc2 : cin
                       }}} style={{ textDecoration: 'none',color:'white'}}>{cin.customer_name}</Link></TableCell>
                       <TableCell  style={{color:'white'}} align="left">{cin.customer_number}</TableCell>
                       <TableCell  style={{color:'white'}} align="left">{cin.total_open_amount}</TableCell>
                       </TableRow>
                       )
                   }
                    </TableBody>
                    </Table>

           );
    }

}