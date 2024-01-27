import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Chat } from "./components/chat/chat";
import { Profile } from "./components/Profile/profile";
import { Button } from "./components/button/button";

export default function app() {
  return (
    <>
      <SafeAreaView style={s.container}>
        <Button />
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
