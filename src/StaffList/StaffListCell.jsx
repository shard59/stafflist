import TableCell from "@material-ui/core/TableCell";

import StaffListControls from "./StaffListControls";

export default function StaffListCell(props) {
  const { columnHeader, cellValue } = props;

  function dataHandler(columnHeader, cellValue) {
    if (columnHeader === "isDriver") {
      return cellValue ? "Есть права" : "Права отсутствуют";
    }
    if (columnHeader === "dateOfFiring" && cellValue === "") {
      return "Трудоустроен";
    }
    if (
      columnHeader === "dateOfBirth" ||
      columnHeader === "dateOfHiring" ||
      columnHeader === "dateOfFiring"
    ) {
      return cellValue.split("-").reverse().join(".");
    }
    if (columnHeader === "controls") {
      return <StaffListControls id={props.id} />;
    }
    return cellValue;
  }

  const cellContent = dataHandler(columnHeader, cellValue);

  return <TableCell>{cellContent}</TableCell>;
}
