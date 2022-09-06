import { IResult } from './IResult';
import { Medals } from './Medals.enum';

export class Country {
  // TODO: Country requires a name attribute and a results attribute.
  // name is a string, results is an array of Result
  name: String;
  results: IResult[];
  // TODO: receives a name and initialises the results array to an empty array
  constructor(name: string) {
    this.name = name;
    this.results = [];
  }

  // return the total number of medals
  totalMedals(): number {
    //TODO: complete
    let total: number = this.results.length;
    return total;
  }

  // given a medal type, return the amount of that type of medal
  totalMedalType(medal: Medals): number {
    // TODO:
    let total: number = 0;
    for (let i = 0; i < this.results.length; i++) {
      if (this.results[i].medal === medal) {
        total++;
      }
    }
    return total;
  }
}
