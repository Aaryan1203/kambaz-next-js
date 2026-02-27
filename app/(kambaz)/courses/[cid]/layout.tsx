"use client";
import { ReactNode, useState } from "react";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa";
import Breadcrumb from "./Breadcrumb";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { RootState } from "../../store";
export default function CoursesLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams();
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const course = courses.find((course: any) => course._id === cid);
  const [showNavBar, setShowNavBar] = useState(true);
  return (
    <div id="wd-courses">
      <h2 className="text-danger ">
        <FaAlignJustify
          className="me-4 fs-4 mb-1"
          onClick={() => setShowNavBar(!showNavBar)}
          style={{ cursor: "pointer" }}
        />
        <Breadcrumb course={course} />
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block me-4">
          {showNavBar && <CourseNavigation />}
        </div>
        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}
