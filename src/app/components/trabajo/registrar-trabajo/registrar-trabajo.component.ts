import { Component, OnInit } from '@angular/core';
import { Departamento, Trabajo } from 'src/app/models/trabajo/trabajo';
import { TrabajoService } from 'src/app/servicios/trabajo/trabajo.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-registrar-trabajo',
  templateUrl: './registrar-trabajo.component.html',
  styleUrls: ['./registrar-trabajo.component.css']
})
export class RegistrarTrabajoComponent implements OnInit {

  trabajo: Trabajo = {
    departamento: {
      id: null,
      departamento: '',
      managerid: 0
    },
    id: 0,
    titulo: '',
    minimo: 0,
    maximo: 0
  };  
  departamentos : Departamento[]; 
  constructor(private trabajoService: TrabajoService, private router : Router) { }

  ngOnInit(): void {    
    this.cargarDepartamentos();
  }

  cargarDepartamentos() {
    this.trabajoService.obtenerDepartamentos().subscribe(
      departamentos => {
        this.departamentos = departamentos;
      },error => console.log(error));
  }

  guardarTrabajo(){
    this.trabajoService.registrarTrabajo(this.trabajo).subscribe(dato=>{
      console.log(dato); 
      this.irListaTrabajos(); 
    }, error => console.log(error));
  }

  irListaTrabajos() {
    this.router.navigate(['/trabajos']);
  }

  onSubmit() {
    this.guardarTrabajo();
  }

}
