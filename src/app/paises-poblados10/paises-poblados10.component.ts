import { ApiService } from '../servicios/api/api.service';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paises-poblados10',
  templateUrl: './paises-poblados10.component.html',
  styleUrls: ['./paises-poblados10.component.css']
})
export class PaisesPoblados10Component implements OnInit {

  // para pastel
  paises: any[] = [];
  page: number = 1;
  pieChartLabels: string[] = [];
  pieChartData: ChartDataset<'pie'>[] = [{ data: [], label: 'Población' }];
  pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
  };
  pieChartType: ChartType = 'pie';
  paisfilter: any = {Pais: ''};

  // lo demás
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.Obtener10PaisesPoblados().subscribe(
      (data: any) => {
        if (data) {
          this.paises = data;
          this.preparePieChartData();
        }
      },
      (error) => {
        console.log('Error al obtener los datos:', error);
      }
    );
  }

  preparePieChartData(): void {
    this.pieChartLabels = this.paises.map(pais => pais.Pais);
    this.pieChartData = [
      {
        data: this.paises.map(pais => pais.Poblacion),
        backgroundColor: this.paises.map((_, index) => this.getColor(index)),
        borderColor: this.paises.map((_, index) => this.getBorderColor(index)),
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
