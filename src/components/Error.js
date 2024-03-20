import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  // console.log(error);
  return (
    <>
      <h1>{error.status}: 😲 Page Not Found</h1>
    </>
  );
};

export default Error;
