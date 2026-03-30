"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import PeopleTable from "./PeopleTable";
import { findUsersForCourse } from "../../../client";

export default function PeopleTablePage({}: {}) {
  const { cid } = useParams();
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await findUsersForCourse(cid as string);
    setUsers(res);
  };

  useEffect(() => {
    fetchUsers();
  }, [cid]);

  return <PeopleTable users={users} fetchUsers={fetchUsers} />;
}
