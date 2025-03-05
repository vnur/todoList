import { useState } from "react";

export const TodoForm = ({ submitbutton  }) => {
  const [inputvalue, setInputValue] = useState(  {id: "",
    content: "",
    isChecked: false,});

  //todo hadleInputchange functionality
  const hadleInputchange = (value) => {
    setInputValue({ id: value, content: value, isChecked: false });
  };

  //todo handleSubmit functionality
  const handleSubmit = (e) => {
    e.preventDefault();
    submitbutton(inputvalue)
    setInputValue({ id: "", content: "", isChecked: false });
  };


  return (
    <>
      <div className="todo-form">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              value={inputvalue.content}
              onChange={(e) => hadleInputchange(e.target.value)}
            />
            <button>submit</button>
          </div>
        </form>
      </div>
    </>
  );
};
