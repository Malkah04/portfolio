import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects = [
    {
      id: 1,
      name: 'Homy',
      date: 'Mar 2025 - May 2025',
      details:
        'The Student Housing App is a mobile application designed to help students find and rent rooms easily. Sellers can list available rooms for rent, while students can browse, view details, and book accommodations. The platform aims to simplify the housing search process and provide a user-friendly experience.',
      images: [
        '../../../assets/h3.jpg',
        '../../../assets/h4.jpg',
        '../../../assets/h5.jpg',
        '../../../assets/h6.jpg',
      ],
      skills: ['React Native', 'Firebase', 'TypeScript', 'Team Leader'],
      mobile: true,
    },
    {
      id: 2,
      name: 'Book Me',
      date: 'Jul 2025 - Aug 2025',
      details:
        'Book Me is your ultimate hotel booking solution. This project is designed to provide a simple, user-friendly platform to search, browse, and reserve hotel rooms online — whether for a quick getaway or a business trip.',
      images: ['../../../assets/bookme1.png'],
      skills: ['React', 'Express.js', 'MongoDB', 'Team Work'],
      mobile: false,
    },
  ];

  projId: number | null = null;

  toggleProjectDetails(id: number) {
    this.projId = id;
  }

  get selected() {
    return this.projects.find((e) => e.id === this.projId) || null;
  }
}
