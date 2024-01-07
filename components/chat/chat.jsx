import { View, Text, Image } from "react-native";
import { s } from "./chat.style";

export function Chat(props) {
  return (
    <>
      <View style={s.chatBubble}>
        <View style={s.imageWrap}>
          <Image style={s.image} source={{ uri: props.image }} />
        </View>
        <View style={s.messageWrap}>
          <Text style={s.fName}>{props.name}</Text>
          <Text style={s.message}>{props.message}</Text>
        </View>
      </View>
    </>
  );
}
