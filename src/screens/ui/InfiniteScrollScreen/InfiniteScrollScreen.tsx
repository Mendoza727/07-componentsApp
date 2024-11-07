import { FlatList, Image, Text, View } from "react-native";
import React, { useState } from "react";
import { CustomView } from "../../../components/ui/CustomView";
import { TitleComponent } from "../../../components/ui/titleComponent";
import { colors } from "../../../config/Global.styles";
import { ActivityIndicator } from "react-native-paper";
import { FadeInImagesComponent } from "../../../components/ui/FadeInImagesComponent";

export const InfiniteScrollScreen = () => {
  const [numbers, setNumber] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = async () => {
    // TODO: añadir numero a nuestro arreglo
    const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i);

    setTimeout(() => {
      setNumber([...numbers, ...newArray]);
    }, 3000);
  };

  return (
    <View style={{
      backgroundColor: 'black'
    }}>
      <FlatList
        data={numbers}
        onEndReached={loadMore}
        onEndReachedThreshold={0.7}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => <ListItem number={item} />}
        ListFooterComponent={() => (
          <View style={{
            height: 150,
            justifyContent: "center",
          }}>
            <ActivityIndicator 
              size={40}
              color={colors.primary}
            />
          </View>
        )}
      />
    </View>
  );
};

interface listItemProps {
  number: number;
}

const ListItem = ({ number }: listItemProps) => {
  return (

    <FadeInImagesComponent
      uri={ `https://picsum.photos/id/${number}/500/400` }
      style={{
        height: 400,
        width: '100%'
      }}
    />
    // <Image
    //   source={{ uri: `https://picsum.photos/id/${number}/500/400` }}
    //   style={{
    //     height: 400,
    //     width: "100%",
    //   }}
    // />
  );
};
