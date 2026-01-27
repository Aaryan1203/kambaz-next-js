import { Button } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <div className="d-flex flex-column gap-2">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" className="p-2 border" defaultValue="A1" />
      </div>
      <br />
      <textarea
        id="wd-description"
        className="p-2 border"
        defaultValue={
          "The assignment is available online. \n\nSubmit a link to the landing page of your Web application running on Netlify. \n\nThe landing page should include the following: \n" +
          "\t• Your full name and section\n" +
          "\t• Links to each of the lab assignments\n" +
          "\t• Link to the Kanbas application\n" +
          "\t• Links to all relevant source code repositories\n" +
          "\nThe Kanbas application should include a link to navigate back to the landing page"
        }
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
                defaultValue={100}
              />
            </td>
          </tr>
          <br />
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
          <br />
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
          <br />
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
              <td className="d-flex flex-column">
                <label htmlFor="wd-text-entry">
                  <strong>Online Entry Options</strong>
                </label>
                <div className="d-flex gap-2 align-items-center">
                  <input
                    type="checkbox"
                    name="check-text-entry"
                    id="wd-text-entry"
                  />
                  <label htmlFor="wd-text-entry">Text Entry</label>
                </div>
                <br />
                <div className="d-flex gap-2 align-items-center">
                  <input
                    type="checkbox"
                    name="check-website-url"
                    id="wd-website-url"
                  />
                  <label htmlFor="wd-website-url">Website URL</label>
                </div>
                <br />
                <div className="d-flex gap-2 align-items-center">
                  <input
                    type="checkbox"
                    name="check-media-recordings"
                    id="wd-media-recordings"
                  />
                  <label htmlFor="wd-media-recordings">Media Recordings</label>
                </div>
                <br />
                <div className="d-flex gap-2 align-items-center">
                  <input
                    type="checkbox"
                    name="check-student-annotation"
                    id="wd-student-annotation"
                  />
                  <label htmlFor="wd-student-annotation">
                    Student Annotation
                  </label>
                </div>
                <br />
                <div className="d-flex gap-2 align-items-center">
                  <input
                    type="checkbox"
                    name="check-file-upload"
                    id="wd-file-upload"
                  />
                  <label htmlFor="wd-file-upload">File Uploads</label>
                </div>
              </td>
            </td>
          </tr>
          <br />
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
                  defaultValue="2024-05-13"
                />
                <div className="d-flex gap-2">
                  <div className="d-flex flex-column">
                    <label htmlFor="wd-available-from">
                      <strong>Available From</strong>
                    </label>
                    <input
                      type="date"
                      id="wd-available-from"
                      defaultValue="2024-05-06"
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
                      defaultValue="2024-05-20"
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
        <Button className="btn btn-secondary rounded-0" id="wd-collapse-all">
          Cancel
        </Button>
        <Button className="btn btn-danger rounded-0" id="wd-collapse-all">
          Save
        </Button>
      </div>
    </div>
  );
}
