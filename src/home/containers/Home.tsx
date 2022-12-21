import React from 'react';
import {Box, Button, Card, Text} from '../../uikit';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Item from '../components/Item';
import {ScrollView} from 'react-native';

type Props = {};

const Home: React.FC<Props> = ({}) => {
  const {top} = useSafeAreaInsets();
  console.log({top});
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
      <Box paddingHorizontal="xxl" justifyContent="center" alignItems="center">
        <Card paddingBottom="l" paddingTop="m" variant="elevated">
          <Text marginLeft="m" variant="monthMainAmount">
            Diciembre
          </Text>
          <Text marginTop="s" textAlign="center" variant="mainAmount">
            10,00.00 pts
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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
              <Item
                title={'Compra en Walmart'}
                date="26 de enero, 2019"
                points={100}
                isAdded={index % 2 ? true : false}
                key={index}
              />
            ))}
          </ScrollView>
        </Card>
      </Box>
      <Box paddingBottom="l" paddingHorizontal="l">
        <Button
          variant="buttonPrimary"
          label="Go to Detail"
          onPress={() => {}}
        />
      </Box>
    </Box>
  );
};

export default Home;
