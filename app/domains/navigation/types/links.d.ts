export {};

declare module '@/domains/navigation' {
  interface Link {
    name: string;
    href: string;
    external: boolean;
  }

  interface NavLink extends Link {
    subLinks?: Link[];
  }
}
