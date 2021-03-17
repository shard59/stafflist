import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import PersonBtn from "./../PersonBtn/PersonBtn";

const useStyles = makeStyles({
  flex: {
    display: "flex",
  },
});

export default function StaffListControls(props) {
  const classes = useStyles();
  return (
    <div className={classes.flex}>
      <PersonBtn type="edit" id={props.id} />
      <PersonBtn type="delete" id={props.id} />
    </div>
  );
}
