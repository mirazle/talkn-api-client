import { PublicApiMethods } from '@api/public.api';

declare global {
  interface Window {
    talknAPI: PublicApiMethods;
  }
}
