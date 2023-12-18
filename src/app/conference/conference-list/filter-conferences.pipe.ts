import { Pipe, PipeTransform } from '@angular/core';
import { Conference } from '../conference';


//Custom pipe do wyszukiwania konferencji
@Pipe({
  name: 'filterConferences',
})
export class FilterConferencesPipe implements PipeTransform {
  transform(conferences: Conference[], searchTerm: string): Conference[] {
    if (!conferences || !searchTerm) {
      return conferences;
    }

    return conferences.filter((conference) =>
      conference.getName().toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}