import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-age',
  standalone: true,
  imports: [ChartModule, HighchartsChartModule],
  templateUrl: './age.component.html',
  styleUrl: './age.component.scss'
})

export class AgeComponent {
  Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'pie',
      height: 325,
    },
    title: {
      text: 'Idade'
    },
    xAxis: {
      categories: [
        'Infantil',
        'Jovem',
        'Adulto',
        'Idoso',
      ]
    },
    yAxis: {
      title: {
        text: 'Revenue in %'
      }
    },
    series: [
     {
      type: 'pie',
      data: [
        {
          name: 'Infantil',
          y: 4.0,
          color: '#044342',
        },
        {
          name: 'Jovem',
          y: 23.8,
          color: '#7e0505',
        },
        {
          name: 'Adulto',
          y: 41.0,
          color: '#ed9e20',
        },
        {
          name: 'Idoso',
          y: 31.2,
          color: '#6920fb',
        },
      ]
     }
    ],
    credits: {
      enabled: false
    }
  }
}
