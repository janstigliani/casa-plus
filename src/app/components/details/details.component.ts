import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../services/housing.service';
import { House } from '../../models/house';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
      
  route: ActivatedRoute = inject(ActivatedRoute);  
  housingService = inject(HousingService);  
  house: House | undefined;  

  constructor() {    
    const houseId = Number(this.route.snapshot.params['id']);    
    this.house = this.housingService.getHousingLocationById(houseId);  
  }
}
