import { StyleSheet, Text, View } from "react-native";

export default function LemonTreeHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText} numberOfLines={2}>
        Little Lemon
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EE9972",
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "black",
    textAlign: "center",
  },
});
