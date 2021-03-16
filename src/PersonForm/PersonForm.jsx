import professions from "../store/professions";
import formState from "../store/formState";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Checkbox from "@material-ui/core/Checkbox";
import FormHelperText from "@material-ui/core/FormHelperText";
import { observer } from "mobx-react-lite";
import formValidation from "../store/formValidation";
// import Select from "@material-ui/core/Select";
// import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles({
  form: {
    width: 800,
  },
  inputGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  textInput: {
    width: "47%",
  },
  formControl: {
    width: "47%",
  },
});

export default observer(function PersonForm(props) {
  const classes = useStyles();

  const positions = Object.values(professions.professions).map((option) => (
    <MenuItem key={option} value={option}>
      {option}
    </MenuItem>
  ));

  // const colleagues = props.getColleaguesList().map((name) => (
  //   <option key={name} value={name}>
  //     {name}
  //   </option>
  // ));

  const handleChangeText = formState.handleChangeTextInput.bind(formState);
  const handleChangeCheck = formState.handleChangeCheck.bind(formState);

  const {
    surname: { msg: surnameMsg },
    name: { msg: nameMsg },
    patronymic: { msg: patronymicMsg },
    position: { msg: positionMsg },
    dateOfBirth: { msg: dateOfBirthMsg },
    gender: { msg: genderMsg },
    dateOfHiring: { msg: dateOfHiringMsg },
    dateOfFiring: { msg: dateOfFiringMsg },
  } = formValidation.fieldValidStatus;

  return (
    <form className={classes.form}>
      <div className={classes.inputGroup}>
        <TextField
          className={classes.textInput}
          onChange={handleChangeText}
          InputLabelProps={{ shrink: true }}
          value={formState.state.surname}
          required
          error={Boolean(surnameMsg)}
          helperText={surnameMsg}
          id="surnamePersonForm"
          name="surname"
          label="Фамилия"
          variant="outlined"
        />
        <TextField
          className={classes.textInput}
          onChange={handleChangeText}
          InputLabelProps={{ shrink: true }}
          value={formState.state.name}
          required
          error={Boolean(nameMsg)}
          helperText={nameMsg}
          id="namePersonForm"
          name="name"
          label="Имя"
          variant="outlined"
        />
      </div>
      <div className={classes.inputGroup}>
        <TextField
          className={classes.textInput}
          onChange={handleChangeText}
          InputLabelProps={{ shrink: true }}
          value={formState.state.patronymic}
          error={Boolean(patronymicMsg)}
          helperText={patronymicMsg}
          id="patronymicPersonForm"
          name="patronymic"
          label="Отчество"
          variant="outlined"
        />
        <TextField
          className={classes.textInput}
          required
          select
          value={formState.state.position}
          error={Boolean(positionMsg)}
          helperText={positionMsg}
          InputLabelProps={{ shrink: true }}
          onChange={handleChangeText}
          id="positionPersonForm"
          name="position"
          label="Должность"
          variant="outlined"
        >
          {positions}
        </TextField>
      </div>
      <div className={classes.inputGroup}>
        <TextField
          className={classes.textInput}
          value={formState.state.dateOfBirth}
          error={Boolean(dateOfBirthMsg)}
          helperText={dateOfBirthMsg}
          InputLabelProps={{ shrink: true }}
          onChange={handleChangeText}
          required
          id="dateOfBirthPersonForm"
          name="dateOfBirth"
          label="Дата рождения"
          type="date"
          variant="outlined"
        />
        <FormControl className={classes.formControl} error={Boolean(genderMsg)}>
          <FormLabel component="legend" required>
            Пол
          </FormLabel>
          <RadioGroup
            row
            id="genderPersonForm"
            onChange={handleChangeText}
            value={formState.state.gender}
            aria-label="gender"
            name="gender"
            defaultValue="top"
          >
            <FormControlLabel
              value="Женский"
              control={<Radio id="femalePersonForm" color="primary" />}
              label="Женский"
              labelPlacement="start"
            />
            <FormControlLabel
              value="Мужской"
              control={<Radio id="malePersonForm" color="primary" />}
              label="Мужской"
              labelPlacement="start"
            />
          </RadioGroup>
          <FormHelperText>{genderMsg}</FormHelperText>
        </FormControl>
      </div>
      <div className={classes.inputGroup}>
        <TextField
          className={classes.textInput}
          value={formState.state.dateOfHiring}
          error={Boolean(dateOfHiringMsg)}
          helperText={dateOfHiringMsg}
          InputLabelProps={{ shrink: true }}
          onChange={handleChangeText}
          required
          id="dateOfHiringPersonForm"
          name="dateOfHiring"
          label="Дата приема на работу"
          type="date"
          variant="outlined"
        />
        <TextField
          className={classes.textInput}
          value={formState.state.dateOfFiring}
          error={Boolean(dateOfFiringMsg)}
          helperText={dateOfFiringMsg}
          InputLabelProps={{ shrink: true }}
          onChange={handleChangeText}
          id="dateOfFiringPersonForm"
          name="dateOfFiring"
          label="Дата увольнения"
          type="date"
          variant="outlined"
        />
      </div>
      <div>
        <FormControl>
          <FormControlLabel
            control={
              <Checkbox
                checked={formState.state.isDriver}
                onChange={handleChangeCheck}
                id="isDriverPersonForm"
                name="isDriver"
              />
            }
            label="Наличие водительских прав"
          />
        </FormControl>
        {/* <FormControl >
          <InputLabel shrink htmlFor="select-multiple-native">
            Должность
          </InputLabel>
          <Select
            className={classes.textInput}
            required
            native
            multiple
            inputProps={{
              id: 'select-multiple-native',
            }}
            label=""
            variant="outlined"
          >
            {colleagues}
          </Select>
        </FormControl> */}
      </div>
    </form>
  );
});
