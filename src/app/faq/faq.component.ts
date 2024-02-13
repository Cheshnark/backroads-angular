import { Component } from '@angular/core';
import { FaqCardComponent } from './faq-card/faq-card.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [FaqCardComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  faqCards = [
    {
      title: 'Can I free camp?',
      body: 'Yes, you can free camp while motorcycle touring! Embrace the adventure responsibly by respecting nature, leaving no trace, and choosing suitable camping spots. Remember to dispose of waste properly and respect local regulations and private property boundaries. Let\'s enjoy the freedom of the open road while preserving the beauty of the wilderness for future adventurers.'
    },
    {
      title: 'Fire?',
      body: 'Yes, you can make a fire while camping, but it\'s essential to do so responsibly. Follow local regulations and only build fires in designated areas where permitted. Ensure the fire is properly contained and fully extinguished before leaving. Respect the environment and avoid causing any damage to the surroundings.'
    },
    {
      title: 'Add a new shelter',
      body: 'To add a new shelter to the Backroads website, navigate to the \'Shelters\' section and select the option to \'Add New Shelter.\' Fill in the required information, including the shelter\'s name, location, amenities, and any additional details you\'d like to provide. Upload photos to showcase the shelter\'s features and surroundings. Once you\'ve completed the form, submit it for review, and our team will verify the information before adding it to our database.'
    },
    {
      title: 'Become partner',
      body: ' Simply head to our website and navigate to the \'Partnership\' section. There, you\'ll find a form to fill out with your business information and details about what you offer. Our team will review your application and get in touch with you to discuss the potential for collaboration. We look forward to potentially working together to enhance the experience for our users!'
    },
    {
      title: 'Do you have merch?',
      body: 'While we don\'t have merch available at the moment, it\'s definitely something we\'re actively working on behind the scenes!  Keep an eye on our website and social media channels for announcements and sneak peeks as we get closer to the launch. Thank you for your interest and patience. We can\'t wait to share our merch with you!'
    },
    {
      title: 'Problems login',
      body: 'If you\'re experiencing login issues, don\'t worry, we\'re here to help! First, double-check that you\'re entering the correct username and password. If you\'ve forgotten your password, you can use the \'Forgot Password\' link to reset it. If you\'re still having trouble, try clearing your browser cache and cookies or using a different browser. If the problem persists, reach out to our support team via email or live chat for further assistance.'
    },
  ]
}
