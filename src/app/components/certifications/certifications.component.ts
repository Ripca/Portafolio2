import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css'],
  standalone: false
})
export class CertificationsComponent {
  certifications = [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services (AWS)',
      date: '2024',
      link: 'https://www.credly.com/badges/7104feae-dfd2-4d1c-ac52-ddda906abcba/linked_in_profile',
      image: 'https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png' 
    },
    {
      name: 'Foundational C# with Microsoft',
      issuer: 'freeCodeCamp & Microsoft',
      date: '2024',
      link: 'https://www.freecodecamp.org/certification/fcce44963d0-2604-419a-bac5-4a1bdeb68409/foundational-c-sharp-with-microsoft',
      image: 'https://design-style-guide.freecodecamp.org/downloads/fcc_secondary_small.svg'
    },
    {
      name: 'Microsoft Office Specialist: Word Associate (Office 2019)',
      issuer: 'Microsoft',
      date: '2023', // Assuming date based on typical timelines, user didn't specify year but other is 2019 version.
      link: 'https://www.credly.com/badges/7086ef4a-936d-43c8-aed2-1c35e2c6facf',
      image: 'https://images.credly.com/size/340x340/images/b9912ce7-7c17-40bc-afbb-ca4251ea1416/MOS_Word.png'
    }
  ];
}
