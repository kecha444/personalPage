import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

 skillsTitle: string = "Умения и навыки";
 skills: string[] = ["HTML", "CSS", "Bootstrap", "JavaScript", "Angular", "PHP", "MySQL", "Laravel", "Стрессоустойчивость" ];


  constructor() { }

  ngOnInit(): void {
  }

}
