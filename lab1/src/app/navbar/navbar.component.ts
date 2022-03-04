import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name = "Rahma Ahmed";
  jobTitle = "Web Devolpoer";
  coursesPercentages = ["100%", "50%", "70%", "80%", "45%", "66%"];
  courses = [
    {
      name : "Web design",
      background: "gray" 
    },
    {
      name : "Mobile Design",
      background: "black" 
    },
    {
      name : "Logo Design",
      background: "gray" 
    },
    {
      name : "Web Application Development",
      background: "black" 
    },
    {
      name : "Mobile Application Development",
      background: "gray" 
    },
    {
      name : "PWA Development",
      background: "black" 
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
