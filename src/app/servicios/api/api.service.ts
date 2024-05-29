import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  cookies: any; 

  constructor(private http: HttpClient) {}


  //10 Paises con mas poblacion

  Obtener10PaisesPoblados() {
    return this.http.get(
      'http://localhost:8080/api/v1/Datos/ejercicio1'
    );
  }


  
  //5 Paises con mas poblacion
  Obtener5PaisesPoblados() {
    return this.http.get(
      'http://localhost:8080/api/v1/Datos/ejercicio2'
    );
  }


    //Ejercicio 3
    ejercicio3() {
      return this.http.get(
        'http://localhost:8080/api/v1/Datos/ejercicio3'
      );
    }


      //Ejercicio 4
      ejercicio4() {
        return this.http.get(
          'http://localhost:8080/api/v1/Datos/ejercicio4'
        );
      }


      
      //Ejercicio 3
      ejercicio5() {
        return this.http.get(
          ' http://localhost:8080/api/v1/Datos/ejercicio5'
        );
      }

     
}
