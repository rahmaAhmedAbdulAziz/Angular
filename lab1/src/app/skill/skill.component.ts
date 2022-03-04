import { Component,Input ,OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input() courseName = "";
@Input() background ="black";
  constructor() { }

  ngOnInit(): void {
  }

}
