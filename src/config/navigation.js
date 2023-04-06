import SITE from './site';
import { getPermalink } from '../utils/permalinks';

export const header = {
  links: [
    {
      text: 'Prize',
      href: getPermalink('#prize'),
    },
    {
      text: 'Themes',
      href: getPermalink('#themes'),
    },
    {
      text: 'Timeline',
      href: getPermalink('#timeline'),
    },
    {
      text: 'FAQ',
      href: getPermalink('#faq'),
    },
  ],
  actions: [],
};

export const footer = {
  siteName: SITE?.name,
  // socialLinks: [
  //   { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
  //   { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
  //   { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: '#' },
  //   { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  //   { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  // ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://github.com/sceptix-club"> The sceptix club</a> · All rights reserved.
  `,
};
