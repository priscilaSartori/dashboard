import { Component } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [ChartModule, HighchartsChartModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})
export class LocationComponent {
  HighchartsLocation = Highcharts;
  chartOptionsLocation: Highcharts.Options = {
    chart: {
      type: 'bar',
      height: 225
    },
    title: {
      text: 'Localização'
    },
    xAxis: {
      categories: [
        'Rio de Janeiro',
        'São Paulo',
        'Salvador',
        'Curitiba',
        'Fortaleza',
        'Belo Horizonte',
        'Manaus',
      ]
    },
    yAxis: {
      title: {
        text: ''
      }
    },
    series: [
     {
      type: 'bar',
      showInLegend: false,
      data: [
        {
          name: 'Rio de Janeiro',
          y: 31.0,
          color: '#044342',
        },
        {
          name: 'São Paulo',
          y: 33.8,
          color: '#7e0505',
        },
        {
          name: 'Salvador',
          y: 11.0,
          color: '#ed9e20',
        },
        {
          name: 'Curitiba',
          y: 5.8,
          color: '#6920fb',
        },
        {
          name: 'Fortaleza',
          y: 3.0,
          color: '#121212',
        },
        {
          name: 'Belo Horizonte',
          y: 13.8,
          color: '#00008B',
        },
        {
          name: 'Manaus',
          y: 1.6,
          color: '#D2691E',
        },
      ]
     }
    ],
    credits: {
      enabled: false
    }
  }
}
