import { Component, AfterViewInit, ElementRef, ViewChild, inject } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { IUserData } from 'src/app/interfaces/user-data';
import { UserService } from 'src/app/services/user.service';

Chart.register(...registerables);

@Component({
  selector: 'app-user-chart',
  templateUrl: './user-chart.component.html',
  styleUrls: ['./user-chart.component.scss']
})
export class UserChartComponent implements AfterViewInit {

  @ViewChild('pieChart') pieChart!: ElementRef;
  userService = inject(UserService);
  userData: IUserData[] = [];
  chart!: Chart;

  ngAfterViewInit() {
    // Subscribe to user data updates
    this.userService.userData$.subscribe((data) => {
      this.userData = data;
      this.updateChart();  // Update chart when data changes
    });

    // Initial render
    this.renderChart();
  }

renderChart() {
  const { labels, data } = this.getChartData();

  this.chart = new Chart(this.pieChart.nativeElement, {
    type: 'pie',
    data: {
      labels,
      datasets: [
        {
          label: 'User Roles',
          data,
          backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff'],
          hoverOffset: 4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            color: '#f9f9f9',
            font: {
              size: 14,
            }
          }
        }
      }
    }
  });
}


  updateChart() {
    if (this.chart) {
      const { labels, data } = this.getChartData();
      this.chart.data.labels = labels;
      this.chart.data.datasets[0].data = data;
      this.chart.update();
    }
  }

  getChartData() {
    const roleCounts: { [key: string]: number } = {};

    // Count occurrences of each role
    this.userData.forEach(user => {
      roleCounts[user.role] = (roleCounts[user.role] || 0) + 1;
    });

    return {
      labels: Object.keys(roleCounts),
      data: Object.values(roleCounts)
    };
  }
}
