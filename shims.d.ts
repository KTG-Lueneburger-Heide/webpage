declare module '*/splashes.yaml' {
  import type { SplashData } from '@/data/datatypes';
  const data : SplashData[];

  export default data;
}

declare module '*/sponsors.yaml' {
  import type { SponsorData } from '@/data/datatypes';
  const data : SponsorData[];

  export default data;
}

declare module '*/socialmedia.yaml' {
  import type { SocialMedia } from '@/data/datatypes';
  const data : SocialMedia;

  export default data;
}

declare module '*.yaml' {
  const json: any;
  export default json;
}