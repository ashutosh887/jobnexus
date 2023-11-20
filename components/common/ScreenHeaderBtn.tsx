import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
  icon: string;
  dimension: string;
};

export default function ScreenHeaderBtn({ icon, dimension }: Props) {
  return (
    <View>
      <Text>ScreenHeaderBtn</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
