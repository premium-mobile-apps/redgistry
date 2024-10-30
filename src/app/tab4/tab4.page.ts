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
  buttonText = 'Join group';
  buttonColor = 'primary'; // Initial color

  toggleJoin() {
    this.isJoined = !this.isJoined;
    this.buttonText = this.isJoined ? 'Leave group' : 'Join group';
    this.buttonColor = this.isJoined ? 'medium' : 'primary'; // Change colors as needed
  }

  isJoined1 = false;
  buttonText1 = 'Join group';
  buttonColor1 = 'primary'; // Initial color

  toggleJoin1() {
    this.isJoined1 = !this.isJoined1;
    this.buttonText1 = this.isJoined1 ? 'Leave group' : 'Join group';
    this.buttonColor1 = this.isJoined1 ? 'medium' : 'primary'; // Change colors as needed
  }

  isJoined2 = false;
  buttonText2 = 'Join group';
  buttonColor2 = 'primary'; // Initial color

  toggleJoin2() {
    this.isJoined2 = !this.isJoined2;
    this.buttonText2 = this.isJoined2 ? 'Leave group' : 'Join group';
    this.buttonColor2 = this.isJoined2 ? 'medium' : 'primary'; // Change colors as needed
  }

  isJoined3 = false;
  buttonText3 = 'Join group';
  buttonColor3 = 'primary'; // Initial color

  toggleJoin3() {
    this.isJoined3 = !this.isJoined3;
    this.buttonText3 = this.isJoined3 ? 'Leave group' : 'Join group';
    this.buttonColor3 = this.isJoined3 ? 'medium' : 'primary'; // Change colors as needed
  }

  isJoined4 = false;
  buttonText4 = 'Join group';
  buttonColor4 = 'primary'; // Initial color

  toggleJoin4() {
    this.isJoined4 = !this.isJoined4;
    this.buttonText4 = this.isJoined4 ? 'Leave group' : 'Join group';
    this.buttonColor4 = this.isJoined4 ? 'medium' : 'primary'; // Change colors as needed
  }

  isJoined5 = false;
  buttonText5 = 'Join group';
  buttonColor5 = 'primary'; // Initial color

  toggleJoin5() {
    this.isJoined5 = !this.isJoined5;
    this.buttonText5 = this.isJoined5 ? 'Leave group' : 'Join group';
    this.buttonColor5 = this.isJoined5 ? 'medium' : 'primary'; // Change colors as needed
  }

  isJoined6 = false;
  buttonText6 = 'Join group';
  buttonColor6 = 'primary'; // Initial color

  toggleJoin6() {
    this.isJoined6 = !this.isJoined6;
    this.buttonText6 = this.isJoined6 ? 'Leave group' : 'Join group';
    this.buttonColor6 = this.isJoined6 ? 'medium' : 'primary'; // Change colors as needed
  }

  isJoined7 = false;
  buttonText7 = 'Join group';
  buttonColor7 = 'primary'; // Initial color

  toggleJoin7() {
    this.isJoined7 = !this.isJoined7;
    this.buttonText7 = this.isJoined7 ? 'Leave group' : 'Join group';
    this.buttonColor7 = this.isJoined7 ? 'medium' : 'primary'; // Change colors as needed
  }

  isJoined8 = false;
  buttonText8 = 'Join group';
  buttonColor8 = 'primary'; // Initial color

  toggleJoin8() {
    this.isJoined8 = !this.isJoined8;
    this.buttonText8 = this.isJoined8 ? 'Leave group' : 'Join group';
    this.buttonColor8 = this.isJoined8 ? 'medium' : 'primary'; // Change colors as needed
  }
}
