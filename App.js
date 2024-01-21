import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Profile } from "./components/Profile/profile";

export default function app() {
  return (
    <>
      <SafeAreaView style={s.container}>
        <Profile />
      </SafeAreaView>
    </>
  );
}

const s = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,

    flex: 1,
    justifyContent: "center",
    backgroundColor: "grey",
  },
});
