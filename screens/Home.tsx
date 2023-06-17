import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

// custom components
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import CardSection from "../components/Cards/CardSection";
import TransactionSection from "../components/Transactions/TransactionSection";
import SendMoneySection from "../components/SendMoney/SendMoneySection";

const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`;


// card logos
import logo1 from "./../assets/cards/visa_white.png";
import logo2 from "./../assets/cards/mc.png";

// send money images
import portrait1 from "./../assets/portraits/1.jpg";
import portrait2 from "./../assets/portraits/2.png";
import portrait3 from "./../assets/portraits/3.jpg";

//types
import { RootStackParamlist } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
export type Props = StackScreenProps<RootStackParamlist, "Home">;

const Home: FunctionComponent<Props> = () => {
  const cardsData = [
    {
      id: 1,
      accountNo: "3424sf0",
      balance: 20000.15,
      alias: "Work Debit",
      logo: logo1,
    },
    {
      id: 2,
      accountNo: "02348sge",
      balance: 120000.15,
      alias: "Personal Prepaid",
      logo: logo2,
    },
    {
      id: 3,
      accountNo: "4dkdf3782",
      balance: 5600.15,
      alias: "School Prepaid",
      logo: logo1,
    },
  ];

  const transactionData = [
    {
      id: 1,
      amount: "-$86.00",
      date: "14 Sep 2021",
      title: "Taxi",
      subtitle: "Uber car",
      art: {
        background: colors.primary,
        icon: "car",
      }
    },
    {
      id: 2,
      amount: "-$286.00",
      date: "14 Sep 2021",
      title: "Shopping",
      subtitle: "Ali express",
      art: {
        background: colors.tertiary,
        icon: "cart",
      }
    },
    {
      id: 3,
      amount: "-$586.00",
      date: "22 April 2022",
      title: "Travel",
      subtitle: "Emirates",
      art: {
        background: colors.accent,
        icon: "airplane",
      }
    },
  ];

  const sendMoneyData = [
    {
      id: 1,
      amount: "2450.56",
      name: "Hunkle G.",
      background: colors.tertiary,
      img: portrait1,
    },
    {
      id: 2,
      amount: "13450.56",
      name: "Alexander J.H.",
      background: colors.primary,
      img: portrait2,
    },
    {
      id: 3,
      amount: "8000.56",
      name: "Taylor S.",
      background: colors.accent,
      img: portrait3,
    },
  ];

  return (
    <HomeContainer>
      <StatusBar style="dark" />
      <CardSection data={cardsData} />
      <TransactionSection data={transactionData}/>
      <SendMoneySection data={sendMoneyData} />
    </HomeContainer>
  );
};

export default Home;