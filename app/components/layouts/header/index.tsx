
import {
  Close as CloseIcon,
  ExpandLess,
  ExpandMore,
  KeyboardArrowDown,
  KeyboardArrowRight,
  Menu as MenuIcon,
  Language as LanguageIcon,
} from "@mui/icons-material";
import type React from "react";
import { useEffect, useState, useRef } from "react";
import styles from "./header.module.scss";
import { Container, Dialog } from "@mui/material";
import { Link } from "react-router";
import Login from "@/components/modules/login-client";

interface DropdownItem {
  label: string;
  href: string;
  children?: DropdownItem[];
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Landing",
    dropdown: [
      {
        label: "Services",
        href: "#",
        children: [
          { label: "Software Library", href: "/services/software-library" },
          { label: "Insurance", href: "/services/insurance" },
          { label: "Conference", href: "/services/conference" },
          { label: "Saas with Dashboard", href: "/services/saas-dashboard" },
          {
            label: "Saas with Illustration",
            href: "/services/saas-illustration",
          },
          { label: "Saas 1", href: "/services/saas-1" },
          { label: "Saas 2", href: "/services/saas-2" },
          { label: "Saas 3", href: "/services/saas-3" },
          { label: "Saas 4", href: "/services/saas-4" },
          { label: "Healthcare", href: "/services/healthcare" },
        ],
      },
      {
        label: "Products",
        href: "#",
        children: [
          { label: "SaaS Platform", href: "/products/saas-platform" },
          { label: "SaaS App", href: "/products/saas-app" },
          { label: "Cosmetics", href: "/products/cosmetics" },
          { label: "Real Estate", href: "/products/real-estate" },
          { label: "Rental", href: "/products/rental" },
          { label: "Bookstore", href: "/products/bookstore" },
          {
            label: "E-Commerce with Illustration",
            href: "/products/ecommerce-illustration",
          },
          { label: "E-Commerce", href: "/products/ecommerce" },
          { label: "Education 1", href: "/products/education-1" },
          { label: "Education 2", href: "/products/education-2" },
          { label: "Fashion", href: "/products/fashion" },
        ],
      },
      {
        label: "Others",
        href: "#",
        children: [
          { label: "Travel", href: "/others/travel" },
          { label: "Agency", href: "/others/agency" },
          { label: "Personal-site", href: "/others/personal-site" },
          { label: "Architecture", href: "/others/architecture" },
          { label: "Find Job", href: "/others/find-job" },
          { label: "Photography", href: "/others/photography" },
          { label: "Portfolio Details", href: "/others/portfolio-details" },
          {
            label: "Personal Web Designer",
            href: "/others/personal-web-designer",
          },
          {
            label: "Personal Web Photographer",
            href: "/others/personal-web-photographer",
          },
        ],
      },
    ],
  },
  {
    label: "Pages",
    dropdown: [
      {
        label: "Apps",
        href: "#",
        children: [{ label: "Desktop", href: "/apps/desktop" }],
      },
      {
        label: "Services",
        href: "#",
        children: [
          { label: "Insurance", href: "/services/insurance" },
          { label: "Rent", href: "/services/rent" },
          { label: "Conference", href: "/services/conference" },
          { label: "Software-Library", href: "/services/software-library" },
        ],
      },
      {
        label: "Company",
        href: "#",
        children: [
          { label: "About", href: "/company/about" },
          { label: "Contact Us", href: "/company/contact" },
          { label: "FAQ", href: "/company/faq" },
          { label: "Pricing", href: "/company/pricing" },
        ],
      },
      {
        label: "Account",
        href: "#",
        children: [
          {
            label: "Sign In",
            href: "#",
            children: [
              { label: "Basic", href: "/auth/signin-basic" },
              { label: "Illustration", href: "/auth/signin-illustration" },
              { label: "Left Cover", href: "/auth/signin-left-cover" },
              { label: "Right Cover", href: "/auth/signin-right-cover" },
              { label: "Popup", href: "/auth/signin-popup" },
              { label: "Popup Image", href: "/auth/signin-popup-image" },
            ],
          },
          {
            label: "Sign Up",
            href: "#",
            children: [
              { label: "Basic", href: "/auth/signup-basic" },
              { label: "Illustration", href: "/auth/signup-illustration" },
              { label: "Left Cover", href: "/auth/signup-left-cover" },
              { label: "Right Cover", href: "/auth/signup-right-cover" },
              { label: "Popup", href: "/auth/signup-popup" },
              { label: "Popup Image", href: "/auth/signup-popup-image" },
            ],
          },
          {
            label: "Reset Password",
            href: "#",
            children: [
              { label: "Basic", href: "/auth/reset-password" },
              {
                label: "Illustration",
                href: "/auth/reset-password-illustration",
              },
            ],
          },
        ],
      },
      {
        label: "Error 404",
        href: "#",
        children: [
          { label: "Basic", href: "/auth/error-404-basic" },
          { label: "Illustration", href: "/auth/error-404-illustration" },
        ],
      },
    ],
  },
  { label: "Docs", href: "#" },
  { label: "Help", href: "#" },
];

