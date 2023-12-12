import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(private router: Router) {}

  onLogout(): void{
    localStorage.removeItem("activeToken");
    localStorage.removeItem("uid");
    localStorage.removeItem("firstname");
    localStorage.removeItem("lastname");
    localStorage.removeItem("email");
    localStorage.removeItem("phonenumber");

    alert("LOGOUT: \n activeToken: "+localStorage.getItem("activeToken")+"\n uid: "+ localStorage.getItem("uid")+"\n firstname: "+localStorage.getItem("firstname")+"\n lastname: "+localStorage.getItem("lastname")+"\n email: "+localStorage.getItem("email")+"\n phonenumber: "+localStorage.getItem("phonenumber"));

    this.router.navigate(["login"]);
  }
}
