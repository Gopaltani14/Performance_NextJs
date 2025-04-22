"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Nav() {
  const router = useRouter();

  const goToForm = () => {
    router.push("/form");
  };

  return (
    <nav>
      <ul
        style={{
          display: "flex",
          gap: "1rem",
          listStyle: "none",
          margin: "20px 0 10px 20px",
        }}
      >
        <li>
          <Link href="/datagrid">Datagrid</Link>
        </li>
        <li>
          <Link href="/form">Sample Form (Route)</Link>
        </li>
        <li>
          <p
            onClick={goToForm}
            style={{
              cursor: "pointer",
              color: "blue",
              textDecoration: "underline",
            }}
          >
            Sample Form (Logical)
          </p>
        </li>
        <li>
          <Link href="/chart">Load Chart</Link>
        </li>
      </ul>
    </nav>
  );
}
