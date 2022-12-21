import React, {useEffect} from 'react';
import {Box, Button, Card, Text} from '../../uikit';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Item from '../components/Item';
import {ScrollView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../navigation/HomeStack';
import {useGetProductsQuery} from '../hooks';
import useHome from '../hooks/useHome';

export type HomeScreenNavigationProp = NativeStackScreenProps<
  HomeStackParamList,
  'Home'
>;

const Home: React.FC<HomeScreenNavigationProp> = ({navigation}) => {
  const {top} = useSafeAreaInsets();
  const {
    data,
    getAllPoints,
    handleShowAll,
    handleShowRedeemed,
    handleShowWins,
    showAll,
    showWins,
    showDate,
    formatPoints,
    getMonthFromData,
  } = useHome();

  const handleNavigateToDetail = (index: number) => {
    if (!data) return;
    const {product, createdAt, points, image} = data[index];
    navigation.navigate('Detail', {
      title: product,
      createdAt: createdAt,
      points: points,
      image: image,
    });
  };

  return (
    <Box flex={1} backgroundColor="baseBackground">
      <Box paddingLeft="m" paddingTop="s" style={{marginTop: top + 13}}>
        <Box>
          <Text variant="welcomeTitle">Bienvenido de vuelta!</Text>
          <Text variant="welcomeSubtitle">Ruben Rodriguez</Text>
        </Box>
      </Box>
      <Box paddingLeft="m" marginBottom="m" marginTop="m">
        <Text variant="myPointsTitle">TUS PUNTOS</Text>
      </Box>
      <Box paddingHorizontal="xl" justifyContent="center" alignItems="center">
        <Card paddingBottom="l" paddingTop="m" variant="elevated">
          <Text marginLeft="m" variant="monthMainAmount">
            {getMonthFromData()}
          </Text>
          <Text marginTop="s" textAlign="center" variant="mainAmount">
            {getAllPoints()}
          </Text>
        </Card>
      </Box>
      <Box paddingLeft="m" marginBottom="m" marginTop="m">
        <Text variant="detailTitle">TUS MOVIMIENTOS</Text>
      </Box>
      <Box
        marginBottom="m"
        paddingHorizontal="m"
        justifyContent="center"
        alignItems="center">
        <Card paddingBottom="l" paddingTop="m" variant="bigPlainCard">
          <ScrollView showsVerticalScrollIndicator={false}>
            {data?.map((item, index) => (
              <Item
                title={item.product}
                date={showDate(item.createdAt)}
                points={formatPoints(item.points)}
                isRedemption={item.is_redemption}
                image={item.image}
                key={index}
                onPress={() => handleNavigateToDetail(index)}
              />
            ))}
          </ScrollView>
        </Card>
      </Box>
      <Box paddingBottom="l" paddingHorizontal="l">
        {showAll ? (
          <Button
            variant="buttonPrimary"
            label="Todos"
            onPress={handleShowAll}
          />
        ) : (
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between">
            <Button
              variant="buttonSecondary"
              label="Ganados"
              onPress={handleShowWins}
            />
            <Button
              variant="buttonSecondary"
              label="Canjeados"
              onPress={handleShowRedeemed}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Home;
