import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  appear = false;
  toggle() {
    this.appear = !this.appear;
  }

  goTo(url: string) {
    window.open(url, '_blank');
  }
}
