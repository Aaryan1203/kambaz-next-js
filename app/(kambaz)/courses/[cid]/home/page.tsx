"use client";
import Modules from "../modules/page";
import CourseStatus from "./status";
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { cid } = useParams<{ cid: string }>();

  const { enrollments } = useSelector(
    (state: RootState) => state.enrollmentsReducer,
  );

  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer,
  );
  useEffect(() => {
    if (!currentUser?._id) {
      router.replace("/dashboard");
      return;
    }
    const isEnrolled = enrollments.some(
      (e) => e.user === currentUser._id && e.course === cid,
    );
    if (!isEnrolled) {
      router.replace("/dashboard");
    }
  }, [cid, currentUser?._id, router]);

  return (
    <div className="row gx-4" id="wd-home">
      <div className=" col-lg-9 pe-lg-5">
        <Modules />
      </div>
      <div className="d-none d-lg-block col-lg-3 ps-lg-1">
        <CourseStatus />
      </div>
    </div>
  );
}
