import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
  return (
    <div>
      <h1>opps!!1</h1>
      <h1>something wrond!!!</h1>
      <h1>{error.status} : {error.statusText}</h1>
    </div>
  );
};

export default Error;