"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname();
  const linkClassName = (path: string) => {
    return `list-group-item border-0 ${pathname.includes(path) ? "text-black active" : "text-danger"}`;
  };
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        return (
          <Link
            href={
              link === "People"
                ? `/courses/${cid}/people/table`
                : `/courses/${cid}/${link.toLowerCase()}`
            }
            key={`wd-course-${link.toLowerCase()}-link`}
            className={`list-group-item border-0 ${pathname.includes(link.toLowerCase()) ? "text-black active" : "text-danger"}`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}
