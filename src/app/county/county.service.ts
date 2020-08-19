import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from '../city/models/city';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { County } from './models/county';
import { OsmCounty } from './models/osm-county';

// prettier-ignore
const OSM_BASE_API = 'https://public.opendatasoft.com/api/records/1.0/search/?dataset=landkreise-in-germany&q=&facet=name_1&facet=name_2&facet=type_2&';
const OSM_RADIUS_API = OSM_BASE_API + 'geofilter.distance=';
const OSM_POLYGON_API = OSM_BASE_API + 'geofilter.polygon=';
const OSM_LINE_API = OSM_BASE_API + 'geofilter.polygon=';

enum SearchTypes {
  Radius = 1,
  Line = 2,
  Polygon = 3,
}

@Injectable()
export class CountyService {
  constructor(
    private readonly http: HttpClient,
    @Inject('COUNTY_CRIME_RATES') private countyCrimeRates: Map<number, number>,
  ) {}

  getCounties(cities: City[]): Observable<County[]> {
    return this.getOsmCounties(cities).pipe(
      switchMap(osmCounties => of(this.mapOsmCountiesToCounties(osmCounties))),
    );
  }

  private getOsmCounties(cities: City[]): Observable<OsmCounty[]> {
    const url = this.buildUrl(cities, cities.length);

    return this.http.get<{ records: OsmCounty[] }>(url).pipe(map(({ records }) => records));
  }

  private mapOsmCountiesToCounties(osmCounties: OsmCounty[]): County[] {
    return osmCounties.map<County>(osmC => ({
      name: osmC.name_2,
      type: osmC.type_2,
      state: osmC.name_1,
      countyCode: +osmC.cca_2,
      geoShape: osmC.geo_shape,
      crimeRate: this.countyCrimeRates.get(+osmC.cca_2), // Get crime rate by county code.
    }));
  }

  private buildUrl(cities: City[], type: SearchTypes): string {
    const { Line, Polygon, Radius } = SearchTypes;

    // prettier-ignore
    switch (type) {
      case Line:
        return `${OSM_LINE_API}(${cities[0].lat},${cities[0].lng}),(${cities[1].lat},${cities[1].lng}),(${cities[1].lat},${cities[1].lng + 0.000001})`;
      case Polygon:
        return `${OSM_POLYGON_API}(${cities[0].lat},${cities[0].lng}),(${cities[1].lat},${cities[1].lng}),(${cities[2].lat},${cities[2].lng})`;
      case Radius:
        return `${OSM_RADIUS_API}${cities[0].lat},${cities[0].lng},10000`;
    }
  }
}
