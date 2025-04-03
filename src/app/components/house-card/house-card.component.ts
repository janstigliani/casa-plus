import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { House } from '../../models/house';

@Component({
  selector: 'app-house-card',
  imports: [CommonModule, ],
  templateUrl: './house-card.component.html',
  styleUrl: './house-card.component.scss'
})
export class HouseCardComponent {
  @Input() house!: House;
}
