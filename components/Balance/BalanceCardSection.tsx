import React, { FunctionComponent, useRef } from "react";
import styled from "styled-components/native";

// Components
import BalanceCard from "./BalanceCard";

const BalanceCardSectionBackground = styled.View`
  flex: 2;
  width: 100%;
  align-items: center;
`;

// types
import { BalanceCardProps } from "./types";


const BalanceCardSection: FunctionComponent<BalanceCardProps> = (props) => {
  return (
    <BalanceCardSectionBackground>
      <BalanceCard {...props} />
    </BalanceCardSectionBackground>
  )
};

export default BalanceCardSection;