import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import format from "date-fns/format";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import TableContainer from "@material-ui/core/TableContainer";

import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

const useStyles = makeStyles((theme) => ({
  nameHeaderCell: {
    width: "50%",
    fontWeight: 600,
    color: theme.palette.primary.main,
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7em",
      textAlign: "center",
      width: "33%",
    },
  },
  dateHeaderCell: {
    width: "25%",
    fontWeight: 600,
    color: theme.palette.primary.main,
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7em",
      textAlign: "center",
      width: "33%",
    },
  },
  actionHeaderCell: {
    width: "25%",
    fontWeight: 600,
    color: theme.palette.primary.main,
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7em",
      textAlign: "center",
      width: "33%",
    },
  },
  nameRowCell: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7em",
      textAlign: "center",
    },
  },
  dateRowCell: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7em",
      textAlign: "center",
    },
  },
  actionRowCell: {
    textDecoration: "underline",
    color: theme.palette.primary.main,
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7em",
      textAlign: "center",
    },
  },
}));

const CampaignTable = ({ campaigns, toggleCampaign }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.nameHeaderCell}>
              Project Name
            </TableCell>
            <TableCell className={classes.dateHeaderCell} align={"center"}>
              Start Date
            </TableCell>
            <TableCell className={classes.actionHeaderCell}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {campaigns &&
            campaigns.map((campaign) => (
              <TableRow key={campaign.id}>
                <TableCell className={classes.nameRowCell}>
                  {campaign.describeAService}
                </TableCell>
                <TableCell className={classes.dateRowCell} align={"center"}>
                  {format(campaign.createdAt.toDate(), "L/d/yyyy")}
                </TableCell>
                <TableCell
                  className={classes.actionRowCell}
                  onClick={() => toggleCampaign(campaign.id, campaign.active)}
                >
                  {campaign.active ? "End Campaign" : "Start Campaign"}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CampaignTable;