const Header: React.FC = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMenuExpanded, setMobileMenuExpanded] = useState<{
    [key: string]: boolean;
  }>({});
  const [language, setLanguage] = useState<"EN" | "VN">("EN");
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  // Simplified state management for dropdowns
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const languageTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    setHasMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1200);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Clear timeout helper
  const clearDropdownTimeout = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
  };

  const clearLanguageTimeout = () => {
    if (languageTimeoutRef.current) {
      clearTimeout(languageTimeoutRef.current);
      languageTimeoutRef.current = null;
    }
  };

  // Handle menu hover with delay
  const handleMenuEnter = (menuLabel: string) => {
    clearDropdownTimeout();
    setActiveMenu(menuLabel);
    setActiveSubMenu(null);
  };

  const handleMenuLeave = () => {
    clearDropdownTimeout();
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
      setActiveSubMenu(null);
    }, 100);
  };

  const handleSubMenuEnter = (subMenuLabel: string) => {
    clearDropdownTimeout();
    setActiveSubMenu(subMenuLabel);
  };

  const handleSubMenuLeave = () => {
    clearDropdownTimeout();
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveSubMenu(null);
    }, 100);
  };

  // Language toggle handlers
  const handleLanguageToggle = (newLanguage: "EN" | "VN") => {
    setLanguage(newLanguage);
    setLanguageDropdownOpen(false);
    // Here you can add your language change logic
    console.log(`Language changed to: ${newLanguage}`);
  };

  const handleLanguageEnter = () => {
    clearLanguageTimeout();
    setLanguageDropdownOpen(true);
  };

  const handleLanguageLeave = () => {
    clearLanguageTimeout();
    languageTimeoutRef.current = setTimeout(() => {
      setLanguageDropdownOpen(false);
    }, 100);
  };

  const handleMobileToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMobileMenuExpand = (menuName: string) => {
    setMobileMenuExpanded((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  const renderLandingMegaMenu = () => {
    const landingItem = navItems.find((item) => item.label === "Landing");
    if (!landingItem?.dropdown || activeMenu !== "Landing") return null;

    return (
      <div className={styles.megaMenu} onMouseLeave={handleMenuLeave}>
        <div className={styles.megaMenuContainer}>
          <div className={styles.megaMenuGrid}>
            {landingItem.dropdown.map((column, index) => (
              <div key={index} className={styles.megaMenuColumn}>
                <h6 className={styles.megaMenuTitle}>{column.label}</h6>
                <ul className={styles.megaMenuList}>
                  {column.children?.map((item, itemIndex) => (
                    <li key={itemIndex} className={styles.megaMenuListItem}>
                      <Link
                        to={item.href}
                        className={styles.megaMenuLink}
                        onClick={() => {
                          setActiveMenu(null);
                          setActiveSubMenu(null);
                        }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderDesktopDropdown = (items: DropdownItem[]) => {
    if (activeMenu !== "Pages") return null;
    return (
      <div className={styles.dropdown} onMouseLeave={handleMenuLeave}>
        {items.map((item, index) => {
          const isActiveSubMenu = item.label === activeSubMenu;
          return (
            <div
              key={index}
              className={styles.dropdownItem}
              onMouseEnter={() => {
                if (item.children) handleSubMenuEnter(item.label);
              }}
              onMouseLeave={() => {
                if (item.children) handleSubMenuLeave();
              }}
            >
              <Link
                to={item.href}
                className={styles.dropdownLink}
                onClick={() => {
                  setActiveMenu(null);
                  setActiveSubMenu(null);
                }}
              >
                {item.label}
              </Link>
              {item.children && <KeyboardArrowRight />}
              {isActiveSubMenu && (
                <div className={styles.submenu}>
                  {item.children?.map((child, index) => (
                    <div key={index} className={styles.dropdownItem}>
                      <Link
                        to={child.href}
                        className={styles.dropdownLink}
                        onClick={() => {
                          setActiveMenu(null);
                          setActiveSubMenu(null);
                        }}
                      >
                        {child.label}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  const renderSubMenu = () => {
    if (!activeSubMenu || activeMenu !== "Pages") return null;
    const pagesItem = navItems.find((item) => item.label === "Pages");
    const subMenuItem = pagesItem?.dropdown?.find(
      (item) => item.label === activeSubMenu,
    );
    if (!subMenuItem?.children) return null;

    return (
      <div className={styles.submenu} onMouseLeave={handleSubMenuLeave}>
        {subMenuItem.children.map((child, index) => {
          return (
            <div key={index} className={styles.dropdownItem}>
              <Link
                to={child.href}
                className={styles.dropdownLink}
                onClick={() => {
                  setActiveMenu(null);
                  setActiveSubMenu(null);
                }}
              >
                {child.label}
              </Link>
            </div>
          );
        })}
      </div>
    );
  };

  const renderLanguageToggle = () => (
    <div
      className={styles.languageToggle}
      onMouseEnter={handleLanguageEnter}
      onMouseLeave={handleLanguageLeave}
    >
      <button className={styles.languageButton}>
        <LanguageIcon className={styles.languageIcon} />
        <span>{language}</span>
        <KeyboardArrowDown className={styles.languageArrow} />
      </button>
      {languageDropdownOpen && (
        <div className={styles.languageDropdown}>
          <button
            className={`${styles.languageOption} ${language === "EN" ? styles.languageOptionActive : ""}`}
            onClick={() => handleLanguageToggle("EN")}
          >
            EN
          </button>
          <button
            className={`${styles.languageOption} ${language === "VN" ? styles.languageOptionActive : ""}`}
            onClick={() => handleLanguageToggle("VN")}
          >
            VN
          </button>
        </div>
      )}
    </div>
  );

  const renderMobileMenuItem = (item: DropdownItem, level = 0) => (
    <div
      key={item.label}
      className={styles.mobileMenuItemWrapper}
      style={{ paddingLeft: `${level * 20}px` }}
    >
      <div
        className={`${styles.mobileMenuItem} ${level > 0 ? styles.mobileMenuItemNested : ""}`}
        onClick={() => {
          if (item.children) {
            handleMobileMenuExpand(item.label);
          } else {
            setMobileOpen(false);
          }
        }}
      >
        <Link to={item.href} className={styles.mobileMenuLink}>
          {item.label}
        </Link>
        {item.children && (
          <span className={styles.mobileMenuIcon}>
            {mobileMenuExpanded[item.label] ? <ExpandLess /> : <ExpandMore />}
          </span>
        )}
      </div>
      {item.children && mobileMenuExpanded[item.label] && (
        <div className={styles.mobileMenuCollapse}>
          {item.children.map((child) => renderMobileMenuItem(child, level + 1))}
        </div>
      )}
    </div>
  );

  const renderMobileLanguageToggle = () => (
    <div className={styles.mobileLanguageToggle}>
      <div className={styles.mobileLanguageTitle}>
        <LanguageIcon className={styles.mobileLanguageIcon} />
        <span>Language</span>
      </div>
      <div className={styles.mobileLanguageOptions}>true
        <button
          className={`${styles.mobileLanguageOption} ${language === "EN" ? styles.mobileLanguageOptionActive : ""}`}
          onClick={() => handleLanguageToggle("EN")}
        >
          English
        </button>
        <button
          className={`${styles.mobileLanguageOption} ${language === "VN" ? styles.mobileLanguageOptionActive : ""}`}
          onClick={() => handleLanguageToggle("VN")}
        >
          Tiếng Việt
        </button>
      </div>
    </div>
  );

  const renderMobileMenu = () => (
    <>
      {/* Backdrop */}
      {mobileOpen && (
        <div className={styles.mobileBackdrop} onClick={handleMobileToggle} />
      )}
      {/* Mobile Menu */}
      <div
        className={`${styles.mobileDrawer} ${mobileOpen ? styles.mobileDrawerOpen : ""}`}
      >
        <div className={styles.mobileMenuHeader}>
          <button onClick={handleMobileToggle} className={styles.closeButton}>
            <CloseIcon />
          </button>
        </div>
        <div className={styles.mobileMenuList}>
          {navItems.map((item) => (
            <div key={item.label}>
              {item.dropdown ? (
                <div>
                  <div
                    className={styles.mobileMenuItem}
                    onClick={() => handleMobileMenuExpand(item.label)}
                  >
                    <span className={styles.mobileMenuText}>{item.label}</span>
                    <span className={styles.mobileMenuIcon}>
                      {mobileMenuExpanded[item.label] ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )}
                    </span>
                  </div>
                  {mobileMenuExpanded[item.label] && (
                    <div className={styles.mobileMenuCollapse}>
                      {item.dropdown.map((dropItem) =>
                        renderMobileMenuItem(dropItem, 1),
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div
                  className={styles.mobileMenuItem}
                  onClick={() => setMobileOpen(false)}
                >
                  <Link to={item.href!} className={styles.mobileMenuLink}>
                    {item.label}
                  </Link>
                </div>
              )}
            </div>
          ))}
          <div className={styles.mobileDivider} />
          {renderMobileLanguageToggle()}
          <div className={styles.mobileDivider} />
          <div className={styles.mobileCtaItem}>
            <button
              className={styles.mobileCtaButton}
              onClick={() => {
                setMobileOpen(false);
                handleOpen();
              }}
            >
              Get it now
            </button>
          </div>
        </div>
      </div>
    </>
  );

  if (!hasMounted) return null;

  return (
    <>
      <header className={styles.navbar}>
        <Container className={styles.container}>
          <div className={styles.toolbar}>
            {/* Logo */}
            <div className={styles.logo}>
              <Link to="/">
                <img
                  src="/images/header/logo-white.svg"
                  alt="Logo"
                  width={120}
                  height={36}
                />
              </Link>
            </div>

            {!isMobile && (
              <nav className={styles.desktopNav}>
                {navItems.map((item, index) => (
                  <div key={index} className={styles.navItemWrapper}>
                    {item.dropdown ? (
                      <div
                        onMouseEnter={() => handleMenuEnter(item.label)}
                        onMouseLeave={handleMenuLeave}
                      >
                        <button className={styles.navButton}>
                          {item.label}
                          <KeyboardArrowDown />
                        </button>
                        {item.label === "Landing" && renderLandingMegaMenu()}
                        {item.label === "Pages" &&
                          renderDesktopDropdown(item.dropdown)}
                      </div>
                    ) : (
                      <Link to={item.href!} className={styles.navButton}>
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                {renderSubMenu()}
                {renderLanguageToggle()}
                <button className={styles.ctaButton} onClick={handleOpen}>
                  Get it now
                </button>
              </nav>
            )}

            {isMobile && (
              <div className={styles.mobileHeaderActions}>
                {renderLanguageToggle()}
                <button
                  onClick={handleMobileToggle}
                  className={styles.mobileMenuButton}
                >
                  <MenuIcon />
                </button>
              </div>
            )}
          </div>
        </Container>
      </header>
      {/* Mobile Menu */}
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <Login onClose={handleClose} />
      </Dialog>
      {renderMobileMenu()}
    </>
  );
};

export default Header;
