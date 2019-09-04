import React from "react";

import { Container, Navigation, ProfileImage, MenuItem } from "./styles";

import account from "../../assets/account.png";

export default function Header() {
  return (
    <Container>
      <h1>facebook.</h1>
      <Navigation>
        <nav>
          <ul>
            <MenuItem>
              Meu perfil
              <ProfileImage img src={account} />
            </MenuItem>
          </ul>
        </nav>
      </Navigation>
    </Container>
  );
}
