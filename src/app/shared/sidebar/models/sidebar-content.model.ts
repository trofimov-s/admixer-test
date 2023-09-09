export interface SidebarContent<T> {
  data: T;
  confirmFn: () => void;
  action: (...args: any[]) => any;
}
