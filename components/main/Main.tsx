import { ContainerMain, ContentMain } from "./styles";
import { PlusCircle } from "phosphor-react";
import clipboardIcon from "../../assets/images/clipboard-icon.svg";

export const Main = () => {
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
          <div className="no-tasks">
            <img src={clipboardIcon} alt="Ícone de Clipboard" />
            <p>
              Você ainda não tem tarefas cadastradas
              <br />
              <span>Crie tarefas e organize seus itens a fazer</span>
            </p>
          </div>
        </div>
      </ContentMain>
    </ContainerMain>
  );
};
