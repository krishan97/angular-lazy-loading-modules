import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddress } from './models/user-address.model';
import { User } from './models/user.model';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule, NgbAlertModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    FormsModule,
  ],
  providers: [
    UserAddress,
    User,
  ]
})
export class UsersModule { }
