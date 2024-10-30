import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonFooter } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonicModule,
    RouterModule, CommonModule, FormsModule, IonFooter],
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

  addLike = false;
  buttonText = '33';
  buttonColor = 'primary'; // Initial color

  toggleLike() {
    this.addLike = !this.addLike;
    this.buttonText = this.addLike ? '34' : '33';
    this.buttonColor = this.addLike ? 'medium' : 'primary'; // Change colors as needed
  }
}
