import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TelaJavaScript from "./componentes/TelaJavaScript";
import TelaNode from "./componentes/TelaNode";
import TelaReact from "./componentes/TelaReact";

const MenuNav = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MenuNav.Navigator>
        <MenuNav.Screen name="Java Script" component={ TelaJavaScript }/>
        <MenuNav.Screen name="Node" component={ TelaNode }/>
        <MenuNav.Screen name="React" component={ TelaReact } />
      </MenuNav.Navigator>
    </NavigationContainer>
  );
}