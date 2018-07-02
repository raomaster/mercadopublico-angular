export class Currency {
  disclaimer: string;
  license: string;
  timestamp: number;
  base: string;
  rates: Rates = new Rates();
}

export class Rates {
  CLP: number = 0;
}
