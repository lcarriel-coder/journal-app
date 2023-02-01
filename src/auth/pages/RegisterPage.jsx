
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear cuenta">
      <form>
        <Grid container spacing={2}>
        <Grid item xs={12}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Luis Carriel"
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={12} >
            <Button variant="contained" fullWidth>
              {" "}
              Crear cuenta
            </Button>
          </Grid>
         
        </Grid>

        <Grid container direction="row" justifyContent="end" mt={1}>
          <Typography sx={{mr:1}}>¿Ya tienes cuenta?  </Typography>
          <Link component={RouterLink} color="inhereit" to="/auth/login">
            Ingresar
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  );
};
