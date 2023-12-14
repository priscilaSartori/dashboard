import { Component } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-interest',
  standalone: true,
  imports: [ChartModule, HighchartsChartModule],
  templateUrl: './interest.component.html',
  styleUrl: './interest.component.scss'
})
export class InterestComponent {
  HighchartsInterest = Highcharts;
  chartOptionsInterest: Highcharts.Options = {
    chart: {
      type: 'line',
      height: 325
    },
    title: {
      text: 'Interesses'
    },
    xAxis: {
      categories: [
        'Youtube',
        'Instagran',
        'Twiter',
        'TikTok',
      ]
    },
    yAxis: {
      title: {
        text: 'Revenue in $'
      }
    },
    series: [
      {
        name: "Comidas e bebidas",
        type: "line",
        color: '#044342',
        data: [40, 26, 42, 40]
      },
      {
        name: 'Compras e moda',
        type: 'line',
        color: '#7e0505',
        data: [27, 52, 44, 35]
      },
      {
        name: 'Entretenimento',
        type: 'line',
        color: '#ed9e20',
        data: [33, 22, 14, 25]
      },
    ],
    credits: {
      enabled: false
    }
  }
}
