import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import store from "./reducers/rootReducer";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import BackButton from "./components/BackButton";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                elevation: 10,
                opacity: 0.95,
                backgroundColor: "#6930c3",
                height: 90,
              },
              headerTintColor: "whitesmoke",
              headerTitleStyle: {
                fontSize: 25,
              },
            }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
              options={({ navigation, route }) => ({
                headerLeft: () => (
                  <BackButton navigation={navigation} route={route} />
                ),
              })}
              name="Chat"
              component={Chat}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
