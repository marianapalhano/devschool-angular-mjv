import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberComponent } from './components/member/member.component';
import { MemberListComponent } from './components/member-list/member-list.component';
import { MembersComponent } from './pages/members/members.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    MemberComponent,
    MemberListComponent,
    MembersComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MembersModule { }
