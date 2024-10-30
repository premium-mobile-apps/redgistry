import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonFooter, IonHeader, IonToolbar, IonTitle, IonIcon
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { IonicModule, IonModal } from '@ionic/angular';




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



export class SchoolProfilePage implements OnInit {
  selectedSegment: string = 'tab1';  // Initial value for the selected tab
  showFullContent = false;

  constructor() { }

  ngOnInit() {
  }
  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
  }

  toggleContent() {
    this.showFullContent = !this.showFullContent;
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

}
