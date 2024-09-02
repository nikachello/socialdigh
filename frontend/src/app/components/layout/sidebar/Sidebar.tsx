"use client";
import { Sun } from "lucide-react";
import Image from "next/image";
import styles from "./Sidebar.module.scss";
import Link from "next/link";
import { MENU } from "./sidebar.data";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <aside className={styles.sidebar}>
      <Image src="/linear-icon.svg" alt="" width={45} height={45} />
      <div>
        {MENU.map((item) => (
          <Link href={item.url} className="mb-8 block" key={item.url}>
            <item.icon
              size={25}
              className={`text-[#7C7275] duration-300 ease-in-out transition-colors hover:text-white ${
                pathName === item.url ? "text-white" : ""
              }`}
            />
          </Link>
        ))}
      </div>
      <Sun />
    </aside>
  );
}
