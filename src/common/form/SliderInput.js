import React, { Fragment } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

// import Slider from 'rc-slider'

import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  error: {
    color: theme.palette.error.main,
    fontWeight: 300,
  },
}));

const marks = [
  {
    value: 0,
    label: '0%'
  },
  {
    value: 100,
    label: '100%'
  }
    ]
;

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
      <Tooltip open={open} enterTouchDelay={0} placement="bottom" title={value}>
        {children}
      </Tooltip>
  );
}



const SliderInput = ({
  input,
  meta: { touched, error },
}) => {
  const classes = useStyles();
  const theme = useTheme();

  const { Handle } = Slider;

  return (
    <Fragment>
      <Slider {...input} onChange={(event,value) => input.onChange(value)} marks={marks} ValueLabelComponent={ValueLabelComponent} aria-label="custom thumb label"/>
      {touched && error && (
          <Typography variant={"subtitle1"} className={classes.error}>
            {error}
          </Typography>
      )}
    </Fragment>
  );
};

export default SliderInput;
