import { client } from '../utils/fetch';
import { Phone } from '../types/Phone';

export function fetchPhones() {
  return client.get<Phone[]>(`/products`);
}
