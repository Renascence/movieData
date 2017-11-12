import request from './utils/request';

export default function getRencentMovies() {
  return request('/v2/movie/in_theaters');
}

export function getMovieInfo(id) {
  return request(`/v2/movie/subject/${id}`);
}
