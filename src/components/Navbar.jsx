import { looksciImg } from '../utils';

const Navbar = () => {
  // Map display names to section IDs
  const navItems = [
    { display: "Features", id: "highlights" },
    { display: "Experience", id: "model" },
    { display: "Our Team", id: "team-heading" },
    { display: "How It Works", id: "chip" }
  ];

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100; // Offset for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="w-full py-5 sm:px-10 px-5 fixed top-0 z-50 bg-black/80 backdrop-blur-sm">
      <nav className="flex w-full screen-max-width">
        <img src={looksciImg} alt="Logo" width={56} height={72} />

        <div className="flex flex-1 justify-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {item.display}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;