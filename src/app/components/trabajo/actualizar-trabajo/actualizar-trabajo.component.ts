import { Component, OnInit } from '@angular/core';
import { TrabajoService } from 'src/app/servicios/trabajo/trabajo.service';
import { Trabajo } from 'src/app/models/trabajo/trabajo';
import { Router } from '@angular/router';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-actualizar-trabajo',
  templateUrl: './actualizar-trabajo.component.html',
  styleUrls: ['./actualizar-trabajo.component.css']
})
export class ActualizarTrabajoComponent implements OnInit {

  trabajo : Trabajo = new Trabajo();
  constructor(private trabajoService:TrabajoService, private router:Router, private rutaActiva:ActivatedRoute) { }

  ngOnInit(): void {
    this.getTrabajoById(this.rutaActiva.snapshot.params.id);
  }

  private getTrabajoById(id:number){
    this.trabajoService.getTrabajoById(id).subscribe(dato=>{
      this.trabajo = dato;
      console.log(this.trabajo.titulo); 
    })
  }

  irListaTrabajos(){
    this.router.navigate(['/trabajos']);
  }

  actualizarTrabajo(){
    this.trabajoService.actualizarTrabajo(this.trabajo.id,this.trabajo).subscribe(dato =>{
      console.log(dato);
      this.irListaTrabajos();
    },error=>console.log(error));
  }

  onSubmit(){
    this.actualizarTrabajo
  }

}
