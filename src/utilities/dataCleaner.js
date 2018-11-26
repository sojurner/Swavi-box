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

export const characterScrape = character => {
  const { name, height, mass, gender } = character;
  const modifiedObj = {
    name,
    height,
    mass,
    gender,
    'eye color': character.eye_color,
    'skin color': character.skin_color
  };

  return modifiedObj;
};

export const speciesScrape = species => {
  const {
    name,
    designation,
    language,
    classification,
    average_height,
    average_lifespan,
    eye_colors,
    skin_colors
  } = species;

  return {
    name,
    designation,
    language,
    classification,
    'average height': average_height,
    'average lifespan': average_lifespan,
    'eye colors': eye_colors,
    'skin colors': skin_colors
  };
};
