import React from "react";

interface ISidebar {}

const Sidebar: React.FC<ISidebar> = ({}) => {
  return (
    <aside className="w-[240px] min-h-[calc(100dvh-60px)] bg-surface border-r-2 border-border">
      sidebar
    </aside>
  );
};

export default Sidebar;
