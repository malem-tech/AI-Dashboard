import React, { Component } from 'react';
import '../style.css';
import Row from "./Row"
import Grid from '@material-ui/core/Grid';

class TableCard extends Component {
    render(props) {
        return (
            <Grid container direction="row" justify="center" alignItems="stretch">
                <Grid xs={12} sm={12} className="tableCard">
                    <p class="Cardhead">Invoices</p>
                    <Grid container direction="row" justify="space-evenly" alignItems="center">
                        <table className="invoiceTable">
                        <tbody>
                            <tr>
                                <td></td>
                                <td>Package ID</td>
                                <td>Account Doc Header ID</td>
                                <td>Company ID</td>
                                <td>Predicted Payment Type</td>
                                <td>Document Number</td>
                                <td>Business Code</td>
                                <td>Create Year</td>
                                <td>Doc Line Number</td>
                                <td>Doctype</td>
                                <td>Customer Number</td>
                                <td>Customer Map ID</td>
                                <td>Customer Name</td>
                                <td>Division</td>
                                <td>Document Create Date</td>
                                <td>Posting Date</td>
                                <td>Posting ID</td>
                                <td>Due Date</td>
                                <td>Order Date</td>
                                <td>Invoice ID</td>
                                <td>Baseline Create Date</td>
                                <td>Invoice Date Norm</td>
                                <td>Total Open Amount</td>
                                <td>Customer Payment Terms</td>
                                <td>Business Area</td>
                                <td>Ship Date</td>
                                <td>Ship To</td>
                                <td>Clearing Date</td>
                                <td>Reason Code</td>
                                <td>isOpen</td>
                                <td>Discount Due Date Norm</td>
                                <td>Debit Card Indicator</td>
                                <td>Payment Method</td>
                                <td>Doc Creation Date</td>
                                <td>Document ID</td>
                                <td>Actual Open Amount</td>
                                <td>Paid Amount</td>
                                <td>Days Past Due</td>
                                <td>Invoice Age</td>
                                <td>Disputed Amount</td>

                            </tr>
                           
                            </tbody>
                        </table>
                    </Grid>
                </Grid>
            </Grid>
          );
    }
}
export default TableCard