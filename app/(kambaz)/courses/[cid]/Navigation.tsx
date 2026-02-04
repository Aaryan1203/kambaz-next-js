"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function CourseNavigation() {
  const pathname = usePathname();
  const linkClassName = (path: string) => {
    return `list-group-item border-0 ${pathname.includes(path) ? "text-black active" : "text-danger"}`;
  };

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        href="/courses/1234/home"
        id="wd-course-home-link"
        className={linkClassName("/home")}
      >
        Home
      </Link>
      <Link
        href="/courses/1234/modules"
        id="wd-course-modules-link"
        className={linkClassName("/modules")}
      >
        Modules
      </Link>
      <Link
        href="/courses/1234/piazza"
        id="wd-course-piazza-link"
        className={linkClassName("/piazza")}
      >
        Piazza
      </Link>
      <Link
        href="/courses/1234/zoom"
        id="wd-course-zoom-link"
        className={linkClassName("/zoom")}
      >
        Zoom
      </Link>
      <Link
        href="/courses/1234/assignments"
        id="wd-course-assignments-link"
        className={linkClassName("/assignments")}
      >
        Assignments
      </Link>
      <Link
        href="/courses/1234/quizzes"
        id="wd-course-quizzes-link"
        className={linkClassName("/quizzes")}
      >
        Quizzes
      </Link>
      <Link
        href="/courses/1234/people/table"
        id="wd-course-people-link"
        className={linkClassName("/people")}
      >
        People
      </Link>
    </div>
  );
}
