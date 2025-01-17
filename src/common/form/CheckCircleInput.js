import React, {Fragment} from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    // ADD STYLES HERE
}));

const CheckCircleInput = ({input, label, value, checkboxClass, checkboxLabelClass, meta:{touched, error}}) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Fragment>
            <FormControlLabel
                className={checkboxLabelClass}
                control={
                    <Checkbox
                        checked={input.value}
                        onChange={input.onChange}
                        color={'primary'}
                        size={'small'}
                        className={checkboxClass}
                        icon={<CheckCircleOutlinedIcon/>}
                        checkedIcon={<CheckCircleIcon/>}
                    />
                }
                label={label}
            />

        </Fragment>
    );
};

export default CheckCircleInput;