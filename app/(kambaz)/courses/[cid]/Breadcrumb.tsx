"use client";
import React from "react";
import { usePathname } from "next/navigation";
export default function Breadcrumb({
  course,
}: {
  course: { name: string } | undefined;
}) {
  const pathname = usePathname();
  const crumb = pathname.split("/").pop() ?? "";

  const capitalizedCrumb = crumb.charAt(0).toUpperCase() + crumb.slice(1);

  return (
    <span>
      {course?.name} &gt; {capitalizedCrumb}
    </span>
  );
}
