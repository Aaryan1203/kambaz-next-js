"use client";

import { useState } from "react";
import { FormControl } from "react-bootstrap";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const [module, setModule] = useState({
    id: "1",
    name: "Module 1",
    description: "Description 1",
    course: "Course 1",
  });

  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`;

  return (
    <div id="wd-working-with-objects" className="container mt-3">
      <h3>Working With Objects</h3>

      <h4 className="mt-4">Modifying Properties</h4>

      <div className="mb-3">
        <label htmlFor="wd-assignment-title" className="form-label">
          Assignment Title
        </label>
        <div className="d-flex gap-2 align-items-center">
          <FormControl
            id="wd-assignment-title"
            value={assignment.title}
            onChange={(e) =>
              setAssignment({ ...assignment, title: e.target.value })
            }
          />
          <a
            id="wd-update-assignment-title"
            className="btn btn-primary text-nowrap"
            href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
          >
            Update
          </a>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="wd-assignment-score" className="form-label">
          Assignment Score
        </label>
        <div className="d-flex gap-2 align-items-center">
          <FormControl
            id="wd-assignment-score"
            type="number"
            value={assignment.score}
            onChange={(e) =>
              setAssignment({
                ...assignment,
                score: parseInt(e.target.value) || 0,
              })
            }
          />
          <a
            id="wd-update-assignment-score"
            className="btn btn-primary text-nowrap"
            href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
          >
            Update
          </a>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="wd-assignment-completed" className="form-label">
          Assignment Completed
        </label>
        <div className="d-flex gap-2 align-items-center justify-content-between">
          <input
            id="wd-assignment-completed"
            type="checkbox"
            checked={assignment.completed}
            onChange={(e) =>
              setAssignment({
                ...assignment,
                completed: e.target.checked,
              })
            }
          />
          <a
            id="wd-update-assignment-completed"
            className="btn btn-primary text-nowrap"
            href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
          >
            Update
          </a>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="wd-module-name" className="form-label">
          Module Name
        </label>
        <div className="d-flex gap-2 align-items-center">
          <FormControl
            id="wd-module-name"
            value={module.name}
            onChange={(e) => setModule({ ...module, name: e.target.value })}
          />
          <a
            id="wd-update-module-name"
            className="btn btn-primary text-nowrap"
            href={`${MODULE_API_URL}/name/${module.name}`}
          >
            Update
          </a>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="wd-module-description" className="form-label">
          Module Description
        </label>
        <div className="d-flex gap-2 align-items-center">
          <FormControl
            id="wd-module-description"
            value={module.description}
            onChange={(e) =>
              setModule({ ...module, description: e.target.value })
            }
          />
          <a
            id="wd-update-module-description"
            className="btn btn-primary text-nowrap"
            href={`${MODULE_API_URL}/description/${module.description}`}
          >
            Update
          </a>
        </div>
      </div>

      <hr />

      <h4>Retrieving Objects</h4>
      <div className="d-flex gap-2 mb-3">
        <a
          id="wd-retrieve-assignments"
          className="btn btn-primary"
          href={`${HTTP_SERVER}/lab5/assignment`}
        >
          Get Assignment
        </a>
        <a
          id="wd-retrieve-modules"
          className="btn btn-primary"
          href={`${HTTP_SERVER}/lab5/module`}
        >
          Get Module
        </a>
      </div>

      <hr />

      <h4>Retrieving Properties</h4>
      <div className="d-flex gap-2">
        <a
          id="wd-retrieve-assignment-title"
          className="btn btn-primary"
          href={`${HTTP_SERVER}/lab5/assignment/title`}
        >
          Get Assignment Title
        </a>
        <a
          id="wd-retrieve-module-name"
          className="btn btn-primary"
          href={`${HTTP_SERVER}/lab5/module/name`}
        >
          Get Module Name
        </a>
      </div>

      <hr />
    </div>
  );
}
