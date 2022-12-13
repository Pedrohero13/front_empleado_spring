import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { empleado } from './empleadoApi';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
constructor(private httpClient: HttpClient) { }

  createEmpleado(empleadoPersis: empleado): Observable<any> {
    return this.httpClient.post("http://localhost:8000/api/empleado", empleadoPersis);
  }

  getEmpleados() {
    return this.httpClient.get("http://localhost:8000/api/empleado");
  }

  updateEmpleado(empleadoPersis: empleado): Observable<any> {
    console.log(empleadoPersis)
    return this.httpClient.put("http://localhost:8000/api/empleado/"+empleadoPersis.dni, empleadoPersis);
  }
  deleteEmpleado(dni: string): Observable<any> {

    return this.httpClient.delete("http://localhost:8000/api/empleado/"+dni);
  }

}
