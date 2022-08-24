import { makeStyles } from "@mui/styles";
import { theme } from "./theme";

export const appGradient = `linear-gradient(92.54deg, ${theme.palette.primary.main} -14.34%, ${theme.palette.primary.accent} 98.84%)`;

export default makeStyles({
  bgPrimary: {
    backgroundColor: theme.palette.primary.main,
  },
  bgGradient: {
    background: appGradient,
  },
  paperShadow: {
    boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.06)",
  },
  textGradient: {
    background: appGradient,
    ["-webkit-background-clip"]: "text",
    ["-webkit-text-fill-color"]: "transparent",
  },
  stepsTimeline: {
    pl: 0,
    "& .MuiTimelineItem-root:before": {
      flex: 0,
      padding: 0,
    },
    "& .MuiTimelineItem-root .MuiTimelineDot-root": {
      padding: 0,
      margin: 0,
      border: "none",
      fontSize: "20px",
      fontWeight: "600",
      boxShadow: "none",
      color: theme.palette.primary["500"],
      backgroundColor: "transparent",
    },
    "& .MuiTimelineItem-root .MuiTimelineConnector-root": {
      width: "1px",
      backgroundColor: theme.palette.primary["100"],
    },
    "& .MuiTimelineItem-root .MuiTimelineContent-root": {
      paddingTop: 0,
      paddingLeft: "2rem",
      maxWidth: "500px",
    },
  },
});
