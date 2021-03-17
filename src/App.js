import list from "./store/list";
import dialog from "./store/dialog";
import { observer } from "mobx-react-lite";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import StaffList from "./StaffList/StaffList";
import PersonBtn from "./PersonBtn/PersonBtn";
import PersonDialog from "./PersonDialog/PersonDialog";

const localStorageMockup = () => {
  localStorage.setItem("staffListTestWork", JSON.stringify(list.list));
  list.getLocalStorage();
};

if (!localStorage.getItem("staffListTestWork")) {
  localStorageMockup();
} else {
  list.getLocalStorage();
}

const useStyles = makeStyles({
  container: {
    textAlign: "center",
  },
});

export default observer(function App(props) {
  const classes = useStyles();

  return (
    <div className="App">
      <Container maxWidth={false} className={classes.container}>
        <Typography variant="h2" component="h2">
          Реестр сотрудников
        </Typography>
        <StaffList />
        <PersonBtn type="add" />
        <PersonDialog open={dialog.open} />
      </Container>
    </div>
  );
});
