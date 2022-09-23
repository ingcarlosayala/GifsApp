import { Component, OnInit } from '@angular/core';
import { Data, Gifs } from '../../interfaces/gifs.interfaces';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  termino:string = '';
  listados:Data[] = [];

  constructor(private gifsService:GifsService) { }

  ngOnInit(): void {
  }

  buscar(){
    if (this.termino.length > 0) {
      this.gifsService.buscar(this.termino)
          .subscribe(gifs => {
            console.log(gifs);
            this.listados = gifs.data;
          })
    }
    this.termino = '';
  }

}
