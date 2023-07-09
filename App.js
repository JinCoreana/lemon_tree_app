import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LemonTreeHeader from "./components/LemonTreeHeader";
import LemonTreeFooter from "./components/LemonTreeFooter";
import WelcomeScreen from "./components/WelcomeScreen";
import MenuList from "./components/MenuList";
import FeedbackForm from "./components/FeedbackForm";
import LoginPage from "./components/LoginPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <View style={styles.container}>
        <LemonTreeHeader />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="LogIn"
            screenOptions={{ headerStyle: { backgroundColor: "#FBDABB" } }}
          >
            <Stack.Screen
              name="Welcome"
              component={WelcomeScreen}
              options={{ title: "Home" }}
            />
            <Stack.Screen name="Menu" component={MenuList} />
            <Stack.Screen name="LogIn" component={LoginPage} />
            <Stack.Screen name="Feedback" component={FeedbackForm} />
          </Stack.Navigator>
        </NavigationContainer>

        <LemonTreeFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  footerContainer: { backgroundColor: "#333333" },
});
