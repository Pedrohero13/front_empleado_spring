import { Component, OnInit } from '@angular/core';

import { EmpleadosService } from '../services/empleados.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  empleadosList = new Array();
  selectEmpleado: any;
  arrayAux : any;
  constructor(private empleadoService:EmpleadosService,  private router: Router, private approot: AppComponent) { }

  ngOnInit(): void {
    AppComponent
     const cadena = localStorage.getItem("user-profile");
    if (cadena !== null) {
      this.approot.empleado = JSON.parse(cadena);

    }
    if (this.approot.empleado?.userName === "") {
      this.router.navigate(["/", "login"])

    }
    this.getEmpleados();
  }

  getEmpleados(){
    this.empleadoService.getEmpleados().subscribe(
      data =>{
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

  updateModal(index: any) {
    const select= {
      id: this.empleadosList[index].id,
      nombre: this.empleadosList[index].nombre,
      direccion: this.empleadosList[index].direccion,
      telefono: this.empleadosList[index].telefono
    }
    this.selectEmpleado = select;
    console.log(this.selectEmpleado)
  }

  updateEmpleado() {
    const persisEmpleado = {
      dni: this.selectEmpleado.id,
      name : this.selectEmpleado.nombre,
      adress: this.selectEmpleado.direccion,
      phoneNumber: this.selectEmpleado.telefono
    }
    this.empleadoService.updateEmpleado(persisEmpleado).subscribe((data: any)=>{
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Se a modificado el empleado '+data.nombre,
        showConfirmButton: false,
        timer: 3000

      }).then(() => {
        location.reload()
      })
    });
  }


  deleteEmpleado() {
    this.empleadoService.deleteEmpleado(this.selectEmpleado.id).subscribe({
      next: (data) => {

      }, error: (error) => {
        Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Se a eliminado el empleado ',
        showConfirmButton: false,
        timer: 3000

      }).then(() => {
        location.reload();
      })
      }

    });
  }

}
