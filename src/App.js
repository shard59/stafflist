import list from "./store/list";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import AddPersonBtn from "./AddPerson/AddPersonBtn";
import StaffList from "./StaffList/StaffList";

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

export default function App(props) {
  const classes = useStyles();

  return (
    <div className="App">
      <Container maxWidth={false} className={classes.container}>
        <Typography variant="h2" component="h2">
          Реестр сотрудников
        </Typography>
        <StaffList />
        <AddPersonBtn />
      </Container>
    </div>
  );
}
