import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backGround}>
      <Feather name="search" size={30} style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        styles={styles.inputStyle}
        placeholder="Search hotel"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  backGround: {
    marginTop: 15,
    backgroundColor: "#F0EEED",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
