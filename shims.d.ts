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

declare module '*/trainer.yaml' {
  import type { Trainer } from '@/data/datatypes';
  const data : Trainer[];

  export default data;
}

declare module '*/vorstand.yaml' {
  import type { Vorstand } from '@/data/datatypes';
  const data : Vorstand [];

  export default data;
}

declare module '*.yaml' {
  const json: any;
  export default json;
}