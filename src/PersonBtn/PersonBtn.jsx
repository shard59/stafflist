import React from "react";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import PersonAddSharpIcon from "@material-ui/icons/PersonAddSharp";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import formState from "../store/formState";
import list from "../store/list";
import dialog from "../store/dialog";

export default function PersonBtn(props) {
  const { type } = props;

  const buttonType = {
    add: {
      title: "Добавить сотрудника",
      icon: <PersonAddSharpIcon color="secondary" fontSize="large" />,
      createDialog() {
        dialog.setOpen();
        dialog.setType("add");
      },
    },
    edit: {
      title: "Отредактировать запись",
      icon: <EditIcon color="primary" />,
      createDialog() {
        dialog.setOpen();
        dialog.setType("edit");
        formState.editState(list.list[props.id]);
        dialog.setPersonId(props.id);
      },
    },
    delete: {
      title: "Удалить запись",
      icon: <DeleteIcon color="secondary" />,
      createDialog() {
        dialog.setOpen();
        dialog.setType("delete");
        dialog.setPersonId(props.id);
      },
    },
  };

  const { title, createDialog, icon } = buttonType[type];

  return (
    <div>
      <Tooltip title={title}>
        <IconButton aria-label={title} onClick={createDialog}>
          {icon}
        </IconButton>
      </Tooltip>
    </div>
  );
}
