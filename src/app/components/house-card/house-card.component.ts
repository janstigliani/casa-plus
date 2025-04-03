import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { House } from '../../models/house';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-house-card',
  imports: [CommonModule, RouterModule],
  templateUrl: './house-card.component.html',
  styleUrl: './house-card.component.scss'
})
export class HouseCardComponent {
  @Input() house!: House;
}
