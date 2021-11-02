import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../../models/member.model';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  @Input()
  member?: Member;

  @Input()
  card?: Boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToDetails() {
    this.router.navigateByUrl(`member-details/${this.member?.id}`);
  }

}
