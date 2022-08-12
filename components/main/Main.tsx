import { ContainerMain, ContentMain } from "./styles";
import { Check, PlusCircle, Trash } from "phosphor-react";
import { useState } from "react";

export const Main = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  function handleClickToCheck() {
    setIsChecked(!isChecked);
  }

  return (
    <ContainerMain>
      <ContentMain>
        <div className="add-new-task">
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button>
            Criar
            <PlusCircle size={16} />
          </button>
        </div>
        <div className="tasks-created-and-completed">
          <div className="tasks-created">
            <strong>Tarefas criadas</strong>
            <div className="counter">0</div>
          </div>
          <div className="tasks-completed">
            <strong>Tarefas criadas</strong>
            <div className="counter">0</div>
          </div>
        </div>
        <div className="to-do-list">
          <div className="with-tasks">
            <div className="checkbox-text">
              {isChecked ? (
                <div onClick={handleClickToCheck} className="checked">
                  <Check size={10} />
                </div>
              ) : (
                <div onClick={handleClickToCheck} className="unchecked" />
              )}
              <span
                style={
                  isChecked
                    ? {
                        color: "var(--gray-300)",
                        textDecoration: "line-through",
                      }
                    : {}
                }
              >
                Integer urna interdum massa libero auctor neque turpis turpis
                semper. Duis vel sed famesdwd wd wdwdwdwdwd dwdwdwd wdwdwdwd
                wdwdwd w
              </span>
            </div>
            <Trash size={16} />
          </div>
        </div>
      </ContentMain>
    </ContainerMain>
  );
};
