"use client";

import Link from "next/link";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { usePathname } from "next/navigation";

export default function KambazNavigation() {
  const pathname = usePathname();

  const linkClass = (path: string) => {
    return `text-decoration-none ${pathname.includes(path) ? "text-danger" : "text-white"}`;
  };

  const backgroundClass = (path: string) => {
    return `border-0 text-center ${pathname.includes(path) ? "bg-white" : "bg-black"}`;
  };

  return (
    <ListGroup
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: 120 }}
      id="wd-kambaz-navigation"
    >
      <ListGroupItem
        className="bg-black border-0 text-center"
        as="a"
        target="_blank"
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
      >
        <img src="/images/NEU.jpg" width="75px" alt="Northeastern University" />
      </ListGroupItem>
      <ListGroupItem className={backgroundClass("/account")}>
        <Link
          href="/account"
          id="wd-account-link"
          className={linkClass("/account")}
        >
          <FaRegCircleUser
            className={`fs-1 ${pathname.includes("/account") ? "text-danger" : "text-white"}`}
          />
          <br />
          Account
        </Link>
      </ListGroupItem>
      <ListGroupItem className={backgroundClass("/dashboard")}>
        <Link
          href="/dashboard"
          id="wd-dashboard-link"
          className={linkClass("/dashboard")}
        >
          <AiOutlineDashboard className="fs-1 text-danger" />
          <br />
          Dashboard
        </Link>
      </ListGroupItem>
      <ListGroupItem className={backgroundClass("/courses")}>
        <Link
          href="/dashboard"
          id="wd-course-link"
          className={linkClass("/courses")}
        >
          <LiaBookSolid className="fs-1 text-danger" />
          <br />
          Courses
        </Link>
      </ListGroupItem>
      <ListGroupItem className={backgroundClass("/calendar")}>
        <Link
          href="/calendar"
          id="wd-calendar-link"
          className={linkClass("/calendar")}
        >
          <IoCalendarOutline className="fs-1 text-danger" />
          <br />
          Calendar
        </Link>
      </ListGroupItem>
      <ListGroupItem className={backgroundClass("/inbox")}>
        <Link href="/inbox" id="wd-inbox-link" className={linkClass("/inbox")}>
          <FaInbox className="fs-1 text-danger" />
          <br />
          Inbox
        </Link>
      </ListGroupItem>
      <ListGroupItem className={backgroundClass("/labs")}>
        <Link href="/labs" id="wd-labs-link" className={linkClass("/labs")}>
          <LiaCogSolid className="fs-1 text-danger" />
          <br />
          Labs
        </Link>
      </ListGroupItem>
    </ListGroup>
  );
}
