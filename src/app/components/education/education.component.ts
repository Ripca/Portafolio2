import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  standalone: false
})
export class EducationComponent {
  education = [
    {
      degree: 'Ingeniería en Sistemas',
      institution: 'Universidad Mariano Gálvez de Guatemala',
      status: 'Segundo año finalizado',
      period: '2024 - Actualidad',
      description: 'Formación en desarrollo de software, bases de datos, sistemas y tecnologías de la información.'
    }
  ];
}

