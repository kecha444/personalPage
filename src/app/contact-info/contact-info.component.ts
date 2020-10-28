import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

         myContactInfo: ContactInfo = {
         	mobilePhone: "+7 (951) 755-00-55",
         	workPhone: "+7 (863) 755-00-55",
         	email: "harold@mail.ru"
         }
         

  constructor() { }

  ngOnInit(): void {
  }

}

    export class ContactInfo {
	mobilePhone: string;
	workPhone: string;
	email: string;
}
