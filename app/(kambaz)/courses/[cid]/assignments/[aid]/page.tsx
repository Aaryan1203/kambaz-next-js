"use client";

import { useParams } from "next/navigation";
import { Button } from "react-bootstrap";
import * as db from "../../../../database";
import Link from "next/link";

export default function AssignmentEditor() {
  const { aid, cid } = useParams();
  const allAssignments = db.assignments;
  const assignment = allAssignments.find(
    (assignment) => assignment._id === aid,
  );

  return (
    <div id="wd-assignments-editor">
      <div className="d-flex flex-column gap-2">
        <label htmlFor="wd-name">Assignment Name</label>
        <input
          id="wd-name"
          className="p-2 border"
          defaultValue={assignment?.title}
        />
      </div>
      <br />
      <textarea
        id="wd-description"
        className="p-2 border"
        defaultValue={assignment?.description}
      />
      <br />
      <br />
      <table className="w-100">
        <tbody>
          <tr>
            <td className="pe-3 text-end align-top text-nowrap">
              <label htmlFor="wd-points" className="col-form-label">
                Points
              </label>
            </td>
            <td className="w-100">
              <input
                id="wd-points"
                className="form-control w-100"
                defaultValue={assignment?.points}
              />
            </td>
          </tr>
          <tr>
            <td className="pe-3 text-end align-top text-nowrap">
              <label htmlFor="wd-group" className="col-form-label">
                Assignment Group
              </label>
            </td>
            <td className="w-100">
              <select id="wd-group" className="p-2 border rounded-md w-100">
                <option>ASSIGNMENTS</option>
                <option>QUIZZES</option>
                <option>EXAMS</option>
                <option>HOMEWORK</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="pe-3 text-end align-top text-nowrap">
              <label htmlFor="wd-display-grade-as" className="col-form-label">
                Display Grade As
              </label>
            </td>
            <td>
              <select
                id="wd-display-grade-as"
                className="p-2 border rounded-md w-100"
              >
                <option>Percentage</option>
                <option>Raw Score</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="pe-3 text-end align-top text-nowrap">
              <label htmlFor="wd-submission-type" className="col-form-label">
                Submission Type
              </label>
            </td>
            <td className="border p-3">
              <select
                id="wd-submission-type"
                className="p-2 border rounded-md w-100"
              >
                <option>Online</option>
                <option>In Person</option>
              </select>
              <br />
              <br />
              <div className="d-flex flex-column">
                <label htmlFor="wd-text-entry">
                  <strong>Online Entry Options</strong>
                </label>
                <div className="d-flex gap-2 align-items-center">
                  <input type="checkbox" id="wd-text-entry" />
                  <label htmlFor="wd-text-entry">Text Entry</label>
                </div>
                <br />
                <div className="d-flex gap-2 align-items-center">
                  <input type="checkbox" id="wd-website-url" />
                  <label htmlFor="wd-website-url">Website URL</label>
                </div>
                <br />
                <div className="d-flex gap-2 align-items-center">
                  <input type="checkbox" id="wd-media-recordings" />
                  <label htmlFor="wd-media-recordings">Media Recordings</label>
                </div>
                <br />
                <div className="d-flex gap-2 align-items-center">
                  <input type="checkbox" id="wd-student-annotation" />
                  <label htmlFor="wd-student-annotation">
                    Student Annotation
                  </label>
                </div>
                <br />
                <div className="d-flex gap-2 align-items-center">
                  <input type="checkbox" id="wd-file-upload" />
                  <label htmlFor="wd-file-upload">File Uploads</label>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="pe-3 text-end align-top text-nowrap">
              <label htmlFor="wd-assign-to" className="col-form-label">
                Assign To
              </label>
            </td>
            <td className="border p-3">
              <label htmlFor="wd-text-entry">
                <strong>Assign To</strong>
              </label>
              <div className="d-flex flex-column">
                <input
                  id="wd-assign-to"
                  className="p-2 border mb-2"
                  defaultValue={"Everyone"}
                />
                <label htmlFor="wd-due-date">
                  <strong>Due</strong>
                </label>
                <input
                  type="date"
                  id="wd-due-date"
                  className="p-2 border mb-2"
                  defaultValue={assignment?.dueDate?.slice(0, 10)}
                />
                <div className="d-flex gap-2">
                  <div className="d-flex flex-column">
                    <label htmlFor="wd-available-from">
                      <strong>Available From</strong>
                    </label>
                    <input
                      type="date"
                      id="wd-available-from"
                      defaultValue={assignment?.availableDate?.slice(0, 10)}
                      className="p-2 border mb-2"
                    />
                  </div>
                  <div className="d-flex flex-column">
                    <label htmlFor="wd-available-until">
                      <strong>Until</strong>
                    </label>
                    <input
                      type="date"
                      id="wd-available-until"
                      className="p-2 border mb-2"
                    />
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
      <div className="d-flex justify-content-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          className="btn btn-secondary rounded-0"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          className="btn btn-danger rounded-0"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
