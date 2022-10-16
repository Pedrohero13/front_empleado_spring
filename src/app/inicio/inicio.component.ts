import { Component, OnInit } from '@angular/core';

import { EmpleadosService } from '../services/empleados.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  empleadosList = new Array();

  arrayAux : any;
  constructor(private empleadoService:EmpleadosService) { }

  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados(){
    this.empleadoService.getEmpleados().subscribe(
      data =>{
        console.log(data);
        this.arrayAux= data;
        this.arrayAux.map((elemento: any) =>{
          const dataTable =  {
              id : elemento.id,
              nombre: elemento.nombre,
              direccion: elemento.direccion,
              telefono: elemento.telefono
          }
          this.empleadosList.push(dataTable);
        })
      }
    )
  }

}
