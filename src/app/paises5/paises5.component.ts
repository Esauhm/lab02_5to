import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api/api.service';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-paises5',
  templateUrl: './paises5.component.html',
  styleUrl: './paises5.component.css'
})
export class Paises5Component implements OnInit {

  // para barras
  paises: any[] = [];
  barChartLabels: string[] = [];
  barChartData: ChartDataset<'bar'>[] = [{ data: [], label: 'Population' }];

  paisfilter: any = {Country: ''};
  page: number = 1;


  



  // lo demás
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.Obtener5PaisesPoblados().subscribe(
      (data: any) => {
        if (data) {
          this.paises = data;
          this.prepareBarChartData();
        }
      },
      (error) => {
        console.log('Error al obtener los datos:', error);
      }
    );
  }

  prepareBarChartData(): void {
    this.barChartLabels = this.paises.map(pais => pais.Country);
    const populationData = this.paises.map(pais => pais.populationIncrease);
    const backgroundColors = this.paises.map((_, index) => this.getColor(index));
    const borderColors = this.paises.map((_, index) => this.getBorderColor(index));

    this.barChartData = [
      {
        data: populationData,
        label: 'Población',
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1
      }
    ];
  }



  getColor(index: number): string {
    const colors = [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)'
    ];
    return colors[index % colors.length];
  }

  getBorderColor(index: number): string {
    const colors = [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)'
    ];
    return colors[index % colors.length];
  }
}

