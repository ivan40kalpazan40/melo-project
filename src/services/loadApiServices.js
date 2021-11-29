import { goToRandomPage } from '../config/utils.config';
import { discogsURL, APP_KEY, APP_SECRET } from '../config/static.config';
const credentials = `&key=${APP_KEY}&secret=${APP_SECRET}`;
const param = '';

export const getProducts = () => {
  console.log('Load Products');
  return fetch(
    `${discogsURL}/database/search?q=${param}&per_page=100${credentials}&page=${goToRandomPage(
      1,
      100
    )}`
  ).then((res) => res.json());
};
