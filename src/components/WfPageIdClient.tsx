"use client";

import { useEffect } from "react";

export default function WfPageIdClient({ id }: { id: string }) {
  useEffect(() => {
    document.documentElement.setAttribute("data-wf-page", id);
  }, [id]);

  return null;
}
