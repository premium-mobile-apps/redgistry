import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonicModule, RouterModule, CommonModule],
})
export class Tab1Page {
  showFullContent = false;
  showFullContent1 = false;
  showFullContent2 = false;

  
  constructor() {}

  toggleContent() {
    this.showFullContent = !this.showFullContent;
  }
  toggleContent1() {
    this.showFullContent1 = !this.showFullContent1;
  }
  toggleContent2() {
    this.showFullContent2 = !this.showFullContent2;
  }
}
