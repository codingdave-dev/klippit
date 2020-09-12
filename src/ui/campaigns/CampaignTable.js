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

const useStyles = makeStyles((theme) => ({}));

const CampaignTable = ({campaigns, toggleCampaign}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              style={{
                width: "500px",
                fontWeight: 600,
                color: theme.palette.primary.main,
              }}
            >
              Project Name
            </TableCell>
            <TableCell
              style={{
                width: "300px",
                fontWeight: 600,
                color: theme.palette.primary.main,
              }}
              align={"center"}
            >
              Start Date
            </TableCell>
            <TableCell
              style={{
                width: "200px",
                fontWeight: 600,
                color: theme.palette.primary.main,
              }}
            >
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {campaigns && campaigns.map((campaign) => (
                <TableRow key={campaign.id}>
                    <TableCell style={{ width: "500px" }}>{campaign.describeAService}</TableCell>
                    <TableCell style={{ width: "300px" }} align={"center"}>
                        {format(campaign.createdAt.toDate(), "L/d/yyyy")}
                    </TableCell>
                    <TableCell style={{ width: "200px", textDecoration: 'underline', color: theme.palette.primary.main, cursor: 'pointer' }} onClick={() => toggleCampaign(campaign.id, campaign.active)}>{campaign.active ? 'End Campaign' : 'Start Campaign'}</TableCell>
                </TableRow>
            ))}

        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CampaignTable;
