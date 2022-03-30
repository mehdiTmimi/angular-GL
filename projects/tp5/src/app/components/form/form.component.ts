import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public f=new FormGroup({
    id:new FormControl('',[Validators.required]),
    nom:new FormControl('',[Validators.required]),
    age:new FormControl('',[Validators.required])
  })
  constructor(private s:UserService,private router:Router) { }

  ngOnInit() {
  }
  public onAdd(){
    let user=new User();
    user.id=this.f.get("id").value;
    user.nom=this.f.get("nom").value;
    user.age=this.f.get("age").value;
    this.s.add(user).subscribe(data=>{
      this.f.reset();
      console.log(data)
      this.router.navigateByUrl("/list")
    },err=>{
      alert("id already exist")
    })
  }
  public onReset(){
    this.f.reset();
  }

}
