import { Component, OnInit } from '@angular/core';
import { Member } from '../../models/member.model';
import { MembersService } from '../../services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {
  members?: Array<Member> = [];

  constructor(private membersService: MembersService) { }

  ngOnInit(): void {
    this.members = this.membersService.getMembers();
  }

}
