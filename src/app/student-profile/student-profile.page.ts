import { Component, ViewChild } from '@angular/core';
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
  ],
})
export class StudentProfilePage {
  @ViewChild(IonContent, { static: false }) content: IonContent | undefined;

  constructor() {}

  scrollToSection(event: Event) {
    event.preventDefault();
    const target = event.currentTarget as HTMLElement;
    const targetId = target.getAttribute('data-target');
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element && this.content) {
        const yOffset = element.offsetTop - 20; // Adjust for any offset or padding
        this.content.scrollToPoint(0, yOffset, 500); // Smoothly scroll to the top of the section
      }
    }

    // Remove 'active' class from all links
    const links = document.querySelectorAll('.nav-menu a');
    links.forEach(link => link.classList.remove('active'));

    // Add 'active' class to clicked link
    target.classList.add('active');
  }
}