import { SEARCH_FOR_ENTITY_PREFIX } from './constants';

export default function filterSearchQuery(v: string) {
    return v && v.startsWith(SEARCH_FOR_ENTITY_PREFIX) ? v.split('__')[1] : v;
}
