import React from 'react';
import {Box, Button, Card, Text} from '../../uikit';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

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
      <Box paddingLeft="m" marginTop="m">
        <Text variant="detailTitle">TUS MOVIMIENTOS</Text>
      </Box>
    </Box>
  );
};

export default Home;
{
  /* <Box padding="l">
        <Button
          variant="buttonPrimary"
          label="Go to Detail"
          onPress={() => {}}
        />
      </Box> */
}
