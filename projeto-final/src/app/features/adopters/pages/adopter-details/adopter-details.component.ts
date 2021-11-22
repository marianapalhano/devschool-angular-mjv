import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Adopter } from '../../models/adopter.model';
import { AdoptersService } from '../../services/adopters.service';

@Component({
  templateUrl: './adopter-details.component.html',
  styleUrls: ['./adopter-details.component.scss']
})
export class AdopterDetailsComponent implements OnInit {
  adopter?: Adopter;

  constructor(private activatedRoute: ActivatedRoute, private adoptersService: AdoptersService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const adopter = this.adoptersService.getAdopterById(params['id']);
      this.adopter = adopter;
    });
  }

}
