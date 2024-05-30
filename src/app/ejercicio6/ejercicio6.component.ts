import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api/api.service';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-ejercicio6',
  templateUrl: './ejercicio6.component.html',
  styleUrl: './ejercicio6.component.css'
})
export class Ejercicio6Component {
  paises: any[] = [];
  barChartLabels: string[] = [];
  barChartDataPopulation: ChartDataset<'bar'>[] = [{ data: [], label: 'Population Increase' }];
  barChartDataGrowth: ChartDataset<'bar'>[] = [{ data: [], label: 'Growth Percentage' }];

  paisfilter: any = {Country: ''};
  page: number = 1;

  barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    scales: {
      x: {},
      y: {
        beginAtZero: true
      }
    }
  };

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.ejercicio5().subscribe(
      (data: any) => {
        if (data) {
          this.paises = data
          this.prepareBarChartData();
        }
      },
      (error) => {
        console.log('Error al obtener los datos:', error);
      }
    );
  }

  prepareBarChartData(): void {
    const top10Paises = this.paises.slice(0, 10);
    this.barChartLabels = top10Paises.map(pais => pais.Country);
    const populationData = top10Paises.map(pais => pais.populationIncrease);
    const growthData = top10Paises.map(pais => pais.percentageIncrease);

    const backgroundColors = top10Paises.map((_, index) => this.getColor(index));
    const borderColors = top10Paises.map((_, index) => this.getBorderColor(index));

    this.barChartDataPopulation = [
      {
        data: populationData,
        label: 'Incremento de Población',
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1
      }
    ];

    this.barChartDataGrowth = [
      {
        data: growthData,
        label: 'Porcentaje de Incremento',
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


