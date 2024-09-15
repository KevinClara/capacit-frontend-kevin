import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './components/empleado/lista-empleados/lista-empleados.component';
import { RegistrarEmpleadoComponent } from './components/empleado/registrar-empleado/registrar-empleado.component';
import { ActualizarEmpleadoComponent } from './components/empleado/actualizar-empleado/actualizar-empleado.component';
import { DetalleEmpleadoComponent } from './components/empleado/detalle-empleado/detalle-empleado.component';
import { ListarClientesComponent } from './components/cliente/listar-clientes/listar-clientes.component';
import { ActualizarClienteComponent } from './components/cliente/actualizar-cliente/actualizar-cliente.component';
import { ListarPedidosComponent } from './components/pedido/listar-pedidos/listar-pedidos.component';
import { TrabajoComponent } from './components/trabajo/trabajo/trabajo.component';
import { DetalleTrabajoComponent } from './components/trabajo/detalle-trabajo/detalle-trabajo.component'; 
import { ActualizarTrabajoComponent } from './components/trabajo/actualizar-trabajo/actualizar-trabajo.component';
import { RegistrarTrabajoComponent } from './components/trabajo/registrar-trabajo/registrar-trabajo.component';

//aqui se configuran las rutas URL a donde tienen que redireccionar (componentes)
const routes: Routes = [
  {path : 'empleados',component:ListaEmpleadosComponent},
  {path : '',redirectTo:'empleados',pathMatch:'full'},
  {path : 'registrar-empleado',component : RegistrarEmpleadoComponent},
  {path : 'actualizar-empleado/:id',component : ActualizarEmpleadoComponent},
  {path : 'detalle-empleado/:id',component : DetalleEmpleadoComponent},
  {path : 'clientes', component:ListarClientesComponent},
  {path : 'actualizar-cliente/:id', component : ActualizarClienteComponent},
  {path : 'pedidos', component : ListarPedidosComponent},
  {path : 'trabajos', component : TrabajoComponent},
  {path : 'detalle-trabajo/:id', component : DetalleTrabajoComponent },
  {path : 'actualizar-trabajo/:id', component :ActualizarTrabajoComponent },
  {path : 'registrar-trabajo', component: RegistrarTrabajoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
