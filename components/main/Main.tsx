import React from "react";
import { ContainerMain, ContentMain } from "./styles";
import { PlusCircle } from "phosphor-react";

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
      </ContentMain>
    </ContainerMain>
  );
};
