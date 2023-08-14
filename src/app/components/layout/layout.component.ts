import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  isOpen = false;

  links = [
    {
      linkTo: '/patients/new',
      pathName: 'Pacientes',
    },
    {
      linkTo: '/financial-accounts/new',
      pathName: 'Contas financeiras',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  toggleDrawer() {
    this.isOpen = !this.isOpen;
  }
}
