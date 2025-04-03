import { Component, inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import { HouseCardComponent } from '../house-card/house-card.component';
import { House } from '../../models/house';
import { HousingService } from '../../services/housing.service';


@Component({
  selector: 'app-home',
  imports: [HouseCardComponent, CommonModule],
  templateUrl: './homeList.component.html',
  styleUrl: './homeList.component.scss'
})
export class HomeListComponent {
  houseList: House[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.houseList = this.housingService.getAllHousingLocations();
  }
}
