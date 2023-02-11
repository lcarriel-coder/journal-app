import { useMemo, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth";

const formData = {
  email: "lcarriel17@hotmail.com",
  password: "123456",
  displayName: "Luis Carriel",
};

const formValidations = {
  email: [(value) => value.includes("@"), "El correo debe de tener una @"],
  password: [
    (value) => value.length >= 6,
    "El password debe de tener mas de 6 letras",
  ],
  displayName: [(value) => value.length >= 1, "El nombre es obligatorio"],
};

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector((state) => state.auth);
  const isCheckingAuthentication = useMemo(
    () => status === "checking",
    [status]
  );

  const {
    displayName,
    email,
    password,
    onInputChange,
    formState,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;

    dispatch(startCreatingUserWithEmailPassword(formState));
  };

  return (
    <AuthLayout title="Crear cuenta">
      <h1>FormValid {isFormValid ? "Valido" : "Incorrecto"}</h1>
      <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
        <Grid container spacing={2}>
        
          <Grid item xs={12}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Luis Carriel"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>
        </Grid>
       

        <Grid container spacing={2} mt={1}>


        <Grid item xs={12} display={!!errorMessage ? '' :'none'}>
          <Alert severity="error">{ errorMessage } </Alert>
        </Grid>


          <Grid item xs={12}>
            <Button
              variant="contained"
              fullWidth
              type="submit"
              disabled={isCheckingAuthentication}
            >
              Crear cuenta
            </Button>
          </Grid>
        </Grid>

        <Grid container direction="row" justifyContent="end" mt={1}>
          <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta? </Typography>
          <Link component={RouterLink} color="inhereit" to="/auth/login">
            Ingresar
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  );
};
