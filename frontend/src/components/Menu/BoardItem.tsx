import { Trash2, Calendar, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

type BoardItemProps = {
  boardUuid: string;
  boardName: string;
  collaboratorNum: number;
  boardCreatedAt: string;
  boardImg?: string;
};

const BoardItem = (props: BoardItemProps) => {
  const navigate = useNavigate();

  const handleGoBoard = () => {
    navigate("/board/" + props.boardUuid);
  };

  return (
    <button className="cursor-pointer inline" onClick={handleGoBoard}>
      <div className="size-80 border rounded-xl border-gray-300 bg-white">
        <div className="space-y-2">
          {/* <img className="h-50 rounded-t-xl bg-blue-300"> */}
          {/* </img> */}
          {props.boardImg ? (
            // イメージありの場合はその画像を表示
            <img alt="Board Preview" className="w-full h-50 rounded-t-xl" />
          ) : (
            //イメージなしの場合はplaceholderのHTMLを表示
            <div className="w-full h-50 rounded-t-xl flex items-center justify-center bg-gray-100">
              <div className="size-20 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400">
                preView
              </div>
            </div>
          )}

          <div className="m-4">
            <div className="flex justify-between">
              <div>{props.boardName}</div>
              <Trash2 size={18} className="text-gray-400" />
            </div>
            <br />
            <div className="flex space-x-1">
              <Calendar size={12} className="text-gray-400 mt-[3px]" />{" "}
              <p className="text-[12px]">
              {new Date(props.boardCreatedAt).toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' })}
              </p>
            </div>
            <div className="flex space-x-1">
              <Users size={12} className="text-gray-400 mt-[3px]" />{" "}
              <p className="text-[12px]">
                {props.collaboratorNum} 名の共同編集者
              </p>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default BoardItem;
