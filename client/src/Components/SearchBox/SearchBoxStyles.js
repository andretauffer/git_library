import styled, { css } from "styled-components";

export const Row = css`
  height: 40px;
  width: 100%;
`;

export const Style = css`
  border-radius: var(--border-radius);
  border: 2px solid var(--red);
  text-indent: 10px;
  background-color: var(--dark);
  color: var(--red);
  ::placeholder {
    color: var(--red);
  }
  :focus {
    border: 2px solid var(--blue);
  }
`;

export const BlackBox = css`
  margin-top: 5px;
  border-radius: var(--border-radius);
  border: none;
  text-indent: 10px;
  background-color: var(--darker);
  color: var(--red);
  font-size: 0.9rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Container = styled.div`
  margin-top: 20px;
  width: 300px;
  position: relative;
`;

export const SearchInput = styled.input`
  ${Row}
  ${Style}
  position: relative;
  margin-top: 5px;
`;

export const PageNumbersContainer = styled.div`
  width: calc(100% - 90px);
  display: flex;
  flex-flow: row nowrap;
`;

export const PageInput = styled.input`
  ${Row}
  ${Style}
  margin-top: 5px;
  width: calc(50%- 2.5px);
`;

export const SortResults = styled.select`
  ${Row}
  ${Style}
  margin-top: 5px;
`;

export const PaginationContainer = styled.div`
  ${Row}
  margin-top: 5px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

export const Page = styled.div`
  ${Style}
  min-width: 40px;
  height: 100%;
  margin: ${props => props.margin};
  position: relative;
`;

export const PagesDisplay = styled.div`
  ${Row}
  ${BlackBox}
  margin-left: 5px;
  width: calc(50% -2.5px);
  border: 2px solid var(--red);
`;

export const PagesTitle = styled.p`
  position: absolute;
  top: 5px;
  left: 0px;
  font-size: 0.5rem;
  text-transform: uppercase;
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const InputTitle = styled.p`
  position: absolute;
  top: 10px;
  left: 5px;
  font-size: 0.5rem;
  text-transform: uppercase;
  color: var(--red);
`;

export const ArrowLeft = styled.div`
  width: 10px;
  height: 10px;
  border-right: 10px solid var(--red);
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-70%, -50%);
`;

export const ArrowRight = styled.div`
  width: 10px;
  height: 10px;
  border-left: 10px solid var(--red);
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-30%, -50%);
`;

export const SearchIcon = styled.div`
  position: absolute;
  top: 15px;
  right: 10px;
  color: var(--red);
`;

export const Warning = styled.div`
  ${BlackBox}
  height: 20px;
  text-transform: uppercase;
  color: var(--red);
  font-weight: bold;
  font-size: 0.8rem;
  text-align: center;
  background-color: var(--darker);
`;
