import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonFooter, IonHeader, IonToolbar, IonTitle, IonIcon
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import Swiper from 'swiper';

import { Navigation, Pagination } from 'swiper/modules';

// Install Swiper modules
Swiper.use([Navigation, Pagination]);

@Component({
  selector: 'app-parent-profile',
  templateUrl: './parent-profile.page.html',
  styleUrls: ['./parent-profile.page.scss'],
  standalone: true,
  imports: [
    IonContent, CommonModule, FormsModule, IonFooter,
    RouterModule, IonicModule, IonHeader, IonToolbar, IonTitle, IonIcon
  ]
})
export class ParentProfilePage implements OnInit {

  constructor() { }

  swiperConfig = {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: true,
    pagination: { clickable: true },
  };

  ngOnInit() {
//    const swiper = new Swiper('.swiper', {
      // configure Swiper to use modules
//      modules: [Navigation, Pagination],
//    });
  }

}
