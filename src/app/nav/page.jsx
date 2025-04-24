"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/datagrid", label: "Datagrid" },
    { href: "/form", label: "Sample Form (Route)" },
    { href: "/images", label: "Load heavy images" },
    { href: "/chart", label: "Load Chart" },
  ];

  return (
    <nav style={{ backgroundColor: "#2294c9", padding: "10px" }}>
      <ul
        style={{
          display: "flex",
          marginLeft: "5px",
          gap: "1rem",
          listStyle: "none",
        }}
      >
        {navLinks.map(({ href, label }) => {
          const isActive = pathname === href;

          return (
            <li key={href}>
              <Link
                href={href}
                style={{
                  color: isActive ? "#2294c9" : "white",
                  fontWeight: "bold",
                  backgroundColor: isActive ? "#ffffff" : "#2294c9",
                  padding: "5px 5px 8px 5px",
                  borderRadius: isActive ? "8px 8px 0px 0px" : "0px",
                  textDecoration: "none",
                }}
                className="nav-link"
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
