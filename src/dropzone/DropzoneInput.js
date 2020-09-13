import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import AddIcon from '@material-ui/icons/Add';


import {makeStyles, useTheme} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    dropzone: {
        border: '4px dashed',
        borderColor: theme.palette.primary.main,
        borderRadius: '5px',
        width: '100%',
        height: '100%',
        cursor: 'pointer',
        outline: 'none'
    },
    icon: {
        fontSize: '10em',
        color: 'red',
        [theme.breakpoints.down('sm')]: {
            fontSize: '6em'
        }
    }
}));

const DropzoneInput = ({ setFiles}) => {
    const classes = useStyles()
    const onDrop = useCallback(
        acceptedFiles => {
            setFiles(
                acceptedFiles.map(file =>
                    Object.assign(file, { preview: URL.createObjectURL(file) })
                )
            );
            // showCropper()

        },
        [setFiles]
    );



    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        multiple: false,
        accept: "image/*"
    });

    return (
        <Grid item container alignItems={'center'} justify={'center'}
              {...getRootProps()}
            className={classes.dropzone}
        >
            <input {...getInputProps()}/>
            <AddIcon className={classes.icon} />

        </Grid>

    );
};

export default DropzoneInput;
