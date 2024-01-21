import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 10,
  },
  firstRow: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  imageWrap: { width: 100, padding: 10 },
  image: { width: 100, height: 100, borderRadius: 100 },
  contentWrap: { padding: 10, flex: 1 },
  name: { fontWeight: "bold", fontSize: 25 },
  secondRow: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-evenly",
  },
  icon: { backgroundColor: "grey", padding: 10, borderRadius: 100 },
});
