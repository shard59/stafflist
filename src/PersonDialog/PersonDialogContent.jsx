import DialogContent from "@material-ui/core/DialogContent";

import PersonForm from "./../PersonForm/PersonForm";

export default function PersonDialogContent(props) {
  function getContent(type) {
    if (type === "add" || type === "edit") {
      return <PersonForm />;
    }
    if (type === "delete") {
      return <div></div>;
    }
  }
  const content = getContent(props.type);

  return <DialogContent>{content}</DialogContent>;
}
