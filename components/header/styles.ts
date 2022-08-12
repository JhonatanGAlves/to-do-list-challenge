import styled from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  height: 12.5rem;

  img {
    margin-top: 0.5rem;
  }

  strong {
    font-size: 2.5rem;
    font-weight: 900;

    color: var(--blue-500);

    span {
      color: var(--purple-700);
    }
  }

  background: var(--gray-700);
`;
