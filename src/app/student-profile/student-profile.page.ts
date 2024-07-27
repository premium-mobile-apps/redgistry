import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonFooter, IonHeader, IonToolbar, IonTitle, IonIcon
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';



@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.page.html',
  styleUrls: ['./student-profile.page.scss'],
  standalone: true,
  imports: [
    IonContent, CommonModule, FormsModule, IonFooter,
    RouterModule, IonicModule, IonHeader, IonToolbar, IonTitle, IonIcon
  ]})
export class StudentProfilePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  scrollToSection(event: Event) {
    event.preventDefault();
    const target = event.currentTarget as HTMLElement;
    const targetId = target.getAttribute('data-target');
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

}
