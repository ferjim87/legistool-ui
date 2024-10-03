
import { Button, } from '@mui/material';
import React from 'react';

import { useNavigate } from 'react-router-dom';
import { AccountCircle } from '@mui/icons-material';
import { AppBar, CssBaseline, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Container, Typography } from '@mui/material';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AuditResult from './AuditResult';
import Categorias from './Categorias';
import Checklist from './Checklist';
import Contactos from './Contactos';
import Country from './Country';
import DistribucionCorreo from './DistribucionCorreo';
import Documentos from './Documentos';
import Organizacion from './Organizacion';
import Permisos from './Permisos';
import PermisosSucursal from './PermisosSucursal';
import RegulacionesSucursal from './RegulacionesSucursal';
import Regulation from './Regulation';
import Requerimientos from './Requerimientos';
import SubCategorias from './SubCategorias';
import Sucursales from './Sucursales';
import TipoDocumento from './TipoDocumento';
import VistaRegulaciones from './Vista de Regulaciones';
import VistaChecklist from './Vista de Checklist';
import Login from './LoginPage';

// const user = JSON.parse(localStorage.getItem('user')); // Asegúrate de tener este dato en el localStorage
const drawerWidth = 240; // Puedes ajustar este valor según tus necesidades
const DashboardPage = () => {

  const user = JSON.parse(localStorage.getItem('user')); // Ajusta según tu estructura de datos




  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user'); // Si también deseas eliminar la información del usuario
    navigate('/');
  };

  return (
    <Container>
    {/* <Router> */}
      <div style={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" style={{ zIndex: 1201 }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div" style={{ flexGrow: 1 }}>
              LegisTool
            </Typography>
            <Typography variant="body1" component="div">
              {/* {user.name} */}
              {              console.log("localStorage",localStorage)
              }
            </Typography>
            <Button variant="contained" color="secondary" onClick={handleLogout}>
              Logout
            </Button>
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="persistent"
          open={true}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          <Toolbar />
          <div>
            <List>
              
              <ListItem  component={Link} to="/">
                <ListItemText primary="Inicio" />
              </ListItem>
              <ListItem  component={Link} to="/dashboard/categorias">
                <ListItemText primary="Categorías" />
              </ListItem>
              <ListItem  component={Link} to="/dashboard/checklist">
                <ListItemText primary="Checklist" />
              </ListItem>
              <ListItem  component={Link} to="/dashboard/contactos">
                <ListItemText primary="Contactos" />
              </ListItem>
              <ListItem  component={Link} to="/dashboard/distribucion-correo">
                <ListItemText primary="Distribución de Correos" />
              </ListItem>
              <ListItem  component={Link} to="/dashboard/documentos">
                <ListItemText primary="Documentos" />
              </ListItem>
              <ListItem  component={Link} to="/dashboard/organizacion">
                <ListItemText primary="Organización" />
              </ListItem>
              <ListItem component={Link} to="/dashboard/organization2">
                <ListItemText primary="Organization2" />
              </ListItem>
              <ListItem  component={Link} to="/dashboard/paises">
                <ListItemText primary="Paises" />
              </ListItem>
              <ListItem  component={Link} to="/dashboard/permisos">
                <ListItemText primary="Permisos" />
              </ListItem>
              <ListItem  component={Link} to="/dashboard/permisossucursales">
                <ListItemText primary="Permisos por sucursal" />
              </ListItem>
              <ListItem  component={Link} to="/dashboard/regulation">
                <ListItemText primary="Regulaciones" />
              </ListItem>
              <ListItem  component={Link} to="/dashboard/regulacionessucursales">
                <ListItemText primary="Regulaciones por sucursal" />
              </ListItem>
              <ListItem  component={Link} to="/dashboard/requerimientos">
                <ListItemText primary="Requerimientos" />
              </ListItem>
              <ListItem  component={Link} to="/dashboard/resultadodeauditoria">
                <ListItemText primary="Resultado de Auditoria" />
              </ListItem>
              <ListItem  component={Link} to="/dashboard/subcategorias">
                <ListItemText primary="Sub Categorias" />
              </ListItem>
              <ListItem  component={Link} to="/dashboard/sucursales">
                <ListItemText primary="Sucursales" />
              </ListItem>
              <ListItem  component={Link} to="/dashboard/tipodocumento">
                <ListItemText primary="Tipo de Documento" />
              </ListItem>
              <ListItem  component={Link} to="/dashboard/vistaregulaciones">
                <ListItemText primary="Vista de Regulaciones" />
              </ListItem>
              <ListItem  component={Link} to="/dashboard/vistachecklist">
                <ListItemText primary="Vista de Checklist" />
              </ListItem>
            </List>
          </div>
        </Drawer>
        <main style={{ flexGrow: 1, padding: '24px', marginLeft: 0 }}>
          <Toolbar />
          <Routes>
            {/* <Route path="/" element={<Inicio />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/organizacion" element={<Organizacion />} />
            <Route path="/paises" element={<Country />} />
            <Route path="/sucursales" element={<Sucursales />} />
            <Route path="/distribucion-correo" element={<DistribucionCorreo />} />
            <Route path="/contactos" element={<Contactos />} />
            <Route path="/categorias" element={<Categorias />} />
            <Route path="/checklist" element={<Checklist />} />
            <Route path="/subcategorias" element={<SubCategorias />} />
            <Route path="/permisos" element={<Permisos />} />
            <Route path="/tipodocumento" element={<TipoDocumento />} />
            <Route path="/permisossucursales" element={<PermisosSucursal />} />
            <Route path="/regulation" element={<Regulation />} />
            <Route path="/regulacionessucursales" element={<RegulacionesSucursal />} />
            <Route path="/documentos" element={<Documentos />} />
            <Route path="/resultadodeauditoria" element={<AuditResult />} />
            <Route path="/requerimientos" element={<Requerimientos />} />
            <Route path="/vistaregulaciones" element={<VistaRegulaciones />} />
            <Route path="/vistachecklist" element={<VistaChecklist />} />
          </Routes>
        </main>
      </div>
    {/* </Router> */}

  </Container>
  
  );
};

export default DashboardPage;
