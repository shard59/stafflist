import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import {
  amber,
  blue,
  blueGrey,
  brown,
  common,
  cyan,
  deepOrange,
  deepPurple,
  green,
  grey,
  indigo,
  lightBlue,
  lightGreen,
  lime,
  orange,
  pink,
  purple,
  red,
  teal,
  yellow,
} from "@material-ui/core/colors";
import list from "./../store/list";

const colors = [
  amber,
  blue,
  blueGrey,
  brown,
  common,
  cyan,
  deepOrange,
  deepPurple,
  green,
  grey,
  indigo,
  lightBlue,
  lightGreen,
  lime,
  orange,
  pink,
  purple,
  red,
  teal,
  yellow,
];

export default function LetterAvatar(props) {
  const useStyles = makeStyles((theme) => ({
    avatar: {
      backgroundColor: randomColor,
    },
  }));
  const randomColor = colors[Math.floor(colors.length * Math.random())][500];
  const classes = useStyles();
  const avaName = list.getAvaName(props.id);

  return <Avatar className={classes.avatar}>{avaName}</Avatar>;
}
