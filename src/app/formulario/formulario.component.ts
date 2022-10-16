import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../services/empleados.service';
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

  constructor(private serviceEmpleado : EmpleadosService) { }

  ngOnInit(): void {
  }

  createEmpleado (){
    const persisEmpleado ={
      name : this.nombre,
      adress: this.direccion,
      phoneNumber:this.telefono
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

}
