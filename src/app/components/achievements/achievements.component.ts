import { Component } from '@angular/core';

interface Achievement {
  title: string;
  organization: string;
  date: string;
  description: string;
}

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css'],
  standalone: false
})
export class AchievementsComponent {
  achievements: Achievement[] = [
    {
      title: 'Competencia Nacional Microsoft Office Specialist 2023',
      organization: 'Microsoft',
      date: 'Mayo 2023',
      description: 'Participación en la Competencia Nacional de Microsoft Office Specialist 2023 en la categoría de Microsoft Word.'
    }
  ];
}

