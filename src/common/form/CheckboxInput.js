import React, {Fragment} from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
    // ADD STYLES HERE
}));

const CheckboxInput = ({input, label, value, checkboxClass, checkboxLabelClass, meta:{touched, error}}) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Fragment>
            <FormControlLabel
                control={
                    <Checkbox
                        // checked={input.value ? true : false}
                        checked={value}
                        onChange={input.onChange}
                        color={'primary'}
                        size={'small'}
                        className={checkboxClass}
                    />
                }
            />
        </Fragment>
    );
};

export default CheckboxInput;