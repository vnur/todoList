import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({ data,deletetodo,checkedtodo, Clearall }) => {
  return (
    <>
      <div className="todo-list">
        <ul>
          {data.map((curEle) => {
            return (
              <li key={curEle.id}>
                <span className={curEle.isChecked ? "checkon" : "checkoff"}>{curEle.content}</span>
                <span>
                  <MdDeleteForever onClick={ ()=>deletetodo(curEle)}/>
                  <MdCheck onClick={()=>checkedtodo(curEle.content)} />
                </span>
              </li>
            );
          })}
        </ul> 
        <div>
          <button onClick={Clearall}>Clean all</button>
        </div>
      </div>
    </>
  );
};
