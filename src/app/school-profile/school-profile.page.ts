import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonFooter, IonHeader, IonToolbar, IonTitle, IonIcon
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { IonicModule, IonModal } from '@ionic/angular';


declare var google: any; // Declare `google` to avoid TypeScript errors


@Component({
  selector: 'app-school-profile',
  templateUrl: './school-profile.page.html',
  styleUrls: ['./school-profile.page.scss'],
  standalone: true,
  imports: [
    IonContent, CommonModule, FormsModule, IonFooter,
    RouterModule, IonicModule, IonHeader, IonToolbar, IonTitle, IonIcon
  ]
})



export class SchoolProfilePage {
  selectedSegment: string = 'tab1';  // Initial value for the selected tab
  showFullContent = false;
  showFullContent1 = false;
  showFullContent2 = false;



  constructor() { }


  /**
   * Runs after the page has fully entered and the DOM is available.
   */
  ionViewDidEnter() {
    this.loadGoogleCharts();
  }
  

  /**
   * Dynamically loads the Google Charts library
   */
  loadGoogleCharts() {
    if (typeof google === 'undefined' || !google.charts) {
      console.error('Google Charts library is not loaded. Ensure the script is added to index.html.');
      return;
    }
  
    google.charts.load('current', { packages: ['corechart'] });
  
    // Polling interval to check for reload completion
    const pollInterval = 100; // Check every 100ms
    let elapsedTime = 0;
    const maxWaitTime = 35000; // Maximum wait time of 35 seconds
  
    const intervalId = setInterval(() => {
      elapsedTime += pollInterval;
  
      const chartContainer = document.getElementById('demographicChart');
      if (chartContainer) {
        clearInterval(intervalId); // Stop checking
        google.charts.setOnLoadCallback(() => this.drawChart()); // Load the chart
      }
  
      if (elapsedTime >= maxWaitTime) {
        clearInterval(intervalId);
        console.error('Chart container not found after 35 seconds.');
      }
    }, pollInterval);
  }
  
  
  

  /**
   * Draws a PieChart with demographic data
   */
  drawChart() {
    try {
      const data = google.visualization.arrayToDataTable([
        ['Race', 'Amount', { role: 'tooltip', type: 'string' }],
        ['White', 54.8, 'White: 37.6%'],
        ['Asian', 48.6, 'Asian: 33.3%'],
        ['Hispanic', 23.9, 'Hispanic: 16.4%'],
        ['Black', 18.5, 'Black: 12.7%']
      ]);

      const options = {
        is3D: true,
        legend: { position: 'bottom', alignment: 'center', textStyle: {fontSize: 16, bold: true} },
        chartArea: { width: '100%', height: '80%' }
      };

      const container = document.getElementById('demographicChart');
      if (!container) {
        throw new Error('Chart container not found in DOM.');
      }

      const chart = new google.visualization.PieChart(container);
      chart.draw(data, options);
    } catch (error) {
      console.error('Error drawing the chart:', error);
    }
  }

  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
  }

  toggleContent() {
    this.showFullContent = !this.showFullContent;
  }

  toggleContent1() {
    this.showFullContent1 = !this.showFullContent1;
  }

  toggleContent2() {
    this.showFullContent2 = !this.showFullContent2;
  }

  isFollowing = false;
  buttonText = 'Follow';
  buttonColor = 'primary'; // Initial color

  toggleFollow() {
    this.isFollowing = !this.isFollowing;
    this.buttonText = this.isFollowing ? 'Unfollow' : 'Follow';
    this.buttonColor = this.isFollowing ? 'medium' : 'primary'; // Change colors as needed
  }

  @ViewChild(IonModal) modal!: IonModal;

  name!: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  addLike = false;
  likeButtonText = '33';
  likeButtonColor = 'primary'; // Initial color

  toggleLike() {
    this.addLike = !this.addLike;
    this.likeButtonText = this.addLike ? '34' : '33';
    this.likeButtonColor = this.addLike ? 'medium' : 'primary'; // Change colors as needed
  }

  addLike1 = false;
  likeButtonText1 = '33';
  likeButtonColor1 = 'primary'; // Initial color

  toggleLike1() {
    this.addLike1 = !this.addLike;
    this.likeButtonText1 = this.addLike1 ? '34' : '33';
    this.likeButtonColor1 = this.addLike1 ? 'medium' : 'primary'; // Change colors as needed
  }

  addLike2 = false;
  likeButtonText2 = '33';
  likeButtonColor2 = 'primary'; // Initial color

  toggleLike2() {
    this.addLike2 = !this.addLike;
    this.likeButtonText2 = this.addLike2 ? '34' : '33';
    this.likeButtonColor2 = this.addLike2 ? 'medium' : 'primary'; // Change colors as needed
  }

  // Array of events with title, image, and initial state
  events = [
    {
      title: 'Artificial Intelligence Innovation Summit',
      image: 'https://raw.githubusercontent.com/premium-mobile-apps/redgistry/master/src/assets/images/nw-school-events-1.png',
      isAttending: false
    },
    {
      title: "Women's Health Tech Wednesday",
      image: 'https://raw.githubusercontent.com/premium-mobile-apps/redgistry/master/src/assets/images/nw-school-events-3.png',
      isAttending: false
    },
    {
      title: 'Best Practices for Networking on Zoom',
      image: 'https://raw.githubusercontent.com/premium-mobile-apps/redgistry/master/src/assets/images/nw-school-events-2.png',
      isAttending: false
    }
  ];

  // Update attendance status (optional additional logic)
  updateAttendance(event: any) {
    console.log(
      `${event.title} attendance status changed to: ${event.isAttending ? 'Attending' : 'Not Attending'}`
    );
    // Add any additional logic here if needed
  }

  

}
