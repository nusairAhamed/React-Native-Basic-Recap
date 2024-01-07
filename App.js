import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Chat } from "./components/chat/chat";

export default function app() {
  return (
    <>
      <SafeAreaView style={s.container}>
        <Chat
          name="Nusair"
          message="First Message"
          image="https://i.pravatar.cc/150?img=52"
        />

        <Chat
          name="Rakees"
          message="Third Message"
          image="https://i.pravatar.cc/150?img=53"
        />
      </SafeAreaView>
    </>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "grey",
  },
});
