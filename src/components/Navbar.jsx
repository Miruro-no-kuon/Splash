import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const StyledNavbar = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  max-width: 75rem;
  margin: 0 auto;
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoLink = styled(Link)`
  font-size: 1.25rem;
  max-width: 8rem;
  content: var(--logo-text-transparent);
  cursor: pointer;
  text-decoration: none;
  color: var(--global-text);
  padding: 0.5rem;
  font-weight: bold;
  transition: 0.2s;
`;

const InputContainer = styled.div`
  display: flex;
  max-width: 100%;
  height: 1rem;
  align-items: center;
  padding: 0.8rem;
  border-radius: 0.2rem;
  background-color: var(--global-input-div);
`;

const Icon = styled.div`
  margin-right: 10px;
  color: var(--global-text);
  opacity: ${({ $isFocused }) => ($isFocused ? 1 : 0.5)};
  font-size: ${({ $fontSize }) => $fontSize || "0.8rem"};
  transition: opacity 0.2s;
`;

const SearchInput = styled.input`
  background: 0;
  border: none;
  color: var(--global-text);
  display: inline-block;
  font-size: 0.9rem;
  margin-right: 10px;
  outline: 0;
  padding: 0;
  padding-top: 0;
  width: 100%;
`;

const ClearButton = styled.button`
  background: transparent;
  border: none;
  color: var(--global-text);
  font-size: 1.1rem;
  cursor: pointer;
  opacity: ${({ $query }) => ($query ? 0.5 : 0)};
  visibility: ${({ $query }) => ($query ? "visible" : "hidden")};
  transition: color 0.2s, opacity 0.2s;

  &:hover {
    color: var(--global-text);
    opacity: 1;
  }
`;

const ThemeToggleBtn = styled.button`
  background: transparent;
  border: none;
  color: var(--global-text);
  font-size: 1.2rem;
  cursor: pointer;
  padding: 1rem;
  transition: color 0.2s;

  &:hover {
    color: var(--global-text);
    opacity: 1;
  }
`;

const SlashToggleBtn = styled.button`
  background: transparent;
  border: 2px solid var(--global-text);
  border-radius: 0.2rem;
  padding: 0.3rem;
  color: var(--global-text);
  font-size: 0.5rem;
  cursor: pointer;
  opacity: ${({ $isFocused }) => ($isFocused ? 1 : 0.5)};
  margin-left: 10px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

const Navbar = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const inputRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("query") || ""
  );

  useEffect(() => {
    document.documentElement.classList.toggle("light-mode", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const focusNavbar = (e) => {
      if (e.key === "/" && inputRef.current) {
        e.preventDefault();
        inputRef.current.focus();
        setIsSearchFocused(true);
      } else if (e.key === "Escape" && inputRef.current) {
        inputRef.current.blur();
        setIsSearchFocused(false);
      }
    };

    document.addEventListener("keydown", focusNavbar);
    return () => document.removeEventListener("keydown", focusNavbar);
  }, []);

  useEffect(() => {
    setSearchQuery(searchParams.get("query") || "");
  }, [searchParams]);

  const navigateWithQuery = (value) => {
    navigate(value ? `/search?query=${value}` : "/search");
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setSearchQuery(newValue);
    navigateWithQuery(newValue);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    navigateWithQuery("");
    inputRef.current.focus();
  };

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <StyledNavbar>
      <TopContainer>
        <LogoLink to="/home">見るろ の 久遠</LogoLink>{" "}
        <ThemeToggleBtn onClick={toggleTheme}>
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </ThemeToggleBtn>
      </TopContainer>
      <InputContainer>
        <Icon $isFocused={isSearchFocused}>
          <i className="fas fa-search"></i>
        </Icon>
        <SearchInput
          type="text"
          placeholder="Search Anime"
          value={searchQuery}
          onChange={handleInputChange}
          ref={inputRef}
        />
        <ClearButton $query={searchQuery} onClick={handleClearSearch}>
          <i className="fas fa-times"></i>
        </ClearButton>
        <SlashToggleBtn $isFocused={isSearchFocused}>
          <i className="fa-solid fa-slash fa-rotate-90"></i>
        </SlashToggleBtn>
      </InputContainer>
    </StyledNavbar>
  );
};

export default Navbar;
