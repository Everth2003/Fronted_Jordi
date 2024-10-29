import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from '../models/Estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  // Define la URL base para la API
  private baseUrl: string = 'http://localhost:8080/estudiantes/listar';



  constructor(private http: HttpClient) {}

  getEstudiantes(): Observable<any> { // Cambia a Observable<any>
    return this.http.get<any>(this.baseUrl); // Mantén el retorno como un objeto
  }
}
