import { TableRow, TableCell, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  tableRow: {
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}));

const TableItem = ({ item, image, capability, remark }) => {
  const classes = useStyles();

  return (
    <TableRow className={classes.tableRow}>
      <TableCell>
        <Typography>{item}</Typography>
      </TableCell>
      {/* <TableCell>
        {image ? <img src={image} alt={item} /> : <Typography> - </Typography>}
      </TableCell> */}
      <TableCell>
        <Typography>{capability}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{remark}</Typography>
      </TableCell>
    </TableRow>
  );
};

export default TableItem;
