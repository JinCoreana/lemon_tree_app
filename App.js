import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LemonTreeHeader from "./components/LemonTreeHeader";
import LemonTreeFooter from "./components/LemonTreeFooter";
import WelcomeScreen from "./components/WelcomeScreen";
import MenuList from "./components/MenuList";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LemonTreeHeader />
        <WelcomeScreen />
      </View>
      <View style={styles.footerContainer}>
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
