import * as scrape from './dataCleaner';

export const getData = async type => {
  let data = [];
  let next;
  const response = await fetch(`https://swapi.co/api/${type}`);
  const result = await response.json();
  data = [...data, ...result.results];
  next = result.next;
  while (next) {
    const resp = await fetch(next);
    const resu = await resp.json();
    next = resu.next;
    data = [...data, ...resu.results];
  }
  switch (type) {
    case 'species':
      return data.map(species => scrape.speciesScrape(species));
    case 'people':
      return data.map(char => scrape.characterScrape(char));
    case 'planets':
      return data.map(planet => scrape.planetScrape(planet));
    case 'starships':
      return data.map(ship => scrape.starshipScrape(ship));
    case 'vehicles':
      return data.map(vehicle => scrape.vehicleScrape(vehicle));
    default:
      return;
  }
};
