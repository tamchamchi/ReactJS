import { Button, Container, Typography, styled } from "@mui/material";

const Lesson1 = () => {
  const MyCustomButton = styled(Button)({
    padding: 5,
    borderRadius: 100,
  });
  return (
    <Container component="main">
      <Typography variant="subtitle1" align="justify">
        My name is Tam
      </Typography>
      <MyCustomButton variant="contained"> MyColor </MyCustomButton>
    </Container>
  );
};

export default Lesson1;
