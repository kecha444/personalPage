import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-person',
  templateUrl: './about-person.component.html',
  styleUrls: ['./about-person.component.css']
})
export class AboutPersonComponent implements OnInit {

	AboutPersonTitle: string = 'Информация о интересах';

  constructor() { }

  ngOnInit(): void {
  }

}
