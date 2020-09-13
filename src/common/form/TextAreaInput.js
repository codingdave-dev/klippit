import React, { Fragment } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    error: {
        color: theme.palette.error.main,
        fontWeight: 300,
    },
}));

const TextAreaInput = ({
                       input,
    rows,
                       inputStyle,
                       label,
                       placeholder,
                       type,
                       variant,
                       required,
    aria,
                       meta: { touched, error },
                   }) => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <Fragment>
            <TextField
                {...input}
                id={label}
                aria-label={aria}
                required={required}
                label={label}
                placeholder={placeholder}
                type={type}
                variant={variant}
                multiline
                rows={rows}
                fullWidth
                className={inputStyle}
                inputProps={{maxLength: 115}}

            />


        </Fragment>
    );
};

export default TextAreaInput;
