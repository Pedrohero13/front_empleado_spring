import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../services/empleados.service';
import { Router } from "@angular/router";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  nombre: string=""
  direccion: string=""
  telefono: string=""

  constructor(private serviceEmpleado : EmpleadosService, private router: Router) { }

  ngOnInit(): void {
  }

  createEmpleado (){
    const persisEmpleado = {
      dni:-1,
      name : this.nombre,
      adress: this.direccion,
      phoneNumber: this.telefono
    }
    this.serviceEmpleado.createEmpleado(persisEmpleado).subscribe((data: any)=>{
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Se a guardado el empleado '+data.nombre,
        showConfirmButton: true,

      })
    });
  }
  gotoHome (){
    this.router.navigate(['/', 'inicio']);
  }

}
