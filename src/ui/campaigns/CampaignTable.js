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
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useRouter } from "next/router";
import {deleteCampaign} from "../../store/actions/campaignActions/campaignActions";
import {connect} from "react-redux";

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

const actions = {
  deleteCampaign
}

const CampaignTable = ({ campaigns, deleteCampaign }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();

  const handleDeleteCampaign = (id) => {
    deleteCampaign(id)
  }

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
                <TableCell className={classes.actionRowCell}>
                  <Grid item container>
                    <Grid item>
                      <Typography
                        variant={"body2"}
                        onClick={() =>
                          router.push({
                            pathname: "/auth/editCampaign",
                            query: { id: campaign.id },
                          })
                        }
                      >
                        Edit
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      style={{ paddingLeft: "0.5em", paddingRight: "0.5em" }}
                    >
                      |
                    </Grid>
                    <Grid item>
                      <Typography variant={"body2"} onClick={() => handleDeleteCampaign(campaign.id)}>Delete</Typography>
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default connect(null, actions)(CampaignTable);
