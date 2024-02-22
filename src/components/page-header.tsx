import React from "react";
import { ModeToggle } from "@/components/toggle-theme";
export default function PageHeader() {
  return (
    <header className="flex justify-end items-center py-4 px-8">
      <ModeToggle />
    </header>
  );
}
