import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'app-gender',
  standalone: true,
  imports: [
    HighchartsChartModule,
  ],
  templateUrl: './gender.component.html',
  styleUrl: './gender.component.scss'
})

export class GenderComponent {
  HighchartsGender = Highcharts;
  chartOptionsGender: Highcharts.Options = {
    chart: {
      type: 'pie',
      width: 400,
      height: 250,
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
