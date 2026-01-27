"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
export default function AccountNavigation() {
  const pathname = usePathname();
  const linkClassName = (path: string) => {
    return `list-group-item border-0 ${pathname.includes(path) ? "text-black active" : "text-danger"}`;
  };

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link href="signin" className={linkClassName("/signin")}>
        Signin
      </Link>
      <Link href="signup" className={linkClassName("/signup")}>
        Signup
      </Link>
      <Link href="profile" className={linkClassName("/profile")}>
        Profile
      </Link>
    </div>
  );
}
