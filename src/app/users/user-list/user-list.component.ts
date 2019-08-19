import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Title } from '@angular/platform-browser';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Array<User>;
  selectedUser: User;
  baseurl = 'https://jsonplaceholder.typicode.com';
  constructor(
    private http: HttpClient,
    private titleService: Title,
    private modalService: NgbModal,
  ) {

   }

  ngOnInit() {
    this.titleService.setTitle(`Users`);
    this.http.get(`${this.baseurl}/users`).subscribe((data: Array<User>) => {
       this.users = data;
    }, err => {
      console.log(err);
    });
  }

  open(content, data) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    this.selectedUser = data;
  }

}
