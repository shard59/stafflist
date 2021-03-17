import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";

import StaffListHeader from "./StaffListHeader";
import StaffListRow from "./StaffListRow";

import list from "../store/list";

const useStyles = makeStyles({
  tableContainer: {
    margin: "30px auto",
  },
});

export default function StaffList(props) {
  const classes = useStyles();

  const rows = Object.entries(list.list).map(([id, person]) => {
    return (
      <StaffListRow
        key={id + person.surname}
        staffKeys={list.keys}
        staffList={list.list}
        id={id}
        person={person}
      />
    );
  });

  return (
    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table>
        <StaffListHeader staffKeys={list.keys} />
        <TableBody>{rows}</TableBody>
      </Table>
    </TableContainer>
  );
}
