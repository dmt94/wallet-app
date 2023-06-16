import React, { FunctionComponent } from "react";

// screens
import Welcome from "./../screens/Welcome";
import Home from "./../screens/Home";

// custom components 
import { colors } from "../components/colors";
import Greeting from "../components/Header/Greeting";
import Profile from "../components/Header/Profile";
import Avi from "./../assets/avi/avatar.jpg";

//React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

/*
for typescript:
represents the available routes/screen names in the navigation stack. In this case, there is a single route named "Welcome" with an undefined parameter.
*/
type RootStackParamlist = {
  Welcome: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamlist>();

const RootStack: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.graylight,
            borderBottomWidth: 0,
            shadowColor: "transparent",
            shadowOpacity: 0,
            elevation: 0,
            height: 120,
          },
          headerTintColor: colors.secondary,
          headerRightContainerStyle: {
            paddingRight: 25,
          },
          headerLeftContainerStyle: {
            paddingLeft: 10,
          },
          headerRight: () => (
            <Profile
              img={Avi}
              imgContainerStyle={{
                backgroundColor: colors.tertiary
              }}
             />
          ),
        }}
      >
        <Stack.Screen 
          name="Welcome"
          component={ Welcome }
          options={{ headerShown: false }}
          />
        <Stack.Screen 
          name="Home"
          component={ Home }
          options={{
            headerTitle: (props) => (
              <Greeting
                mainText="Hey Dee!"
                subText="Welcome back!"
                {...props}
               />
              ),
              headerLeft: () => <></>
            }}        
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;