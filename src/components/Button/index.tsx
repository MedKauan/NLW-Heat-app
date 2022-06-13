import React from "react";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import {
  TouchableOpacity,
  Text,
  ColorValue,
  TouchableOpacityProps,
  ActivityIndicator,
} from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
  color: ColorValue;
  backgroundColor: ColorValue;
  icon?: React.Component<typeof AntDesign>["name"];
  isLoading?: boolean;
};

export function Button({
  title,
  color,
  backgroundColor,
  icon,
  isLoading = false,
  ...rest
}: Props) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      {...rest}
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator color={color} />
      ) : (
        <>
          <AntDesign name={icon} size={24} style={styles.icon} />
          <Text style={[styles.title, { color }]}> {title} </Text>
        </>
      )}
    </TouchableOpacity>
  );
}
