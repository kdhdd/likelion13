import styled from "styled-components";
import { FiSearch, FiArrowRight } from "react-icons/fi";

export default function SearchBar() {
  return (
    <SearchWrapper>
      <SearchIcon />
      <SearchInput placeholder="키워드를 입력하세요." />
      <SearchButton>
        <FiArrowRight size={20} />
      </SearchButton>
    </SearchWrapper>
  );
}

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #1c1c1c;
  border-radius: 100px;
  padding: 10px 20px;
  width: 420px;
  height: 45px;
`;

const SearchIcon = styled(FiSearch)`
  color: white;
  font-size: 18px;
  margin-right: 10px;
`;

const SearchInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  color: white;
  font-size: 14px;
  outline: none;

  &::placeholder {
    color: #d0d0d0;
  }
`;

const SearchButton = styled.button`
  background: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
