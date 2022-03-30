import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() public user:User;
  constructor() { }

  ngOnInit() {
  }

}
