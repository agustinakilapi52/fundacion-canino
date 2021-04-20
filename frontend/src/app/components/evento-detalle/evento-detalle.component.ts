import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { EventoService } from "../../service/evento.service";
import { FormBuilder, FormGroup, Form, Validators } from "@angular/forms";
import { IEvento } from 'src/app/models/evento';
import { IEventoDetalle } from 'src/app/models/eventoDetalle';
import { Router } from "@angular/router";

@Component({
  selector: 'app-evento-detalle',
  templateUrl: './evento-detalle.component.html',
  styleUrls: ['./evento-detalle.component.css']
})
export class EventoDetalleComponent implements OnInit {

  id_evento:number;

  unEvento:IEvento;
 
  imagenesUnEvento:IEventoDetalle;

  constructor(private router:Router,private fb:FormBuilder,private activatedRoute:ActivatedRoute,private serviceEvento:EventoService ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.id_evento = params.id_evento;
      }
    );

    this.obtenerDetalleEvento(this.id_evento);

    this.mostrarImagenesEvento(this.id_evento);
  }

  obtenerDetalleEvento(id_evento:number)
  {
    this.serviceEvento.getOneEvento(this.id_evento).subscribe (
      resultado => {
        this.unEvento = resultado;
      },
      error => console.log(error)
    )
  }

  mostrarImagenesEvento(id_evento:number)
  {
  this.serviceEvento.getImagenesOneEvento(id_evento).subscribe(
    resultado => {
      this.imagenesUnEvento = resultado;
    },
    error => console.log(error)
  )
  }



}
