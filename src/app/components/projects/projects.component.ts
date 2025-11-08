import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  repoUrl?: string;
  liveUrl?: string;
  status: 'completed' | 'in-progress' | 'planned';
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Proyecto de Ejemplo',
      description: 'Este es un proyecto de ejemplo que muestra la estructura de cómo se mostrarán los proyectos futuros.',
      technologies: ['Angular', 'TypeScript', 'CSS'],
      repoUrl: 'https://github.com/devgerrod',
      status: 'in-progress'
    }
  ];

  getStatusText(status: string): string {
    const statusMap: { [key: string]: string } = {
      'completed': 'Completado',
      'in-progress': 'En Desarrollo',
      'planned': 'Planeado'
    };
    return statusMap[status] || status;
  }

  getStatusClass(status: string): string {
    return `status-${status}`;
  }
}

