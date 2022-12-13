import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import Swal from 'sweetalert2';
import { Router } from "@angular/router";
import { user } from '../services/authAPI';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = ""
  password: string=""
  user?: user;
  constructor(private serviceAuth: AuthServiceService, private router: Router) { }

  ngOnInit(): void {

    const cadena = localStorage.getItem("user-profile");
    if (cadena !== null) {
      this.user = JSON.parse(cadena);
    }
    if (this.user?.userName !== "") {
      this.router.navigate(["/","inicio"])
    }
  }

  login (){
    const persisEmpleado ={
      userName: this.email,
      password: this.password
    }
    this.serviceAuth.login(persisEmpleado).subscribe({
      next: (data) => {
             this.serviceAuth.saveUserToLocalStorage({
        userName: this.email,
        password: data.token
      });

      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Iniciando sesión con: ' + this.email,
        showConfirmButton: false,
        timer: 3000

      }).then(() => {
        this.router.navigate(["/","inicio"])
      })
      },
      error: (error)=>{
        Swal.fire({
          position: 'top',
          icon: 'error',
          title: 'Usuario no encontrado \n verifique sus credenciales',
          text: "ERROR: "+error.error,
          showConfirmButton: true

        })

      }

    });
  }
}
