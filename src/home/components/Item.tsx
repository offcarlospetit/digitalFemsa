import {Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Box, Text, Utils} from '../../uikit';
import Icon from 'react-native-vector-icons/AntDesign';

type Props = {
  title: string;
  date: string;
  points: string;
  image?: string;
  isRedemption: boolean;
  onPress?: () => void;
};

const Item: React.FC<Props> = ({
  date,
  image,
  isRedemption,
  points,
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box marginBottom="sx" flexDirection="row" alignItems="center">
        <Box>
          <Image
            source={image ? {uri: image} : Utils.imagePreview}
            style={{
              width: 55,
              height: 55,
              resizeMode: 'cover',
              borderRadius: 10,
            }}
          />
        </Box>
        <Box flex={1} marginLeft="s">
          <Text variant="itemTitle">{title}</Text>
          <Text marginTop="sx" variant="itemDate">{date}</Text>
        </Box>
        <Box alignItems="center" flexDirection="row">
          <Text variant={isRedemption ? 'iconPlus' : 'iconMinus'}>
            <Icon name={isRedemption ? 'plus' : 'minus'} size={16} />
          </Text>
          <Text variant="pointAmount">{points}</Text>
        </Box>
        <Box marginLeft="s">
          <Text variant="pointAmount">
            <Icon name="right" size={20} />
          </Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default Item;
