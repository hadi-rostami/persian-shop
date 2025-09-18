import { HiOutlineExternalLink, HiMenuAlt1 } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";

import Link from "next/link";
import HeaderTheme from "./HeaderTheme";

export default function Header() {
  return (
    <header className="shadow-sm px-3 bg-base-100 font-regular">
      <nav className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <button
              tabIndex={0}
              aria-label="منوی اصلی"
              className="btn btn-ghost lg:hidden hover:bg-base-200"
            >
              <HiMenuAlt1 className="text-xl" />
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
              aria-label="منوی ناوبری"
            >
              <li>
                <Link href="/">صفحه اصلی</Link>
              </li>
              <li>
                <Link href="/about">درباره ما</Link>
              </li>
            </ul>
          </div>
          <Link
            href="/"
            className="btn btn-ghost md:text-xl text-lg"
            aria-label="خانه ربات پرشین"
          >
            <IoIosArrowBack /> ربات پرشین
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul
            className="menu menu-horizontal px-1"
            role="menubar"
            aria-label="منوی اصلی"
          >
            <li role="none">
              <Link href="/" role="menuitem">
                صفحه اصلی
              </Link>
            </li>

            <li role="none">
              <Link href="/about" role="menuitem">
                درباره ما
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end gap-3">
          <a
            href="https://rubika.ir/@Persian__Bot"
            target="_blank"
            rel="nofollow noreferrer noopener"
            className="underlin md:text-base text-sm hover:text-green-600 flex items-center gap-1"
            aria-label="کانال روبیکا"
          >
            کانال روبیکا <HiOutlineExternalLink />
          </a>

          <HeaderTheme />
        </div>
      </nav>
    </header>
  );
}
