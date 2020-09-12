import React, { useState } from "react";
import { connect } from "react-redux";


const dialogLookup = {
    // DIALOG IMPORTS HERE

};

const mapStateToProps = (state) => ({
    currentDialog: state.dialog,
});

const DialogManager = ({ currentDialog }) => {
    let renderedDialog;

    if (currentDialog) {
        const { dialogType, dialogProps } = currentDialog;
        const DialogComponent = dialogLookup[dialogType];

        renderedDialog = <DialogComponent {...dialogProps} />;
    }

    return <span>{renderedDialog}</span>;
};

export default connect(mapStateToProps)(DialogManager);