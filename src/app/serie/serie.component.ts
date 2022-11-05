import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './serieData';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  series: Array<Serie> = [];
  promedio: Number = 0;
  constructor() { }
  getSerieList(): Array<Serie> {
    return dataSeries;
  }
  mostrarEstadisticas(series: Array<Serie>):Number
  {
    let promedio: number = 0;
    for(let index = 0; index < series.length; index++)
    {
        let serieAct: Serie = series[index];
        promedio += serieAct.seasons;
    }
    promedio = promedio/series.length;
    return promedio
  }
  ngOnInit() {
    this.series = this.getSerieList();
    this.promedio = this.mostrarEstadisticas(this.getSerieList());
  }

}
