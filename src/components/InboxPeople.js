import React from "react";
import { Searchbox } from "./Searchbox";
import { Sidebar } from "./Sidebar";

export const InboxPeople = () => {
  return (
    <div className="inbox_people">
      {/* <!-- Searchbox inicio --> */}
      <Searchbox></Searchbox>
      {/* <!-- Searchbox Fin --> */}
      <Sidebar></Sidebar>
    </div>
  );
};
