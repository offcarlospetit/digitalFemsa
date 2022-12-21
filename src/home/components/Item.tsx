import {Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Box, Text} from '../../uikit';

type Props = {
  title: string;
  date: string;
  points: number;
  image?: string;
  isAdded: boolean;
};

const Item: React.FC<Props> = ({date, image, isAdded, points, title}) => {
  return (
    <TouchableOpacity onPress={() => console.log('test')}>
      <Box marginBottom="sx" flexDirection="row" alignItems="center">
        <Box>
          <Image
            source={
              image
                ? {uri: image}
                : require('../../assets/images/previewImage.png')
            }
            style={{
              width: 55,
              height: 55,
              resizeMode: 'cover',
              borderRadius: 10,
            }}
          />
        </Box>
        <Box flex={4} marginLeft="s">
          <Text variant="itemTitle">{title}</Text>
          <Text variant="itemDate">{date}</Text>
        </Box>
        <Box
          marginLeft="m"
          justifyContent="center"
          alignItems="center"
          flexDirection="row">
          <Text marginRight="sx" variant={isAdded ? 'iconPlus' : 'iconMinus'}>
            {isAdded ? '+' : '-'}
          </Text>
          <Text variant="pointAmount">{points}</Text>
        </Box>
        <Box marginLeft="ms">
          <Text variant="pointAmount">{'>'}</Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default Item;
