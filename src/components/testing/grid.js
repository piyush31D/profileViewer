import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid(props) {
  const classes = useStyles();
  const [formvalue, setFormvalue] = useState({
    iname: "",
    iemail: "",
  });
  const gridname = props.user.map((det) => {
    return (
      <div key={det.id}>
        <Grid container>
          <Grid item xs={4}>
            <Paper className={classes.paper}>{det.name}</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>{det.email}</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <button
                name="removeuser"
                title="removeuser"
                onClick={() => props.deleteuser(det.id)}
              >
                Remove User
              </button>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  });
  const onChangeHandler = (event) => {
    console.log("Change--", event.target.name, event.target.value);
    setFormvalue({ ...formvalue, [event.target.name]: [event.target.value] });
    console.log(formvalue);
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Basic Details</Paper>
        </Grid>
      </Grid>
      <Grid>{gridname}</Grid>
      <div>
        <form onSubmit={() => props.addUser(formvalue)}>
          <span>
            <input
              type="text"
              name="iname"
              placeholder="Name"
              onChange={onChangeHandler}
            />
          </span>
          <span>
            <input
              type="text"
              name="iemail"
              placeholder="Email"
              onChange={onChangeHandler}
            />
          </span>
        </form>
        <span>
          {/* <button name="AddUser" title="Add User" type="submit">
            Add User
          </button> */}
          <input
            type="submit"
            value="Submit"
            onClick={() => props.addUser(formvalue)}
          />
        </span>
      </div>
    </div>
  );
}
