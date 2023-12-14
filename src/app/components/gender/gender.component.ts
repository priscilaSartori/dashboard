import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-gender',
  standalone: true,
  imports: [ChartModule, HighchartsChartModule],
  templateUrl: './gender.component.html',
  styleUrl: './gender.component.scss'
})

export class GenderComponent {
  HighchartsGender = Highcharts;
  chartOptionsGender: Highcharts.Options = {
    chart: {
      type: 'pie',
      height: 325,
    },
    title: {
      text: 'Gênero'
    },
    xAxis: {
      categories: [
        'Masculino',
        'Feminino',
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
          name: 'Masculino',
          y: 41.0,
          color: '#0000FF',
        },
        {
          name: 'Feminino',
          y: 59.0,
          color: '#FF00FF',
        }
      ]
     }
    ],
    credits: {
      enabled: false
    }
  }
}
