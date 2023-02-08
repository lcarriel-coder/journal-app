import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth";



export const LoginPage = () => {

  const { status } = useSelector(state => state.auth);

  const distpatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: "Luis Carriel",
    password: "123456",
  });

  const isAuthenticating = useMemo(() => status === 'checking',[status])

  const onSubmit = (event) => {
    event.preventDefault();
    distpatch( checkingAuthentication() );
  };


  const onGoogleSignIn = (event) => {
    event.preventDefault();
    distpatch( startGoogleSignIn() );    
    
    
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={ onSubmit }>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
              name="password"
              onChange={onInputChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" fullWidth type="submit" disabled={ isAuthenticating }>
              {" "}
              Login
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button onClick={onGoogleSignIn} variant="contained" fullWidth disabled={ isAuthenticating }>
              <Google /> <Typography sx={{ ml: 1 }}> Google</Typography>
            </Button>
          </Grid>
        </Grid>

        <Grid container direction="row" justifyContent="end" mt={1}>
          <Link component={RouterLink} color="inhereit" to="/auth/register">
            Crear una cuenta
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  );
};
