import { Component } from '@angular/core';
import {Cliente} from './cliente';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //primeras variables
  title = 'my-app';
  subtitle = 'mi primer proyecto Angular';
  enlace = 'https://www.code3e.com/';
  is_online: boolean;
  users_online = 23;
  user: any;
  public avatar: string;
  public clientes: Object;
  //función
  public miFuncion(x): void{
  	console.log(x);
  	alert("Datos enviados");
  }
  //pipes
  a: number;
  b: number;
  fecha : Date = new Date();
  texto = "TEXTO";
  pi: number = Math.PI;
  //ngIf
  mostrar_mensaje = true;
  n1: number = 10;
  n2: number = 10;
  n3: number = 6;
  n4: number = 13;
  Negar: boolean = false;

  public comparar(): boolean{
    if(this.n1>this.n3){
      return true;
    } else{
      return false;
    }
  }

  productos: string[] =["coca","etc"];

  //ngSwitch
  opcion: number;
  //ngFor  
  public numeros: number[] = [15,17,21,12,23];
  public cadenas: string[] = ["Geovanny","Mariana","Virgi"];
  public distintos: any[] = ["Carlos","20","Jorge","25",true,new Date()];
  public puntajes: number[] = [21522,51723,42500,1518,156];
  public familia: string[] = ["Jorge","Carlos","Geovanny"];
  public amigos: string[] = ["Pedro","Luis","Maria"];
  opcion2: number;
  //Tablas
  public clientela : object[] =[ 
    {"nombre":"Geovanny","apellido":"Luna",
    "telefono":"1585155","ciudad":"Tepic",
    "cp":"16151","avatar":"http://lorempixel.com/100/100/?1",
    "compras":["ASD4564","RGREGRT165","BNBF1651"]},
    {"nombre":"Carlos","apellido":"Pulido",
    "telefono":"68616","ciudad":"CDMX",
    "cp":"4545","avatar":"http://lorempixel.com/100/100/?2",
    "compras":["ASD4564","RGREGRT165","BNBF1651"]},
    {"nombre":"Laura","apellido":"Martinez",
    "telefono":"651651","ciudad":"Chihuahua","cp":"4545",
    "avatar":"http://lorempixel.com/100/100/?3",
    "compras":["ASD4564","RGREGRT165","BNBF1651"]},
    {"nombre":"Mariana","apellido":"Dayana",
    "telefono":"651651","ciudad":"Leon","cp":"4545",
    "avatar":"http://lorempixel.com/100/100/?4"}
  ];
  public clienteDato: Cliente;

  public info(cliente: Cliente):void{
    console.log(cliente);
    this.clienteDato = cliente;
    //console.log(this.clienteDato);
  }

  public eliminar(cliente: Cliente):void{
    let index = this.clientela.indexOf(cliente);
    this.clientela.splice(index,1);
  }

  public guardarDatos():void{
    alert("Cambios guardados!");
    console.log("datos enviados");
    console.log(this.clienteDato);
  }

  //Custom pipes
  public letras = ["B","D","A","C"];
  term: string = "";

  //Manipulación de estilo
  fuenteGrande: string = "3em";
  colorFondo: string = "pink";

  mensajebtn: string = "Suscribete!";
  esta_suscrito = false;
  public suscribir(): void{
    this.esta_suscrito = !this.esta_suscrito;
    this.mensajebtn = this.esta_suscrito ? 'Estas suscrito' : 'Suscribete';
  }

  public columnas: string;
  public clases_imagenes: string;
  public imagenes: Object[];
  cambia_columnas = false;
  mensajebtn2: string = "Cambiar columnas";
  public asignarColumnas(): void{
    this.cambia_columnas = !this.cambia_columnas;
    this.columnas = this.cambia_columnas ? 'col-md-3 col-sm-3 col-xs-12 auto-width' : 'col-md-4 col-sm-4 col-xs-12 auto-width';
  }

  //Interfaces
    usuario =
    {"id":"1","name":"Geovanny Luna",
     "username":"geoluna","avatar":"http://lorempixel.com/400/200/?6",
     "edad":"28"};

  //Combinar componentes

  posts = [
    {"created_at": new Date(),
    "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "imagen":"http://lorempixel.com/100/100/?1",
    "username":"geoluna",
    "name":"Geovanny Luna"},
    {"created_at": new Date(),
    "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "imagen":"http://lorempixel.com/100/100/?2",
    "username":"rules99",
    "name":"Rolando Mota"},
    {"created_at": new Date(),
    "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "imagen":"http://lorempixel.com/100/100/?3",
    "username":"pulpFictionFan",
    "name":"Vincent Vega"},
    {"created_at": new Date(),
    "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "imagen":"http://lorempixel.com/100/100/?4",
    "username":"roma",
    "name":"Alfonso Cuaron"}
  ];  

constructor() {
  //primeras variables
	this.avatar = "http://lorempixel.com/400/400/cats/";
	this.user =  {"Nombre":"Geovanny","ApellidoPaterno":"Virgen","ApellidoMaterno":"Luna","last_signin":new Date(),"Ciudad":"Tepic","Estado":"Nayarit"};
  this.clientes =[
      {"id":1, "nombre":"Geovanny", "estado":"Nayarit"},
      {"id":2, "nombre":"Maria", "estado":"CDMX"},
      {"id":3, "nombre":"Harry", "estado":"New york"}
  ];  
  //pipes
  this.a=0.259;
  this.b=625;
  //tablas
  this.clienteDato = {"nombre":"","apellido":"",
    "telefono":"","ciudad":"",
    "cp":"","avatar":"",
    "compras":[""]};
  //Manipulación de estilos
    this.columnas = "col-md-4 col-sm-4 col-xs-12 auto-width";
    this.clases_imagenes = "img-thumbnail"
    this.imagenes = [
      {"imagen":"http://lorempixel.com/400/200/?1","descripcion":"Imagen muestra"},
      {"imagen":"http://lorempixel.com/400/200/?2","descripcion":"Imagen muestra"},
      {"imagen":"http://lorempixel.com/400/200/?3","descripcion":"Imagen muestra"},
      {"imagen":"http://lorempixel.com/400/200/?4","descripcion":"Imagen muestra"}
    ];

}//fin de constructor

}//fin de clase del componente