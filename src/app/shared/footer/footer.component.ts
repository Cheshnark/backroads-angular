import { Component } from '@angular/core';
import { PhoneComponent } from '../../../assets/icons/phone/phone.component';
import { MailComponent } from '../../../assets/icons/mail/mail.component';
import { MapPinComponent } from '../../../assets/icons/map-pin/map-pin.component';
import { FacebookComponent } from '../../../assets/icons/facebook/facebook.component';
import { TwitterComponent } from '../../../assets/icons/twitter/twitter.component';
import { LinkedinComponent } from '../../../assets/icons/linkedin/linkedin.component';
import { InstagramComponent } from '../../../assets/icons/instagram/instagram.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, PhoneComponent, MailComponent, MapPinComponent, FacebookComponent, TwitterComponent, LinkedinComponent, InstagramComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  year = new Date().getFullYear()
  user = 'Jambo'
}
