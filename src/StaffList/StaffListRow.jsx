import TableRow from "@material-ui/core/TableRow";
import StaffListCell from "./StaffListCell";

export default function StaffListRow(props) {
  const row = Object.keys(props.staffKeys).map((key) => (
    <StaffListCell
      key={props.id + props.person[key] + Math.random()}
      staffList={props.staffList}
      columnHeader={key}
      cellValue={props.person[key]}
      id={props.id}
    />
  ));

  return <TableRow>{row}</TableRow>;
}
