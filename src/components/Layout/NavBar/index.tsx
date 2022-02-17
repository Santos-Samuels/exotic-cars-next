import { useEffect, useState } from "react";
import {
  Logo,
  StyledNav,
  AuthButton,
  FilterContainer,
  Input,
  SearchButton,
  InputDataContainer,
  FilterContent,
} from "./styles";

const NavBar: React.FC = () => {
  return (
    <StyledNav>
      <Logo>
        <strong>Exotic</strong>
        <span>Cars</span>
      </Logo>

      <FilterContainer>
        <FilterContent>
          <Input>
            <span className="material-icons">place</span>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Enter an adress"
            />
          </Input>

          <InputDataContainer>
            <Input>
              <span className="material-icons">calendar_month</span>
              <input type="date" name="startDate" id="startDate" />
            </Input>

            <Input>
              <span className="material-icons">calendar_month</span>
              <input type="date" name="endDate" id="endDate" />
            </Input>
          </InputDataContainer>
        </FilterContent>

        <SearchButton className="material-icons">search</SearchButton>
      </FilterContainer>

      <section>
        <AuthButton>Sign up</AuthButton>
        <AuthButton outline>Sign in</AuthButton>
      </section>
    </StyledNav>
  );
};

export default NavBar;
