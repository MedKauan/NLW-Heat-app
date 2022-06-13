import React from "react";
import { View, Text } from "react-native";
import { UserPhoto } from "../UserPhoto";
import { styles } from "./styles";
import { MotiView } from "moti";

export type MessageProps = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  };
};

type Props = {
  data: MessageProps;
};

export function Message({ data }: Props) {
  return (
    <MotiView
      from={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: "timing", duration: 700 }}
      style={styles.container}
    >
      <Text style={styles.message}> {data.text} </Text>

      <View style={styles.footer}>
        <UserPhoto imageUri={data.user.avatar_url} size="SMALL" />

        <Text style={styles.username}> {data.user.name} </Text>
      </View>
    </MotiView>
  );
}
