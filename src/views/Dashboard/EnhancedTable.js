import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { lighten } from '@material-ui/core/styles/colorManipulator';


const rows = [
  { id: 'cid', numeric: false, disablePadding: true, label: 'Company ID' },
  { id: 'aid', numeric: true, disablePadding: false, label: 'Account Header ID' },
  { id: 'docno', numeric: true, disablePadding: false, label: 'Document Number' },
  { id: 'bcode', numeric: true, disablePadding: false, label: 'Business Code' },
  { id: 'dtype', numeric: true, disablePadding: false, label: 'Document Type' },
  { id: 'cnum', numeric: true, disablePadding: false, label: 'Customer Number' },
  { id: 'cmapid', numeric: true, disablePadding: false, label: 'Customer Map ID' },
  { id: 'cname', numeric: true, disablePadding: false, label: 'Name of Customer' },
  { id: 'docCreate', numeric: true, disablePadding: false, label: 'Document Create Date' },
  { id: 'baseDate', numeric: true, disablePadding: false, label: 'Baseline Date' },
  { id: 'invDate', numeric: true, disablePadding: false, label: 'Invoice Date' },
  { id: 'invId', numeric: true, disablePadding: false, label: 'Invoice ID' },
  { id: 'totalAmt', numeric: true, disablePadding: false, label: 'Total Open Amount' },
  { id: 'payTerm', numeric: true, disablePadding: false, label: 'Customer payment Terms' },
  { id: 'clearDate', numeric: true, disablePadding: false, label: 'Clear Date' },
  { id: 'isOpen', numeric: true, disablePadding: false, label: 'Is Open Invoice' },
  { id: 'shipDate', numeric: true, disablePadding: false, label: 'Shipping Date' },
  { id: 'payAmt', numeric: true, disablePadding: false, label: 'Payment Amount' },
  { id: 'dayPast', numeric: true, disablePadding: false, label: 'Days past Due Date' },
  { id: 'docId', numeric: true, disablePadding: false, label: 'Doc Id' },
  { id: 'docCreate2', numeric: true, disablePadding: false, label: 'Document Create Date' },
  { id: 'actAmt', numeric: true, disablePadding: false, label: 'Actual Amount Outstanding' },
  { id: 'age', numeric: true, disablePadding: false, label: 'Age of Invoice' },
  { id: 'curr', numeric: true, disablePadding: false, label: 'Invoice Currency' },
  { id: 'predType', numeric: true, disablePadding: false, label: 'Predicted Payment Type' },
  { id: 'predAmt', numeric: true, disablePadding: false, label: 'Predicted Amount' },
];

class EnhancedTableHead extends React.Component {
  

  render() {
    const { onSelectAllClick, numSelected, rowCount } = this.props;

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox" style={{color:'white'}}>
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
              style={{color:'white'}}
            />
          </TableCell>
          {rows.map(
            row => (
              <TableCell
                key={row.id}
                align={row.numeric ? 'right' : 'left'}
                padding={row.disablePadding ? 'none' : 'default'}
                style={{color:'white'}}
              >
                
                    {row.label}
                  
              </TableCell>
            ),
            this,
          )}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const styles = theme => ({
  root: {
    width: '100%',
     //marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
    height:'14rem',
    backgroundColor: 'white',
  },
});

class EnhancedTable extends React.Component {
  constructor(props){
    super(props);
    console.log('Enhanced props',props);
    this.state = {
      selected: [],
      data : props.data,
      page: 0,
      rowsPerPage: 5,
    }

  }



  handleSelectAllClick = event => {
    if (event.target.checked) {
      this.setState(state => ({ selected: state.data.map(n => n.id) }));
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes } = this.props;
    const { data, selected, rowsPerPage, page } = this.state;
    console.log('Enhanced data',data);

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper} style={{height:'38vh', backgroundColor: "#1b1f38"}} >
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              
              onSelectAllClick={this.handleSelectAllClick}
              rowCount={data.length}
/>
            <TableBody style={{height:'35vh'}}>
              
              {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  const isSelected = this.isSelected(n.pk_id);
                  return (
                    <TableRow
                      hover
                      onClick={event => this.handleClick(event, n.pk_id)}
                      role="checkbox"
                      aria-checked={isSelected}
                      tabIndex={-1}
                      key={n.id}
                      selected={isSelected}
                    >
                      <TableCell padding="checkbox" style={{color:'white'}}>
                        <Checkbox checked={isSelected} style={{color:'white'}} />
                      </TableCell>
                      <TableCell align="right" style={{color:'white'}}>{n.company_id}</TableCell>
                      <TableCell align="right" style={{color:'white'}}>{n.acct_doc_header_id}</TableCell>
                      <TableCell align = 'right' style={{color:'white'}}>{n.document_number}</TableCell>
                      <TableCell align='left' style={{color:'white'}}>{n.business_code}</TableCell>
                      <TableCell align = 'left' style={{color:'white'}}>{n.doctype}</TableCell>
                      <TableCell align='right' style={{color:'white'}}>{n.customer_number}</TableCell>
                      <TableCell align = 'right' style={{color:'white'}}>{n.fk_customer_map_id}</TableCell>
                      <TableCell align = 'left' style={{color:'white'}}>{n.customer_name}</TableCell>
                      <TableCell align = 'center' style={{color:'white'}}>{n.document_create_date}</TableCell>
                      <TableCell align = 'center' style={{color:'white'}}>{n.baseline_create_date}</TableCell>
                      <TableCell align = 'center' style={{color:'white'}}>{n.invoice_date_norm}</TableCell>
                      <TableCell align = 'right' style={{color:'white'}}>{n.invoice_id}</TableCell>
                      <TableCell align = 'right' style={{color:'white'}}>{n.total_open_amount}</TableCell>
                      <TableCell align = 'right' style={{color:'white'}}>{n.cust_payment_terms}</TableCell>
                      <TableCell align = 'center' style={{color:'white'}}>{n.clearing_date}</TableCell>
                      <TableCell align='right' style={{color:'white'}}>{n.isOpen}</TableCell>
                      <TableCell align = 'center' style={{color:'white'}}>{n.ship_date}</TableCell>
                      <TableCell align = 'right' style={{color:'white'}}>{n.paid_amount}</TableCell>
                      <TableCell align = 'right' style={{color:'white'}}>{n.dayspast_due}</TableCell>
                      <TableCell align = 'right' style={{color:'white'}}>{n.document_id}</TableCell>
                      <TableCell align = 'center' style={{color:'white'}}>{n.document_creation_date}</TableCell>
                      <TableCell align = 'right' style={{color:'white'}}>{n.actual_open_amount}</TableCell>
                      <TableCell align = 'right' style={{color:'white'}}>{n.invoice_age}</TableCell>
                      <TableCell align = 'right' style={{color:'white'}}>{n.invoice_amount_doc_currency}</TableCell>
                      <TableCell align = 'left' style={{color:'white'}}>Predicting</TableCell>   
                      <TableCell align = 'right' style={{color:'white'}}>NIL</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          background-color='#252C48'
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
          style={{background:'#252C48',color:'white'}}
        />
      </Paper>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);