import { Button } from "@mui/material";
import { useState } from "react";

const Lesson2 = () => {
  const [test, setTest] = useState(false);

  return (
    <>
      <Button
        sx={[
          {
            width: "200px",
            m: 2,
            border: 5,
            borderColor: "secondary.dark",
            zIndex: "appBar",
          },
          test && {
            border: 5,
            borderColor: "secondary.main",
            bgcolor: "secondary.dark",
          },
        ]}
        variant="contained"
        onClick={() => setTest(!test)}
      >
        Button1
      </Button>
      <Button variant="contained">Button2</Button>
    </>
  );
};

export default Lesson2;
