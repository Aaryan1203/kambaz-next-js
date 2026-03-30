import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useParams } from "next/navigation";
import Link from "next/link";
import * as client from "../../../account/client";
import { FaPencil } from "react-icons/fa6";
import { FaCheck, FaUserCircle } from "react-icons/fa";
import { FormControl } from "react-bootstrap";

export default function PeopleDetails({
  uid,
  onClose,
}: {
  uid: string | null;
  onClose: () => void;
}) {
  const [user, setUser] = useState<any>({});
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [nameEditing, setNameEditing] = useState(false);
  const [roleEditing, setRoleEditing] = useState(false);
  const [emailEditing, setEmailEditing] = useState(false);

  const fetchUser = async () => {
    if (!uid) return;
    const user = await client.findUserById(uid);
    setUser(user);
    setName(`${user.firstName} ${user.lastName}`);
    setRole(user.role || "");
    setEmail(user.email || "");
  };

  const deleteUser = async (uid: string) => {
    await client.deleteUser(uid);
    onClose();
  };

  const saveUser = async () => {
    const [firstName, lastName] = name.split(" ");
    const updatedUser = {
      ...user,
      firstName,
      lastName,
      ...(role ? { role } : {}),
      ...(email ? { email } : {}),
    };
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setNameEditing(false);
    setRoleEditing(false);
    setEmailEditing(false);
    onClose();
  };

  useEffect(() => {
    if (uid) fetchUser();
  }, [uid]);
  if (!uid) return null;
  return (
    <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
      <button
        onClick={onClose}
        className="btn position-fixed end-0 top-0 wd-close-details"
      >
        <IoCloseSharp className="fs-1" />
      </button>
      <div className="text-center mt-2">
        <FaUserCircle className="text-secondary me-2 fs-1" />
      </div>
      <hr />
      <div className="text-danger fs-4 wd-name">
        {!nameEditing && (
          <FaPencil
            onClick={() => setNameEditing(true)}
            className="float-end fs-5 mt-2 wd-edit"
          />
        )}
        {nameEditing && (
          <FaCheck
            onClick={() => saveUser()}
            className="float-end fs-5 mt-2 me-2 wd-save"
          />
        )}
        {!nameEditing && (
          <div className="wd-name" onClick={() => setNameEditing(true)}>
            {user.firstName} {user.lastName}
          </div>
        )}
        {user && nameEditing && (
          <FormControl
            className="w-50 wd-edit-name"
            defaultValue={`${user.firstName} ${user.lastName}`}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                saveUser();
              }
            }}
          />
        )}
      </div>
      <div className="wd-roles">
        {!roleEditing && (
          <FaPencil
            onClick={() => setRoleEditing(true)}
            className="float-end fs-6 mt-2 wd-edit"
          />
        )}
        {roleEditing && (
          <FaCheck
            onClick={() => saveUser()}
            className="float-end fs-6 mt-2 me-2 wd-save"
          />
        )}
        {!roleEditing && (
          <div className="wd-role" onClick={() => setRoleEditing(true)}>
            <b>Roles:</b> {user.role}
          </div>
        )}
        {user && roleEditing && (
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="form-select w-50 wd-select-role"
          >
            <option value="STUDENT">Student</option>
            <option value="TA">Teachers Assistant</option>
            <option value="FACULTY">Faculty</option>
            <option value="ADMIN">Administrator</option>
          </select>
        )}
      </div>
      <div className="wd-email">
        {!emailEditing && (
          <FaPencil
            onClick={() => setEmailEditing(true)}
            className="float-end fs-6 mt-2 wd-edit"
          />
        )}
        {emailEditing && (
          <FaCheck
            onClick={() => saveUser()}
            className="float-end fs-6 mt-2 me-2 wd-save"
          />
        )}
        {!emailEditing && (
          <div onClick={() => setEmailEditing(true)}>
            <b>Email:</b> <span className="wd-email">{user.email}</span>
          </div>
        )}
        {user && emailEditing && (
          <FormControl
            className="w-75 wd-edit-email"
            defaultValue={user.email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                saveUser();
              }
            }}
          />
        )}
      </div>
      <b>Login ID:</b> <span className="wd-login-id"> {user.loginId} </span>
      <br />
      <b>Section:</b> <span className="wd-section"> {user.section} </span>
      <br />
      <b>Total Activity:</b>
      <span className="wd-total-activity">{user.totalActivity}</span>
      <hr />
      <button
        onClick={() => deleteUser(uid)}
        className="btn btn-danger float-end wd-delete"
      >
        Delete
      </button>
      <button
        onClick={onClose}
        className="btn btn-secondary float-end me-2 wd-cancel"
      >
        Cancel
      </button>
    </div>
  );
}
