//import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

import TelaJavaScript from "./componentes/TelaJavaScript";
import TelaNode from "./componentes/TelaNode";
import TelaReact from "./componentes/TelaReact";

const MenuNav = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MenuNav.Navigator
        screenOptions={{
          tabBarIcon: {
            backgroundColor: "red",
          },
        }}
      >
        <MenuNav.Screen 
          name="Java Script" 
          component={ TelaJavaScript } 
          options={{
              tabBarIcon: () => (
                <AntDesign name="home" size={24} color="black" />
              ),
              
          }}
        />
        <MenuNav.Screen name="Node" component={ TelaNode } options={{tabBarIcon: () => (<AntDesign name="chrome" size={24} color="red"  />),}}
      />
        <MenuNav.Screen name="React" component={ TelaReact } />
      </MenuNav.Navigator>
    </NavigationContainer>
  );
}
//https://icons.expo.fyi/Fontisto/home