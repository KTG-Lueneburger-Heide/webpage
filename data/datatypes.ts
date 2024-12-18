export type SplashData = {
  title: string,
  img: string,
  img_alt: string,
  video: string,
  video_alt: string,
  body: string
}

export type SponsorData = {
  title: string,
  img: string
}

export type SocialMedia = {
  facebook?: string,
  instagram?: string,
  twitter?: string,
  tictoc?: string
}

export type Trainer = {
  name: string,
  license?: string,
  teams: string[],
  text?: string,
  image?: string
}

export type Vorstand = {
  name: string,
  image?: string,
  position: string
}

export type ContactRecord = {
  type: string,
  tags: string[],
  _id: string,
  personal: {
    avatar?: {
      filename: string,
      path: string,
      filesize: number,
      meta: {
        height: number,
        width: number
      }
    },
    isPerson: boolean,
    isOrganisation: boolean,
    name: string,
    type: string,
    humanNameShort: string,
    personFirstName: string,
    personLastName: string,
  },
  custom: any
}

export type CustomFieldDefinition = {
  key: string,
  name: string,
  type: string,
  usageCount: number,
  contributionUsageCount: number
}

export type CustomFieldGroup = {
  name: string,
  organisation: string,
  type: string,
  contactType: string,
  customFields: CustomFieldDefinition[]
}