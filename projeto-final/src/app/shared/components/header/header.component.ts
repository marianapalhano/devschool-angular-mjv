import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adopter } from 'src/app/features/adopters/models/adopter.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  adopter?: Adopter;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const adopterStorage = sessionStorage.getItem('adopter');
    if (adopterStorage) {
      this.adopter = JSON.parse(adopterStorage);
    }
  }

  exit() {
    sessionStorage.clear();
    this.router.navigateByUrl('/login').then(() => {
      window.location.reload();
    });;
  }

}
