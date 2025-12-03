import { useParams } from "react-router-dom";


const BoardPage = () => {

  const { boardUuid } = useParams();

  return (
    <>
      <h1>BoardPage</h1>
      <div>boarduuid: {boardUuid}</div>
    </>
  );
};

export default BoardPage;
