import { Component, OnInit } from '@angular/core';
import { EXP } from '../mock-exp-items';
@Component({
  selector: 'app-work-exp',
  templateUrl: './work-exp.component.html',
  styleUrls: ['./work-exp.component.css']
})
export class WorkExpComponent implements OnInit {

	expList = EXP;
	selectedItem: WorkExpOne;

	onSelect(item: WorkExpOne):void {
		this.selectedItem = item;
	}

  constructor() { }

  ngOnInit(): void {
  }

}

export class WorkExpOne{
	id: number;
	organization: string;
	startData: string;
	endData: string;
	description: string;
	siteLink: string;
}
