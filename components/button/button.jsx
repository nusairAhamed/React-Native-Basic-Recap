import { View, Text, TouchableOpacity } from "react-native";
import { s } from "./button.style";
import { useState } from "react";

export function Button() {
  let [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count++);
  }

  return (
    <>
      <View>
        <TouchableOpacity style={s.buttons} onPress={increaseCount}>
          <Text style={s.btnText}>Click me</Text>
        </TouchableOpacity>

        <Text style={s.display}>
          You have clicked the button ({count}) of times
        </Text>
      </View>
    </>
  );
}
