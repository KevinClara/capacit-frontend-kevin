import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Departamento, Trabajo } from '../../../models/trabajo/trabajo';
import { TrabajoService } from 'src/app/servicios/trabajo/trabajo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.component.html',
  styleUrls: ['./trabajo.component.css']
})
export class TrabajoComponent implements OnInit {

  trabajos : Trabajo[];

  constructor(private trabajoService : TrabajoService, private router : Router) { }

  ngOnInit(): void {
    this.trabajosLista();
  }

  trabajosLista(){
    this.trabajoService.trabajosLista().subscribe(dato =>{
      this.trabajos = dato; 
      console.log(dato); 
    })
  }

  actualizarTrabajo(id:number){
    this.router.navigate(['actualizar-trabajo',id]); 
  }

  detallesTrabajo(id:number) {
    this.router.navigate(['detalle-trabajo',id]);
  }

  eliminarTrabajo(id:number) {
    swal({
      title : "¿Estás seguro?",
      text : "Confirma si deseas eliminar el trabajo",
      type : "warning",
      showCancelButton : true,
      confirmButtonColor : '#3085d6',
      cancelButtonColor : '#d33',
      confirmButtonText : "Si, eliminalo",
      cancelButtonText : "No, cancelar",
      confirmButtonClass : "btn btn-success",
      cancelButtonClass : "btn btn-danger",
      buttonsStyling : true
    }).then((result) => {
      if (result.value) {
        this.trabajoService.eliminarTrabajo(id).subscribe(dato => {
          console.log(dato);
          this.trabajosLista();
          swal(
            'Trabajo eliminado',
            'El trabajo ha sido eliminado con éxito',
            'success'
          )
        });
      }
    })


  }

}
