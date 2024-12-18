module.exports = {
  title: "KTG Lüneburger Heide",
  logo: "/images/logos/KTG_Logo_Minimal_Inv.svg",
  campai: {
    api_key: process.env.CAMPAI_API_KEY,
    endpoint: "https://api.campai.com/",
    organistationID: "67422117781e2da583da3433",
    trial_form_id: ""
  },
  avatars: {
    cache: "/images/avatars",
    placeholder: {
      female: "/images/people/placeholder-female.jpg",
      male: "/images/people/placeholder-male.jpg"
    }
  }
}