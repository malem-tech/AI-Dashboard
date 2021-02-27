import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

import '../style.css';
class Row extends Component {
    render() {
        return (
            <tr>
                <td>
                <Checkbox name="checkedI" className="checkBox" />
                </td>
                <td>Uber</td>
                <td>32334323</td>
                <td>32334323</td>
                <td>Partially Paid</td>
                <td>Jun 27, 2020</td>
            </tr>
        );
    }
}
export default Row