import { usaLocations } from './locations-usa';
import { canadaLocations } from './locations-canada';
import { ukLocations } from './locations-uk';
import { europeLocations } from './locations-europe';
import { apacLocations } from './locations-apac';
import { gulfLocations } from './locations-gulf';
import { easternEuropeLocations } from './locations-eastern-europe';
import { irelandLocations } from './locations-ireland';
import { latinAmericaLocations } from './locations-latin-america';
import { africaLocations } from './locations-africa';
import { europe2Locations } from './locations-europe-2';
import { usa2Locations } from './locations-usa-2';
import { apac2Locations } from './locations-apac-2';
import { europe3Locations } from './locations-europe-3';
import { europe4Locations } from './locations-europe-4';
import { apac3Locations } from './locations-apac-3';
import { usa3Locations } from './locations-usa-3';
import { gulf2Locations } from './locations-gulf-2';
import { canada2Locations } from './locations-canada-2';
import { africa2Locations } from './locations-africa-2';
import { hubLocations } from './locations-hubs';

export const allLocations = [
  ...usaLocations,
  ...canadaLocations,
  ...ukLocations,
  ...europeLocations,
  ...apacLocations,
  ...gulfLocations,
  ...easternEuropeLocations,
  ...irelandLocations,
  ...latinAmericaLocations,
  ...africaLocations,
  ...europe2Locations,
  ...usa2Locations,
  ...apac2Locations,
  ...europe3Locations,
  ...europe4Locations,
  ...apac3Locations,
  ...usa3Locations,
  ...gulf2Locations,
  ...canada2Locations,
  ...africa2Locations,
  ...hubLocations,
];

export type { LocationEntry } from './locations-usa';
