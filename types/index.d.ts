import { App, Component } from 'vue';

export interface ItemIcon {
  element?: string | Component;

  class?: any;

  attributes?: object;

  text?: string;
}

export interface ItemBadge {
  element?: string | Component;

  class?: any;

  attributes?: object;

  text?: string;
}

export interface SidebarItem {
  title: string;

  href?: string | object;

  icon?: string | ItemIcon;

  badge?: ItemBadge;

  child?: Array<SidebarItem | SidebarComponentItem | SidebarHeaderItem>;

  disabled?: boolean;

  class?: any;

  attributes?: object;

  hidden?: boolean;

  hiddenOnCollapse?: boolean;

  external?: boolean;

  exact?: boolean;
}

export interface SidebarHeaderItem {
  header: string;

  hidden?: boolean;

  hiddenOnCollapse?: boolean;

  class?: any;

  attributes?: object;
}

export interface SidebarComponentItem {
  component: string | Component;

  props?: object;

  hidden?: boolean;

  hiddenOnCollapse?: boolean;
}

export class SidebarMenu {
  /**
   * List of Items in the menu
   * Follow https://github.com/itartweb/it-vue-sidebar-menu#item-properties
   */
  menu: Array<SidebarItem | SidebarComponentItem | SidebarHeaderItem>;

  /**
   * Sidebar Collapse state (v-model:collapsed to enable two-way data binding).
   *
   */
  collapsed?: boolean;

  /**
   * Sidebar width (expanded).
   * @default 290px
   */
  width?: string;

  /**
   * Sidebar width (collapsed).
   * @default 65px
   */
  widthCollapsed?: string;

  /**
   * Keep only one child opened at a time (first level only).
   *
   */
  showOneChild?: boolean;

  /**
   * Keep all child open.
   *
   */
  showChild?: boolean;

  /**
   * Position sidebar right to left.
   *
   */
  rtl?: boolean;

  /**
   * Make sidebar relative to the parent (by default the sidebar is relative to the viewport).
   *
   */
  relative?: boolean;

  /**
   * Hide toggle collapse button.
   *
   */
  hideToggle?: boolean;

  /**
   * Sidebar theme (available themes: 'white-theme').
   *
   */
  theme?: '' | 'white-theme';

  /**
   * Disable hover on collapse mode.
   *
   */
  disableHover?: boolean;

  /**
   * The name of the custom link component (must be registered globally and define item as a prop)
   *
   */
  linkComponentName?: string;
}

export default function install (app: App): void
