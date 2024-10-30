import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonicModule, RouterModule]
})
export class Tab2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isFollowing = false;
  buttonText = 'Follow';
  buttonColor = 'primary'; // Initial color

  toggleFollow() {
    this.isFollowing = !this.isFollowing;
    this.buttonText = this.isFollowing ? 'Unfollow' : 'Follow';
    this.buttonColor = this.isFollowing ? 'medium' : 'primary'; // Change colors as needed
  }

  isFollowing1 = false;
  buttonText1 = 'Follow';
  buttonColor1 = 'primary'; // Initial color

  toggleFollow1() {
    this.isFollowing1 = !this.isFollowing1;
    this.buttonText1 = this.isFollowing1 ? 'Unfollow' : 'Follow';
    this.buttonColor1 = this.isFollowing1 ? 'medium' : 'primary'; // Change colors as needed
  }

  isFollowing2 = false;
  buttonText2 = 'Follow';
  buttonColor2 = 'primary'; // Initial color

  toggleFollow2() {
    this.isFollowing2 = !this.isFollowing2;
    this.buttonText2 = this.isFollowing2 ? 'Unfollow' : 'Follow';
    this.buttonColor2 = this.isFollowing2 ? 'medium' : 'primary'; // Change colors as needed
  }



}
