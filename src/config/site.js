export default {
  name: 'Lorem ipsum',
  site: 'https://hacktolight.vercel.app',
  base: '/',
  trailingSlash: false,
  metadata: {
    title: {
      default: 'Lorem ipsum',
      template: '%s — Lorem ipsum',
    },
    robots: {
      index: true,
      follow: true,
    },
    description:
      '🚀 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    openGraph: {
      siteName: 'Lorem ipsum',
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
      handle: '@loremipsumt',
      site: '@loremipsumt',
      cardType: 'summary_large_image',
    },
  },
};
