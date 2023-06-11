import { Outlet } from "react-router-dom";

type Props = {};

function InnerContent({}: Props) {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default InnerContent;
