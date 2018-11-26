export const filmScrape = film => {
  const modifiedObj = {
    data: 'films',
    title: film.title,
    openingCrawl: film.opening_crawl,
    episode: film.episode_id,
    releaseDate: film.release_date,
    details: {
      characters: film.characters,
      planets: film.planets,
      starships: film.starships,
      vehicles: film.vehicles,
      species: film.species
    }
  };
  return modifiedObj;
};
