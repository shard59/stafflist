import { makeStyles } from "@material-ui/core/styles";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const useStyles = makeStyles({
  tableHeader: {
    backgroundColor: "black",
  },
  tableHeaderCell: {
    color: "white",
    fontWeight: "bold",
  },
});

export default function StaffListHeader(props) {
  const classes = useStyles();

  const headers = Object.values(props.staffKeys).map((header) => (
    <TableCell className={classes.tableHeaderCell} key={header + Math.random()}>
      {header}
    </TableCell>
  ));

  return (
    <TableHead>
      <TableRow className={classes.tableHeader}>{headers}</TableRow>
    </TableHead>
  );
}
