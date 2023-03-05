export default {
  name: 'HackToFuture',
  site: 'https://hacktofuture.in',
  base: '/',
  trailingSlash: false,
  metadata: {
    title: {
      default: 'HackToFuture',
      template: '%s - HackToFuture',
    },
    robots: {
      index: true,
      follow: true,
    },
    description:
      'Whether you are a seasoned professional or a newcomer to the tech world, HackToFuture is the perfect opportunity to showcase your skills, make new connections, and work towards a better future. Join us for an unforgettable 24-hour experience that will inspire you and propel you towards your goals!',
    openGraph: {
      siteName: 'HackToFuture',
      images: [
        {
          url: '~/assets/images/default.jpg',
          width: 1200,
          height: 628,
        },
      ],
      type: 'website',
    },
    twitter: {
      handle: '@hacktofuture',
      site: '@hacktofuture',
      cardType: 'summary_large_image',
    },
  },
};
