import React from "react";
import EditPersonBtn from "./../EditPerson/EditPersonBtn";
import DeletePersonBtn from "./../DeletePerson/DeletePersonBtn";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  flex: {
    display: "flex",
  },
});

export default function StaffListControls(props) {
  const classes = useStyles();
  return (
    <div className={classes.flex}>
      <EditPersonBtn id={props.id} />
      <DeletePersonBtn id={props.id} />
    </div>
  );
}
