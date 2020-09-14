import React, { Fragment } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import {InputAdornment} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  error: {
    color: theme.palette.error.main,
    fontWeight: 300,
  },
}));

const TextInput = ({
  input,
  inputStyle,
  label,
  placeholder,
  type,
  variant,
  required,
    aria,
                     adornment,
  meta: { touched, error },
}) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Fragment>
      <TextField
        {...input}
          id={label}
        required={required}
        label={label}
        placeholder={placeholder}
        type={type}
        variant={variant}
        fullWidth
        className={inputStyle}
        aria-label={aria}
        InputProps={adornment ?{startAdornment: (<InputAdornment>{adornment}</InputAdornment>)} : null}
      />

      {touched && error && (
        <Typography variant={"subtitle1"} className={classes.error}>
          {error}
        </Typography>
      )}
    </Fragment>
  );
};

export default TextInput;
