import React, { FunctionComponent, useRef } from "react";
import styled from "styled-components/native";

// custom components
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

const AmountSectionBackground = styled.View`
  flex: 1;
  width: 100%;
  padding-top: 5px;
  align-items: center;
`;

// types
import { AmountProps } from "./types";

const AmountSection: FunctionComponent<AmountProps> = (props) => {
  return ( 
    <AmountSectionBackground>
      <SmallText textStyles={{ color: colors.secondary, marginBottom: 15 }}>
        Total Balance
      </SmallText>
      <RegularText textStyles={{ color: colors.secondary, marginBottom: 28 }}>
        $ {props.balance}
      </RegularText>
    </AmountSectionBackground>
   );
}
 
export default AmountSection;