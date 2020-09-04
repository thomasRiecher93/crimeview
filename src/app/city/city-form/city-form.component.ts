import { Component, HostListener } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { City } from '../interfaces/city';
import { SearchService } from '../../search.service';

const CAPACITY = 3;
const NO_CAPACITY_MESSAGE = 'Maximale Anzahl an Städten erreicht';
const NOT_DISTINCT_MESSAGE = ' ist bereits im Suchraum';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.scss'],
})
export class CityFormComponent {
  cities: readonly City[] = [];
  checkedCities: readonly City[] = [];

  constructor(
    private readonly snackBarService: MatSnackBar,
    private readonly searchService: SearchService,
  ) {}

  onCitySelect(city: City): void {
    const noCapacity = this.cities.length === CAPACITY;

    if (noCapacity) {
      this.snackBarService.open(NO_CAPACITY_MESSAGE, 'Weiter');
      return;
    }

    const isDistinct = !this.cities.some(c => c.placeId === city.placeId);

    if (isDistinct) {
      this.cities = [...this.cities, city];
      this.checkedCities = [...this.checkedCities, city];
    } else {
      this.snackBarService.open(city.name + NOT_DISTINCT_MESSAGE, 'Weiter');
    }
  }

  isChecked(city: City): boolean {
    return this.checkedCities.some(cc => cc === city);
  }

  onDelete(): void {
    this.cities = [];
    this.checkedCities = [];
  }

  onCheck(city: City, checked: boolean): void {
    if (checked) {
      this.checkedCities = [...this.checkedCities, city];
    } else {
      const indexOfCity = this.checkedCities.indexOf(city);

      this.checkedCities = [
        ...this.checkedCities.slice(0, indexOfCity),
        ...this.checkedCities.slice(indexOfCity + 1),
      ];
    }
  }

  onSubmit(): void {
    this.searchService.handleSearchRequest(this.checkedCities as City[]);
  }

  @HostListener('window:keydown.control.enter') onCtrlEnterDown(): void {
    if (this.checkedCities.length) {
      this.onSubmit();
    }
  }
}
