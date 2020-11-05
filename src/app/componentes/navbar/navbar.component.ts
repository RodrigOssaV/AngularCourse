import { Component, OnInit } from '@angular/core';

/** Esto es un decorador
 * patrón de diseño estructural que permite añadir funcionalidades
 * a objetos dentro de objetos.
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
