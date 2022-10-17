import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem as MenuItemInner,
  SubMenu as SubMenuInner
  // applyStatics
} from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/core.css";
import styles from "./styles.module.css";

const menuClassName = ({ state }) =>
  state === "opening"
    ? styles.menuOpening
    : state === "closing"
    ? styles.menuClosing
    : styles.menu;

const menuItemClassName = ({ hover }) =>
  hover ? styles.menuItemHover : styles.menuItem;

const submenuItemClassName = (modifiers) =>
  `${styles.submenuItem} ${menuItemClassName(modifiers)}`;

const MenuItem = (props) => (
  <MenuItemInner {...props} className={menuItemClassName} />
);

const SubMenu = (props) => (
  <SubMenuInner
    {...props}
    menuClassName={menuClassName}
    itemProps={{ className: submenuItemClassName }}
    offsetY={-7}
  />
);

// NOTE: the following two lines are required for React-Menu v2/v1
// applyStatics(MenuItemInner)(MenuItem);
// applyStatics(SubMenuInner)(SubMenu);

export default function App() {
  return (
    <Menu
      transition
      menuClassName={menuClassName}
      menuButton={<MenuButton>Open menu</MenuButton>}
    >
      <MenuItem>New File</MenuItem>
      <MenuItem disabled>Save</MenuItem>
      <MenuItem>Print...</MenuItem>
      <MenuDivider className={styles.menuDivider} />
      <SubMenu label="Edit">
        <MenuItem>Cut</MenuItem>
        <MenuItem>Copy</MenuItem>
        <MenuItem>Paste</MenuItem>
      </SubMenu>
      <SubMenu label="Find">
        <MenuItem>Find...</MenuItem>
        <MenuItem>Replace...</MenuItem>
      </SubMenu>
    </Menu>
  );
}
