import {
  Button,
  CssBaseline,
  Paper,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { red } from "@mui/material/colors";

const theme = createTheme({
  spacing: 10,
  palette: {
    mode: "dark",
    customColor: {
      main: red[500],
      superDark: red[900],
      superLight: red[200],
    },
  },
  typography: {
    myVariant: {
      fontSize: "2rem",
    },
  },
});
const Lesson3 = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Typography variant="h3">Theming Example</Typography>
        <Typography variant="myVariant" color="customColor.superLight" p={2}>
          Hello CodeSandBox
        </Typography>
        <h3>Start editing to see more magic happen!</h3>
        <Button variant="contained" color="primary">
          Hi
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default Lesson3;
