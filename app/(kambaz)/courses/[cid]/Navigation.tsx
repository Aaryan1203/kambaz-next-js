"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
export default function CourseNavigation() {
  const pathname = usePathname();
  const { cid } = useParams();
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
