import styled from "styled-components";

export const ContainerMain = styled.main`
  display: flex;
`;

export const ContentMain = styled.div`
  display: flex;
  flex-direction: column;
  margin: -1.65rem auto 0;

  width: 48rem;
  padding: 0 1rem;

  .add-new-task {
    display: flex;
    gap: 8px;

    input {
      padding: 1rem;
      width: 39.975rem;
      max-width: 39.975rem;

      border-radius: 8px;
      outline: none;

      border: 1px solid var(--gray-700);
      color: var(--gray-300);
      background: var(--gray-500);

      &::placeholder {
        color: var(--gray-300);
      }
    }

    button {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 1rem;

      font-size: 0.875rem;
      font-weight: 700;

      border-radius: 8px;
      border: none;

      cursor: pointer;

      color: var(--gray-100);
      background: var(--blue-700);

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;
