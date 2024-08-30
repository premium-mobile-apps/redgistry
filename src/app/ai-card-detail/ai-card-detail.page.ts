import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon } from '@ionic/angular/standalone';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ai-card-detail',
  templateUrl: './ai-card-detail.page.html',
  styleUrls: ['./ai-card-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, IonIcon, FormsModule]
})
export class AICardDetailPage {

  @Input() card: any;

  constructor(private modalController: ModalController) {}

  close() {
    this.modalController.dismiss();
  }

}
