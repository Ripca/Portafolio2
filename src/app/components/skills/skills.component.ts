import { Component } from '@angular/core';

interface Skill {
  name: string;
  level: number; // 1-5
}

interface SkillCategory {
  category: string;
  icon: string; // Clases de Font Awesome
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  standalone: false
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      category: 'Frontend',
      icon: 'fa-solid fa-code',
      skills: [
        { name: 'HTML', level: 4 },
        { name: 'CSS', level: 4 },
        { name: 'JavaScript', level: 4 },
        { name: 'jQuery', level: 4 },
        { name: 'Bootstrap', level: 4 },
        { name: 'Angular', level: 2 },
        { name: 'Web Forms ASP', level: 4 },
        { name: 'Java Web JSP', level: 2 }
      ]
    },
    {
      category: 'Backend',
      icon: 'fa-solid fa-gears',
      skills: [
        { name: 'C#', level: 4 },
        { name: 'APIs .NET Framework', level: 4 },
        { name: 'APIs .NET Core', level: 3 },
        { name: 'JWT / JWS / JWE', level: 4 },
        { name: 'Servicios SOAP', level: 2.5 },
        { name: 'Java', level: 2 }
      ]
    },
    {
      category: 'Bases de Datos',
      icon: 'fa-solid fa-database',
      skills: [
        { name: 'Oracle', level: 3.8 },
        { name: 'MySQL', level: 3.5 },
        { name: 'DynamoDB', level: 2 }
      ]
    },
    {
      category: 'Reportes',
      icon: 'fa-solid fa-chart-column',
      skills: [
        { name: 'Jasper Reports', level: 3 }
      ]
    },
    {
      category: 'CI/CD & Control de Versiones',
      icon: 'fa-solid fa-code-branch',
      skills: [
        { name: 'Jenkins', level: 3 },
        { name: 'SonarQube', level: 3 },
        { name: 'Git', level: 4 },
        { name: 'GitHub', level: 4 },
        { name: 'Bitbucket', level: 4 }
      ]
    },
    {
      category: 'Cloud & AWS',
      icon: 'fa-solid fa-cloud',
      skills: [
        { name: 'EC2', level: 3 },
        { name: 'RDS', level: 3 },
        { name: 'API Gateway', level: 3 },
        { name: 'Lambda', level: 3 },
        { name: 'Cognito', level: 3 },
        { name: 'IAM', level: 3 }
      ]
    },
    {
      category: 'Automatización',
      icon: 'fa-solid fa-robot',
      skills: [
        { name: 'Power Automate', level: 3 }
      ]
    },
    {
      category: 'Autenticación',
      icon: 'fa-solid fa-shield-halved',
      skills: [
        { name: 'Microsoft Entra ID', level: 4 },
        { name: 'Autenticación 2FA', level: 4 }
      ]
    },
    {
      category: 'Servidores',
      icon: 'fa-solid fa-server',
      skills: [
        { name: 'IIS', level: 3 },
        { name: 'Apache Tomcat', level: 2 }
      ]
    }
  ];

  getStars(level: number): boolean[] {
    return Array(5)
      .fill(false)
      .map((_, i) => i < level);
  }
}
