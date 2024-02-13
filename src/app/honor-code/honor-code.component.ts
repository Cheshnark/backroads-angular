import { Component } from '@angular/core';
import { HonorCardComponent } from './honor-card/honor-card.component';

@Component({
  selector: 'app-honor-code',
  standalone: true,
  imports: [HonorCardComponent],
  templateUrl: './honor-code.component.html',
  styleUrl: './honor-code.component.css'
})
export class HonorCodeComponent {
  honorCards = [
    {
      title: "Parking ",
      body: "Utilize designated spots responsibly, ensuring motorcycles are parked securely and upright to prevent any potential damage. Minimize noise disturbances and respect surrounding vehicles and pedestrians. Dispose of any trash appropriately and adhere to posted guidelines for a tidy and organized parking area. By following these principles, contribute to a positive atmosphere for all motorcycle enthusiasts and maintain the integrity of the parking facility."
    },
    {
      title: "Camping ",
      body: "Respect nature by leaving no trace, disposing of waste properly, and minimizing impact on ecosystems. Follow fire safety guidelines, respect quiet hours, and camp only in designated areas. Be prepared with proper gear and knowledge of emergency procedures. Respect wildlife and fellow campers, and share your outdoor skills responsibly. Leave a positive impact by leaving the camping area better than you found it."
    },
    {
      title: "Environment ",
      body: "Prioritize eco-conscious choices by selecting fuel-efficient motorcycles and maintaining them responsibly. Respect designated off-road areas to minimize ecological impact and preserve natural habitats. Contribute to environmental conservation efforts by properly disposing of waste and participating in community clean-up initiatives. Share knowledge about sustainable riding practices with fellow enthusiasts to foster a culture of environmental stewardship within the motorcycle community. Together, let's ride responsibly and safeguard our planet's beauty for generations to come."
    },
    {
      title: "Honor between punks ",
      body: "Within our community, we uphold principles of diversity, DIY ethics, and solidarity, steadfastly rejecting all forms of discrimination, championing enthusiastic consent, actively advocating for meaningful social change, and nurturing a culture of integrity and authenticity grounded in mutual respect, accountability, and collective empowerment, ensuring that punk remains a beacon of rebellion and unity for generations to come."
    }
  ]
}
