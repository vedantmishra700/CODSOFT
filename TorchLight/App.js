import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Switch,
} from 'react-native';
import Torch from 'react-native-torch';

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [isTorchON, setisTorchON] = useState(false); //setting variable value
  const handlerTurnOnOffTorch = () => {
    Torch.switchState(!isTorchON);
    setisTorchON(!isTorchON);
  };
  const getColor = (light, dark) => (darkTheme ? dark : light);

  const colors = {
    dark: '#22252D',
    light: '#FFF',
    dark2: '#272B33',
    light2: '#F7F7F7',
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: getColor(colors.light, colors.dark),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 5,
        borderColor: '#8a2be2',
      }}>
      <View style={styles.toptext}>
        <Text style={styles.textstyle}>𝔽𝕝𝕒𝕤𝕙𝕃𝕚𝕘𝕙𝕥 𝔸𝕡𝕡</Text>
      </View>

      <Image
        source={require('./assets/f2.png')}
        style={styles.logo}
        fadeDuration={400}
      />

      <TouchableOpacity
        style={{
          justifyContent: 'center',
          backgroundColor: isTorchON ? '#d2691e' : '#bdb76b',
          position: 'absolute',
          bottom: 120,
          padding: 10,
          height: 110,
          width: 110,
          borderWidth: 5,
          borderColor: darkTheme ? '#FFF' : '#000',

          borderRadius: 40,
        }}
        onPress={handlerTurnOnOffTorch}>
        <Text
          style={{
            color: darkTheme ? '#000' : '#FFF',
            textAlign: 'center',
            fontSize: 35,
            fontFamily: 'monospace',
            fontWeight: 'bold',
          }}>
          {isTorchON ? ' 𝕆𝔽𝔽  ' : ' 𝕆ℕ '}
        </Text>
      </TouchableOpacity>

      <View style={styles.toggle}>
        <Switch
          value={darkTheme}
          onValueChange={() => setDarkTheme(!darkTheme)}
          thumbColor={getColor(colors.dark, colors.light)}
          trackColor={{true: colors.light2, false: colors.dark2}}
        />
      </View>
    </View>
  );
}
``;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textstyle: {
    fontFamily: 'sans-serif',
    fontSize: 40,
    color: '#FFF',
    fontWeight: 'bold',
  },
  toptext: {
    height: 55,
    width: '100%',
    backgroundColor: '#9932cc',
    position: 'absolute',
    top: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  logo: {
    height: 390,
    width: 190,
    position: 'absolute',
    bottom: 232,
  },
  toggle: {
    position: 'absolute',
    bottom: 40,
    right: 10,
  },
});
