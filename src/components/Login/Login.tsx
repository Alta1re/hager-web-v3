import React, { useState } from "react";

// material-ui components
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// CSS for this component
import classes from "./Login.module.css";

// i18n
import { useTranslation } from "utils/i18n";

// typescript interface for props
// onSubmit is required function, and will be called with two props:
// "email" and "password"
// termsLink is optional prop
// if termsLink is provided, the link will be shown at the bottom of the
// card content (above the button)

interface LoginProps {
  onSubmit: (data: LoginData) => void;
}

type LoginData = {
  email: string;
  password: string;
};

export default function SignUp(props: LoginProps) {
  // object-destructuring for props
  const { onSubmit } = props;

  // i18n
  const { t } = useTranslation();

  // states
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // on submit props.onSubmit is called with email and password
  // should be then handled in the upper component
  const onSubmitHandler = () => {
    onSubmit({ email: email, password: password });
  };

  return (
    <Card className={classes.Card}>
      <CardHeader
        title="Login"
        titleTypographyProps={{ textAlign: "center" }}
      />

      <CardContent>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
            display: "flex",
            flexDirection: "column",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            className={classes.Input}
            id="email-input"
            label={t("EMAIL")}
            variant="outlined"
            InputProps={{ type: "email", autoComplete: "email" }}
            color={email.length > 4 ? "success" : "error"}
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          <TextField
            className={classes.Input}
            id="password-input"
            label={t("PASSWORD")}
            variant="outlined"
            InputProps={{ type: "password", autoComplete: "new-password" }}
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            color={password.length > 7 ? "success" : "error"}
          />
        </Box>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          sx={{ marginTop: "0px" }}
          color="secondary"
          onClick={onSubmitHandler}
        >
          {t("SUBMIT")}
        </Button>
      </CardActions>
    </Card>
  );
}
