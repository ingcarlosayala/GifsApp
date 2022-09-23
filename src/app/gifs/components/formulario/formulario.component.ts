import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Gifs } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Input() termino:string = '';
  @Output() OnEnter:EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  buscar(){
    this.OnEnter.emit(this.termino);
    this.termino = '';
  }
}
