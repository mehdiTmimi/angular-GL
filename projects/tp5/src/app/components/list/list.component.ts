import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public users:User[];
  constructor(private service:UserService) { 
    this.service.list().subscribe(list=>{
      this.users=list
    })
  }

  ngOnInit() {
  }

}
