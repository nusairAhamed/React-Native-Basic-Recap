import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  chatBubble: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 30,
    alignItems: "center",
    marginBottom: 10,
  },
  imageWrap: {
    flex: 1,
  },
  messageWrap: {
    flex: 4,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  fName: {
    fontWeight: "700",
    fontSize: 18,
  },
});
