import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';

const AlbumDetail = ({album}) => {
  const {title, artist, thumbnail_image: thumbnail, image, url} = album;
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle,
  } = styles;
  return (
    <Card>
      <CardItem>
        <View style={thumbnailContainerStyle}>
          <Image source={{uri: thumbnail}} style={thumbnailStyle} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardItem>
      <CardItem>
        <Image source={{uri: image}} style={imageStyle} />
      </CardItem>
      <CardItem>
        <Button onPress={() => Linking.openURL(url)}>Buy Now!!!</Button>
      </CardItem>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
};

export default AlbumDetail;
