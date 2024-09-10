import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Trabajo } from 'src/app/models/trabajo/trabajo';
import { ActivatedRoute } from '@angular/router';
import { TrabajoService } from 'src/app/servicios/trabajo/trabajo.service';

@Component({
  selector: 'app-detalle-trabajo',
  templateUrl: './detalle-trabajo.component.html',
  styleUrls: ['./detalle-trabajo.component.css']
})
export class DetalleTrabajoComponent implements OnInit {

  id:number; 
  trabajo:Trabajo;

  constructor(private route:ActivatedRoute, private trabajoService: TrabajoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; 
    this.trabajo = new Trabajo()
    this.trabajoService.getTrabajoById(this.id).subscribe(dato=>{
      this.trabajo = dato;
      swal(`Detalles del trabajo ${this.trabajo.titulo}`);
    })
  }

}
