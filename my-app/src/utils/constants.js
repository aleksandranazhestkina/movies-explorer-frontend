// export const BASE_URL = "http://localhost:3001";
export const BASE_URL = "https://api.nazhestkina.movies.nomoredomains.club";
export const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';
export const SHORTMOVIES_DURATION = 40;
export const EMAIL_PATTERN =
  "^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$";
export const USER_NAME_PATTERN = '^[A-Za-zА-Яа-яЁё /s -]+$';

export const DEVICE_PARAMS = {
  desktop: {
    width: 1100,
    cards: {
      total: 12,
      more: 4,
    },
  },
  tablet: {
    width: 583,
    cards: {
      total: 8,
      more: 2,
    },
  },
  mobile: {
    width: 583,
    cards: {
      total: 5,
      more: 2,
    },
  },
};

export const WIDTH_DESKTOP = 1100;
export const WIDTH_TABLET = 768;
export const WIDTH_MOBILE = 583;

export const CARD_NUMBER_DESKTOP = 12;
export const CARD_NUMBER_TABLET = 8;
export const CARD_NUMBER_MOBILE = 5;

export const CARDS_ELSE_DESKTOP = 4;
export const CARDS_ELSE_TABLET = 2;
export const CARDS_ELSE_MOBILE = 1;