import { Cog, MessageSquare, Phone, Sun, User2 } from "lucide-react";
import Image from "next/image";
import styles from "./Sidebar.module.scss";
import Link from "next/link";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Image src="/linear-icon.svg" alt="" width={45} height={45} />
      <div>
        <Link href="/friends" className="mb-8 block">
          <User2
            size={30}
            className="text-[#7C7275] duration-300 ease-in-out transition-colors hover:text-white"
          />
        </Link>
        <Link href="/call" className="mb-8 block">
          <Phone
            size={30}
            className="text-[#7C7275] duration-300 ease-in-out transition-colors hover:text-white"
          />
        </Link>
        <Link href="/chats" className="mb-8 block">
          <MessageSquare
            size={30}
            className="text-[#7C7275] duration-300 ease-in-out transition-colors hover:text-white"
          />
        </Link>
        <Link href="/settings" className="mb-8 block">
          <Cog
            size={30}
            className="text-[#7C7275] duration-300 ease-in-out transition-colors hover:text-white"
          />
        </Link>
      </div>
      <Sun />
    </aside>
  );
}
