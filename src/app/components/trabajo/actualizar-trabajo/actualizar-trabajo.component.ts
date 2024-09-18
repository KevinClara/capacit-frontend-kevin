import { Component, OnInit } from '@angular/core';
import { TrabajoService } from 'src/app/servicios/trabajo/trabajo.service';
import { Departamento, Trabajo } from 'src/app/models/trabajo/trabajo';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-actualizar-trabajo',
  templateUrl: './actualizar-trabajo.component.html',
  styleUrls: ['./actualizar-trabajo.component.css']
})
export class ActualizarTrabajoComponent implements OnInit {

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
  constructor(private trabajoService: TrabajoService, private router: Router, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarDepartamentos(); 
    this.getTrabajoById(this.rutaActiva.snapshot.params.id);
  }

private getTrabajoById(id: number) {
  this.trabajoService.getTrabajoById(id).subscribe(dato => {
    this.trabajo = dato;
    console.log(this.trabajo.titulo);
    console.log(this.trabajo.departamento.id);
  }, error => console.log('Error al cargar trabajo:', error));
}


  cargarDepartamentos() {
    this.trabajoService.obtenerDepartamentos().subscribe(
      departamentos => {
        this.departamentos = departamentos;
      },error => console.log(error));
  }

  irListaTrabajos() {
    this.router.navigate(['/trabajos']);
  }

  actualizarTrabajo() {
    this.trabajoService.actualizarTrabajo(this.trabajo.id, this.trabajo).subscribe(dato => {
      console.log(dato);
      this.irListaTrabajos();
    }, error => console.log(error));
  }

  onSubmit() {
    this.actualizarTrabajo(); 
  }

}
