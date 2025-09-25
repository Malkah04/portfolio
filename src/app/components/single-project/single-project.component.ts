import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.css'],
})
export class SingleProjectComponent {
  projectId: number | null = null;
  project: any;
  projects = [
    {
      id: 1,
      name: 'Homy',
      date: 'Mar 2025 - May 2025',
      details:
        'The Student Housing App is a mobile application designed to help students find and rent rooms easily. Sellers can list available rooms for rent, while students can browse, view details, and book accommodations. The platform aims to simplify the housing search process and provide a user-friendly experience.',
      images: [
        '../../../assets/h1.jpg',
        '../../../assets/h2.jpg',
        '../../../assets/h3.jpg',
        '../../../assets/h4.jpg',
        '../../../assets/h5.jpg',
        '../../../assets/h6.jpg',
      ],
      skills: ['React Native', 'Firebase'],
    },
    {
      id: 2,
      name: 'Book Me',
      date: 'Jul 2025 - Aug 2025',
      details:
        'Book Me is your ultimate hotel booking solution. This project is designed to provide a simple, user-friendly platform to search, browse, and reserve hotel rooms online — whether for a quick getaway or a business trip.',
      images: [''],
      skills: ['React', 'Express.js', 'MongoDB'],
    },
  ];

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.projectId = Number(this.route.snapshot.paramMap.get('id'));
    this.project = this.projects.find((p) => p.id === this.projectId);
  }
}
