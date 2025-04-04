import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../services/housing.service';
import { House } from '../../models/house';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-details',
  imports: [ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
      
  route: ActivatedRoute = inject(ActivatedRoute);  
  housingService = inject(HousingService);  
  house: House | undefined;  
  
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {    
    const houseId = Number(this.route.snapshot.params['id']);     
    this.housingService.getHousingLocationById(houseId).then( (house) => {
      this.house = house;
    })
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }
}
