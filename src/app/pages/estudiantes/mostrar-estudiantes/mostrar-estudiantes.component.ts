import { Component } from '@angular/core';

import { EstudianteService } from '../../../services/estudiante.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-mostrar-estudiantes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mostrar-estudiantes.component.html',
  styleUrl: './mostrar-estudiantes.component.scss'
})
export class MostrarEstudiantesComponent {
  estudiantes: any[] = []; // Inicializa como un array vacío

  constructor(private estudiantesService: EstudianteService) {}

  ngOnInit(): void {
    this.estudiantesService.getEstudiantes().subscribe(
      (data) => {
        // Asegúrate de acceder al array 'estudiante' en la respuesta
        if (data && Array.isArray(data.estudiante)) {
          this.estudiantes = data.estudiante; // Asigna el array de estudiantes
        } else {
          console.error('La respuesta no contiene un array de estudiantes:', data);
          this.estudiantes = []; // Asigna un array vacío si no es válido
        }
      },
      (error) => {
        console.error('Error al obtener los estudiantes', error);
      }
    );
  }
}
