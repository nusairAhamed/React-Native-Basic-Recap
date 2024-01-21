import { Text, View, Image } from "react-native";
import { s } from "./profile.style";
import Icon from "react-native-vector-icons/AntDesign";

export function Profile() {
  return (
    <>
      <View style={s.card}>
        {/* First Row Starts Here */}
        <View style={s.firstRow}>
          <View style={s.imageWrap}>
            <Image
              style={s.image}
              source={{ uri: "https://i.pravatar.cc/100?img=20" }}
            />
          </View>
          <View style={s.contentWrap}>
            <Text style={s.name}>Nusair</Text>
            <Text style={s.content}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem
              ipsum dolor sit amet consectetur, adipisicing elit.
            </Text>
          </View>
        </View>
        {/* First Row Ends Here */}
        {/* Second Row Starts Here */}
        <View style={s.secondRow}>
          <Icon style={s.icon} name="twitter" color="#fff" size={30} />
          <Icon style={s.icon} name="instagram" color="#fff" size={30} />
          <Icon style={s.icon} name="facebook-square" color="#fff" size={30} />
        </View>
      </View>
    </>
  );
}
