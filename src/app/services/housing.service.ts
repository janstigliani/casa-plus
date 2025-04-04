import { Injectable } from '@angular/core';
import { House } from '../models/house';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  readonly baseUrl = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<House[]> {
    const data = await fetch(this.baseUrl);
    return (await data.json()) ?? [];
  }
  async getHousingLocationById(id: number): Promise<House | undefined> {
    const data = await fetch(`${this.baseUrl}/${id}`);
    return (await data.json()) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {    
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,);  
  }
}
