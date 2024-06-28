import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonFooter
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  imports: [
    IonContent, CommonModule, FormsModule, IonFooter, RouterModule
  ]
})
export class WelcomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
