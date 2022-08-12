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

    .with-tasks {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding: 1rem;
      border: 1px solid var(--gray-400);
      border-radius: 8px;

      background: var(--gray-500);

      .checkbox-text {
        display: flex;
        align-items: flex-start;
        gap: 16px;

        .unchecked,
        .checked {
          width: 1rem;
          height: 1rem;
          border-radius: 50%;

          cursor: pointer;
        }

        .unchecked {
          border: 1px solid var(--blue-500);
          background: transparent;
        }

        .checked {
          display: flex;
          justify-content: center;
          align-items: center;

          color: var(--gray-100);
          background: var(--purple-700);
        }

        span {
          color: var(--gray-100);
        }
      }

      span {
        width: 620px;
        margin-top: -2px;
        font-size: 0.875rem;
      }

      svg {
        cursor: pointer;

        transition: color 0.2s;

        &:hover {
          color: #e25858;
        }
      }
    }
  }
`;
