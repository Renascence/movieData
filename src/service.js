import request from './request';

export default function getRencentMovies() {
  return request('/v2/movie/in_theaters', 'get');
}
