import { Component, OnInit } from '@angular/core';
import { Trabajo } from 'src/app/models/trabajo/trabajo';
import { TrabajoService } from 'src/app/servicios/trabajo/trabajo.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-registrar-trabajo',
  templateUrl: './registrar-trabajo.component.html',
  styleUrls: ['./registrar-trabajo.component.css']
})
export class RegistrarTrabajoComponent implements OnInit {

  trabajo : Trabajo = new Trabajo();
  constructor(private trabajoService: TrabajoService, private router : Router) { }

  ngOnInit(): void { }

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
