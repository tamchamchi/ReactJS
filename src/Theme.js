import { createTheme } from "@mui/material";
import { blue, orange } from "@mui/material/colors";

const theme = createTheme({
     palette: {
          primary: {
               main: blue[500]
          },
          secondary:{
               main: orange[500],
               dark: orange[900]
          },
          myColor: {
               main: orange[200],
               superDark: orange[900],
               superLight: orange[200]
          }
     },

})

export default theme;
