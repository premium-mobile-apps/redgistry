import { Component, QueryList, ViewChildren, AfterViewInit, OnInit, ElementRef } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon } from '@ionic/angular/standalone';
import { IonicModule, GestureController, ModalController } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AICardDetailPage } from '../ai-card-detail/ai-card-detail.page';  // Adjust the import path as necessary
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonicModule, RouterModule]
})
export class Tab2Page implements AfterViewInit, OnInit {
  @ViewChildren('cardElem', { read: ElementRef }) cardElems!: QueryList<ElementRef>;
  cards = [
    {
      title: 'Northwestern University',
      description: 'Click to learn more about Northwestern',
      fullDescription: 'This is the full description of card 1. It contains more detailed information.',
      image: 'https://i.ibb.co/BKK60Yb/nw-ai.jpg'
    },
    {
      title: 'Stanford University',
      description: 'Click to learn more about Stanford',
      fullDescription: 'This is the full description of card 2. It contains more detailed information.',
      image: 'https://i.ibb.co/F0z6M2m/su-ai.jpg'
    },
    {
      title: 'Purdue University',
      description: 'Click to learn more about Purdue',
      fullDescription: 'This is the full description of card 3. It contains more detailed information.',
      image: 'https://i.ibb.co/BqWzQKF/pu-ai.jpg'
    }
  ];
  

  isDesktop: boolean = window.innerWidth > 400;

  constructor(private gestureCtrl: GestureController, private modalController: ModalController) {}

  ngOnInit() {
    window.addEventListener('resize', () => {
      this.isDesktop = window.innerWidth > 400;
    });
  }

  ngAfterViewInit() {
    this.initGestures();
  }

  initGestures() {
    this.cardElems.forEach((card, index) => {
      const gesture = this.gestureCtrl.create({
        el: card.nativeElement,
        gestureName: 'swipe',
        onMove: ev => this.onCardMove(ev, card.nativeElement),
        onEnd: ev => this.onCardEnd(ev, card.nativeElement, index)
      });
      gesture.enable();
    });
  }

  onCardMove(ev: any, card: HTMLElement) {
    const deltaX = ev.deltaX;
    card.style.transform = `translateX(${deltaX}px) rotate(${deltaX / 10}deg)`;
  }

  onCardEnd(ev: any, card: HTMLElement, index: number) {
    const deltaX = ev.deltaX;
    if (Math.abs(deltaX) > 150) {
      card.style.transition = 'transform 0.5s ease-out';
      card.style.transform = `translateX(${deltaX > 0 ? 1000 : -1000}px) rotate(${deltaX / 10}deg)`;
      setTimeout(() => {
        const swipedCard = this.cards.shift();
        if (swipedCard) {
          this.cards.push(swipedCard); // Reinsert the swiped card at the end
        }
        // Reset the card's position and re-initialize gestures
        card.style.transition = 'none';
        card.style.transform = 'translateX(0) rotate(0)';
        this.initGestures();
      }, 500);
    } else {
      card.style.transition = 'transform 0.5s ease';
      card.style.transform = 'translateX(0) rotate(0)';
    }
  }

  async openDetails(card: any) {
    const modal = await this.modalController.create({
      component: AICardDetailPage,
      componentProps: { card }
    });
    return await modal.present();
  }
  

  swipeLeft() {
    const card = this.cardElems.first;
    this.onCardEnd({ deltaX: -200 }, card.nativeElement, 0);
  }

  swipeRight() {
    const card = this.cardElems.first;
    this.onCardEnd({ deltaX: 200 }, card.nativeElement, 0);
  }
}
