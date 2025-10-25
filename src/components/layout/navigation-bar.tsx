import { LocaleToggle } from '../locale-toggle';
import { ThemeToggle } from '../theme-toggle';
import {
  MobileNav,
  Navbar,
  NavbarBody,
  NavbarLogo,
  NavItems,
} from '../ui/resizable-navbar';

export function NavigationBar() {
  return (
    <Navbar>
      <NavbarBody>
        <NavbarLogo />
        <div className="flex items-center space-x-3">
          <LocaleToggle variant="outline" />
          <ThemeToggle variant="outline" />
        </div>
      </NavbarBody>
      {/* <MobileNav></MobileNav> */}
    </Navbar>
  );
}
