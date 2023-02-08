
import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";


const formData={
  email: "lcarriel17@hotmail.com",
  password: "123456",
  displayName:'Luis Carriel'
}


export const RegisterPage = () => {


  const { displayName,email, password, onInputChange,formState } = useForm(formData);

  const onSubmit = ( event ) =>{
    event.preventDefault();
    console.log(formState);
  }


  return (
    <AuthLayout title="Crear cuenta">
      <form onSubmit={ onSubmit }>
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
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={12} >
            <Button variant="contained" fullWidth type="submit" >
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
