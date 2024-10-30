import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonFooter } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inbox-message',
  templateUrl: './inbox-message.page.html',
  styleUrls: ['./inbox-message.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonicModule,
    RouterModule, CommonModule, FormsModule, IonFooter]
  })
export class InboxMessagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
