import type { NavLink } from '@/domains/navigation';

export const NAV_LINKS: NavLink[] = [
  {
    name: 'header.links.about',
    href: '#about',
    external: false,
  },
  {
    name: 'header.links.mission',
    href: '#mission',
    external: false,
  },
  {
    name: 'header.links.outputs',
    href: '#outputs',
    external: false,
    subLinks: [
      {
        name: 'home.goal.dataset.environmental.text',
        href: 'home.goal.dataset.environmental.link',
        external: true,
      },
      {
        name: 'home.goal.dataset.knowledge.text',
        href: 'home.goal.dataset.knowledge.link',
        external: true,
      },
    ],
  },
  {
    name: 'header.links.methods',
    href: '#methods',
    external: false,
  },
  {
    name: 'header.links.contact',
    href: '#contact',
    external: false,
  },
] as const;
