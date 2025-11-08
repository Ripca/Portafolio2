import { Component } from '@angular/core';

interface Skill {
  name: string;
  level: number; // 1-5 scale
}

interface SkillCategory {
  category: string;
  icon: string;
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
      icon: '🎨',
      skills: [
        { name: 'HTML', level: 4 },
        { name: 'CSS', level: 4 },
        { name: 'JavaScript', level: 4 },
        { name: 'jQuery', level: 4 },
        { name: 'Bootstrap', level: 4 },
        { name: 'Angular', level: 2 },
        { name: 'Web Forms ASP', level: 5 },
        { name: 'Java Web JSP', level: 2 }
      ]
    },
    {
      category: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'C#', level: 4 },
        { name: 'APIs .NET Framework', level: 4 },
        { name: 'APIs .NET Core', level: 4 },
        { name: 'JWT / JWS / JWE', level: 4 },
        { name: 'Servicios SOAP', level: 2 },
        { name: 'Java', level: 2 }
      ]
    },
    {
      category: 'Bases de Datos',
      icon: '💾',
      skills: [
        { name: 'Oracle', level: 3 },
        { name: 'MySQL', level: 3 },
        { name: 'DynamoDB', level: 2 }
      ]
    },
    {
      category: 'Reportes',
      icon: '📊',
      skills: [
        { name: 'Jasper Reports', level: 3 }
      ]
    },
    {
      category: 'CI/CD & Control de Versiones',
      icon: '🔄',
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
      icon: '☁️',
      skills: [
        { name: 'EC2', level: 3 },
        { name: 'RDS', level: 3 },
        { name: 'API Gateway', level: 3 },
        { name: 'Lambda', level: 3 },
        { name: 'Cognito', level: 3 }
      ]
    },
    {
      category: 'Automatización',
      icon: '🤖',
      skills: [
        { name: 'Power Automate', level: 3 }
      ]
    },
    {
      category: 'Autenticación',
      icon: '🔐',
      skills: [
        { name: 'Microsoft Entra ID', level: 4 },
        { name: 'Autenticación 2FA', level: 4 }
      ]
    },
    {
      category: 'Servidores',
      icon: '🖥️',
      skills: [
        { name: 'IIS', level: 3 },
        { name: 'Apache Tomcat', level: 3 }
      ]
    }
  ];

  getStars(level: number): boolean[] {
    return Array(5).fill(false).map((_, i) => i < level);
  }
}

