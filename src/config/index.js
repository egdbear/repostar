import { lastweek } from '../utils';

export const FAVORITES_URL = `https://api.github.com/search/repositories?q=created:>${lastweek}&sort=stars&order=desc`;
