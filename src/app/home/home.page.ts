import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  private currentUrl = ''; 

  async openLink() {
    this.currentUrl = 'https://www.flipkart.com/';
    console.log(`Opening URL: ${this.currentUrl}`);

    // Open the InAppBrowser
    await Browser.open({
      url: this.currentUrl,
      presentationStyle: 'fullscreen', 
      toolbarColor: '#3880ff',      
    });

    // Listen for when the browser is closed
    Browser.addListener('browserFinished', () => {
      console.log(`Browser closed. Last visited URL: ${this.currentUrl}`);
    });

    // Optionally, listen for page load events
    Browser.addListener('browserPageLoaded', () => {
      console.log('Page loaded in the browser.');
    });
  }
}
