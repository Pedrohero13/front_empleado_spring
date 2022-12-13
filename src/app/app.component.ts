import { Component, OnInit, ViewChild } from '@angular/core';

import { AuthServiceService } from './services/auth-service.service';
import { Router } from "@angular/router";
import { user } from './services/authAPI';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Empleados CRUD';
  empleado?: user;
  constructor(private serviceAuth: AuthServiceService, private router: Router) {

  }
  ngOnInit(): void {

    const cadena = localStorage.getItem("user-profile");
    if (cadena !== null) {
      this.empleado = JSON.parse(cadena);

    }
    if (this.empleado?.userName === "") {
      this.router.navigate(["/", "login"])

    }


  }




  deleteUser() {
    this.serviceAuth.saveUserToLocalStorage({
      userName: "",
      password: ""
    })
    this.empleado = {userName:"", password:""}
  }




}
