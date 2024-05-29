import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api/api.service';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-ejercicio4',
  templateUrl: './ejercicio4.component.html',
  styleUrls: ['./ejercicio4.component.css']
})
export class Ejercicio4Component implements OnInit {
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
    this.apiService.ejercicio3().subscribe(
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
    const populationData = this.paises.map(pais => pais.PopulationIncrease);
    const growthData = this.paises.map(pais => pais.GrowthPercentage);

    const backgroundColors = this.paises.map((_, index) => this.getColor(index));
    const borderColors = this.paises.map((_, index) => this.getBorderColor(index));

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
        label: 'Porcentaje de Crecimiento',
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



