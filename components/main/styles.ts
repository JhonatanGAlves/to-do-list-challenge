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

  .tasks-created-and-completed {
    margin-top: 4rem;
    display: flex;
    justify-content: space-between;

    .tasks-created,
    .tasks-completed {
      display: flex;
      align-items: center;
      gap: 8px;

      font-size: 0.875rem;

      .counter {
        padding: 2px 8px;
        border-radius: 999px;
        font-size: 0.75rem;
        font-weight: 700;

        color: var(--gray-200);
        background: var(--gray-400);
      }
    }

    .tasks-created {
      color: var(--blue-500);
    }

    .tasks-completed {
      color: var(--purple-500);
    }
  }

  .to-do-list {
    margin-top: 1.5rem;

    border-radius: 8px;
    border-top: 1px solid var(--gray-400);

    .no-tasks {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 1rem;
      margin: 4rem 0;

      p {
        font-weight: 700;

        span {
          font-weight: 400;
        }
      }
    }
  }
`;
