import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
import MobileNav from "./MobileNav";

function Header() {
  return (
    <header className="border-primary-900 border-b px-8 py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <Navigation />
        <MobileNav />
      </div>
    </header>
  );
}

export default Header;
