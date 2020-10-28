import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
 myInfo: PersonalInfo = {
	firstName: "Гарольд",
	secondName: "Олафсон",
	aboutInfo: "Отлично справляюсь с работой? Умею работать в команде",
	photoSrc: "../../assets/images/foto.jpg",
    birthday: new Date(1995,5,12),
	family: 3,
	kids: false
}
  constructor() { }

  ngOnInit(): void {
  }

}

export class PersonalInfo{
	firstName: string;
	secondName: string;
	aboutInfo: string;
	photoSrc: string;
    birthday: any;
	family: number;
	kids: boolean;
}
//создали класс на typescript 