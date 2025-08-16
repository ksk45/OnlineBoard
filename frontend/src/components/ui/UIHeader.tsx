import type React from "react";

// props定義
type UIHeaderProps = {
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
};

const UIHeader = ( props: UIHeaderProps) => {
  return (
    <header className="bg-white shadow-md">
      <div className="w-full mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
        {props.leftContent}
        </div>
        <div className="flex items-center">
          {props.rightContent}
        </div>
      </div>
    </header>
  );
};

export default UIHeader;
