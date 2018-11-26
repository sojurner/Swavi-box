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

export const planetScrape = planet => {
  const {
    name,
    terrain,
    surface_water,
    population,
    diameter,
    climate,
    rotation_period,
    orbital_period,
    gravity
  } = planet;
  return {
    name,
    terrain,
    population,
    diameter,
    climate,
    gravity,
    rotation: rotation_period,
    orbital: orbital_period,
    'surface water': surface_water
  };
};

export const starshipScrape = ship => {
  const {
    name,
    model,
    manufacturer,
    cost_in_credits,
    length,
    max_atmosphering_speed,
    crew,
    passengers,
    cargo_capacity,
    consumables,
    hyperdrive_rating,
    MGLT,
    starship_class
  } = ship;

  return {
    name,
    model,
    manufacturer,
    cost: cost_in_credits,
    length,
    'max atmosphering speed': max_atmosphering_speed,
    crew,
    passengers,
    'cargo capacity': cargo_capacity,
    consumables,
    'hyperdrive rating': hyperdrive_rating,
    MGLT,
    'starship class': starship_class
  };
};

export const vehicleScrape = vehicle => {
  const {
    name,
    model,
    manufacturer,
    cost_in_credits,
    length,
    max_atmosphering_speed,
    crew,
    passengers,
    cargo_capacity,
    consumables,
    vehicle_class
  } = vehicle;

  return {
    name,
    model,
    manufacturer,
    cost: cost_in_credits,
    length,
    'max atmosphering speed': max_atmosphering_speed,
    crew,
    passengers,
    'cargo capacity': cargo_capacity,
    consumables,
    'vehicle class': vehicle_class
  };
};
