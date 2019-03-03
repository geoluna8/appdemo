import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-prueba-destroy',
  templateUrl: './prueba-destroy.component.html',
  styleUrls: ['./prueba-destroy.component.css']
})
export class PruebaDestroyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	console.log("Construido n_n");
  }

  ngOnDestroy() {
  	console.log("Destruido x_x");
  }

}
