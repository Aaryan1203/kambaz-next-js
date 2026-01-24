import Modules from "../modules/page";
import CourseStatus from "./status";

export default function Home() {
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
