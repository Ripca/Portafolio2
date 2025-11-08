import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  education = [
    {
      degree: 'Ingeniería en Sistemas',
      institution: 'Universidad',
      status: 'Finalizando segundo año',
      period: '2023 - Actualidad',
      description: 'Formación en desarrollo de software, bases de datos, arquitectura de sistemas y tecnologías de la información.'
    }
  ];
}

