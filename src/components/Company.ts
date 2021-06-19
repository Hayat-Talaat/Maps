import faker from "faker";
import { Mappable } from "../blackBox/CustomMap";

export class Company implements Mappable {
  companyName: string;
  companySuffix: string;
  catchPhrase: string;

  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.companySuffix = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();

    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  content(): string {
    return `
            <div>
                <h1>Company Name: ${this.companyName}</h1>
                <h2>Catch Phrase: ${this.catchPhrase}</h2>
                <h3>Company Suffix: ${this.companySuffix}</h3>
            </div>
        `;
  }
}
