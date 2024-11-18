import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonFooter } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonicModule, IonFooter, RouterModule, CommonModule, FormsModule],
})
export class Tab4Page {
  constructor() {}

  isJoined = false;
  buttonText = 'Leave Group';
  buttonColor = 'primary'; // Initial color

  toggleJoin() {
    this.isJoined = !this.isJoined;
    this.buttonText = this.isJoined ? 'Join Group' : 'Leave Group';
    this.buttonColor = this.isJoined ? 'medium' : 'primary'; // Change colors as needed
  }

  isJoined1 = false;
  buttonText1 = 'Leave Group';
  buttonColor1 = 'primary'; // Initial color

  toggleJoin1() {
    this.isJoined1 = !this.isJoined1;
    this.buttonText1 = this.isJoined1 ? 'Join Group' : 'Leave Group';
    this.buttonColor1 = this.isJoined1 ? 'medium' : 'primary'; // Change colors as needed
  }

  isJoined2 = false;
  buttonText2 = 'Leave Group';
  buttonColor2 = 'primary'; // Initial color

  toggleJoin2() {
    this.isJoined2 = !this.isJoined2;
    this.buttonText2 = this.isJoined2 ? 'Join Group' : 'Leave Group';
    this.buttonColor2 = this.isJoined2 ? 'medium' : 'primary'; // Change colors as needed
  }

}
