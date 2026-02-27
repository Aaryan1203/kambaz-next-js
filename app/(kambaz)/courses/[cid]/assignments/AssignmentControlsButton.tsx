import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "@/app/(kambaz)/components/GreenCheckmark";
import { FaTrash } from "react-icons/fa6";
export default function AssignmentsControlButtons({
  assignmentId,
  deleteAssignment,
}: {
  assignmentId: string;
  deleteAssignment: (assignmentId: string) => void;
}) {
  return (
    <div className="d-flex align-items-center gap-3">
      <FaTrash
        className="text-danger"
        style={{ cursor: "pointer" }}
        onClick={() => deleteAssignment(assignmentId)}
      />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
