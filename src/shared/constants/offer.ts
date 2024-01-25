export const WeekDay = {
  First: 1,
  Last: 7,
} as const;

export const BooleanString = {
  True: 'true',
  False: 'false',
} as const;

export const Rating = {
  Min: 1,
  Max: 5,
} as const;

export const RoomCount = {
  Min: 1,
  Max: 4,
} as const;

export const GuestCount = {
  Min: 1,
  Max: 4,
} as const;

export const Price = {
  Min: 500,
  Max: 2000,
} as const;

export const CommentCount = {
  Min: 1,
  Max: 10,
} as const;

export const Cities = {
  Paris: {
    latitude: 48.85661,
    longitude: 2.351499,
  },

  Cologne: {
    latitude: 50.938361,
    longitude: 6.959974,
  },

  Brussels: {
    latitude: 50.846557,
    longitude: 4.351697,
  },

  Amsterdam: {
    latitude: 52.370216,
    longitude: 4.895168,
  },

  Hamburg: {
    latitude: 53.550341,
    longitude: 10.000654,
  },

  Dusseldorf: {
    latitude: 51.225402,
    longitude: 6.776314,
  },
} as const;
