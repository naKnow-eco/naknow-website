import type {
  ComponentCustomProps, AllowedComponentProps, VNodeProps,
} from 'vue';

export {};

declare global {
  type Props<T> = T extends abstract new (...args: unknown[]) => unknown
    ? Omit<
      InstanceType<T>['$props'],
      keyof VNodeProps
      | keyof AllowedComponentProps
      | keyof ComponentCustomProps
    >
    : never;
}
