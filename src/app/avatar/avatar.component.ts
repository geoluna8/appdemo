import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
@Input('datos') public user;

	banderaINIT: boolean;

  constructor() { }

  ngOnInit() {
  	console.log("On Init de componente avatar")
  	this.banderaINIT = false;
  }

  quitarComponente(){
  	this.banderaINIT = !this.banderaINIT;
  }

}
