import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: false
})
export class AboutComponent {
  personalInfo = {
    name: 'Ricardo Arrecis',
    title: 'Desarrollador ',
    email: 'ricardoarrecisrivera@gmail.com',
    phone: '+502 XXXX-XXXX',
    location: 'Guatemala',
    description: 'Estudiante de 4.º semestre de Ingeniería en Sistemas, con conocimientos en desarrollo web frontend y backend. Alta motivación por aprender nuevas tecnologías y fortalecer las actuales. Capacidad para trabajar en equipo y aportar soluciones en distintos entornos.'
  };


  scrollToContact(): void {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

