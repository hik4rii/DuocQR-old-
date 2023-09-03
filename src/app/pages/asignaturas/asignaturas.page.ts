import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Asignatura } from './asignatura.model';
import { AsignaturasService } from 'src/app/services/asignaturas.service';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {

  listaAsignaturas: Asignatura[]=[];

  constructor(
    private router:Router,
    private asignaturaservice: AsignaturasService) { }

  ngOnInit() {
    this.listaAsignaturas = this.asignaturaservice.getAll();
  }

  detalle() {
    this.router.navigate(['detalle']);
  }
}
