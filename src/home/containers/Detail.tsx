import React from 'react';
import {Box, Button, Card, Text, Utils} from '../../uikit';
import {Image, ScrollView} from 'react-native';
import {HomeStackParamList} from '../navigation/HomeStack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import useHome from '../hooks/useHome';

export type DetailScreenNavigationProp = NativeStackScreenProps<
  HomeStackParamList,
  'Detail'
>;

const Detail: React.FC<DetailScreenNavigationProp> = ({route, navigation}) => {
  const {title, createdAt, points, image} = route.params;

  const {showDate, formatPoints} = useHome();

  const handleNavigateToHome = () => {
    navigation.navigate('Home');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Card
        justifyContent="flex-end"
        paddingHorizontal="m"
        paddingBottom="m"
        variant="detailHeaderVariant">
        <Text variant="detailHeaderTitle">{title}</Text>
      </Card>
      <Box paddingHorizontal="m" marginTop="m">
        <Card
          variant="imageCard"
          paddingHorizontal="extraHorizontal"
          backgroundColor="baseBackground"
          paddingVertical="extraVertical">
          <Image
            source={image ? {uri: image} : Utils.imagePreview}
            style={{width: 200, height: 200, resizeMode: 'cover'}}
          />
        </Card>
      </Box>
      <Box paddingHorizontal="m" marginTop="ll">
        <Text variant="detailResumeText">{'Detalles del producto:'}</Text>
      </Box>
      <Box paddingHorizontal="m" marginTop="m">
        <Text variant="detailTextDescription">
          {'Comprado el ' + showDate(createdAt)}
        </Text>
      </Box>
      <Box paddingHorizontal="m" marginTop="m">
        <Text variant="detailResumeText">{'Con esta compra acumulaste:'}</Text>
      </Box>
      <Box paddingHorizontal="m" marginTop="ll">
        <Text variant="detailResumeAmount">
          {formatPoints(points) + ' puntos'}
        </Text>
      </Box>
      <Box paddingHorizontal="m" marginTop="xll" marginBottom="xl">
        <Button
          onPress={handleNavigateToHome}
          variant="buttonPrimary"
          label="Aceptar"
        />
      </Box>
    </ScrollView>
  );
};

export default Detail;
