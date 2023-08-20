import React, {useState} from 'react';
import {View, Text, Switch, TouchableOpacity} from 'react-native';

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [result, setResult] = useState('0');

  const getColor = (light, dark) => (darkTheme ? dark : light);

  const getBtnColor = type => {
    if (type == 'top') {
      return '#228b22';
    } else if (type == 'right') {
      return '#EB6363';
    }
    return getColor(colors.light, colors.dark); //jmd
  };

  const colors = {
    dark: '#22252D',
    dark1: '#292B36',
    dark2: '#272B33',
    light: '#FFF',
    light1: 'rgb(220, 220, 220)',
    light2: '#F7F7F7',
  };

  const calculate = title => {
    try {
      if (title == 'C') {
        setResult('0');
      } else if (title == 'X') {
        if (result.length == 1) {
          setResult('0');
        } else {
          setResult(result.substring(0, result.length - 1));
        }
      } else if (title == '=') {
        if (isNaN(result[result.length - 1])) {
          const ans = Number(
            eval(result.substring(0, result.length - 1)),
          ).toString();
          setResult(ans);
        } else {
          const ans = Number(eval(result).toFixed(3)).toString();
          setResult(ans);
        }
      } else {
        if (result == '0') {
          if (isNaN(title)) {
            setResult(result + title);
          } else {
            setResult(title);
          }
        } else if (isNaN(result[result.length - 1])) {
          if (isNaN(title)) {
            if (
              result[result.length - 1] == '*' ||
              result[result.length - 1] == '/'
            ) {
              if (title == '+' || title == '-') {
                setResult(result + title);
              } else {
                const str = result.substring(0, result.length - 1);
                setResult(str + title);
              }
            } else if (result[result.length - 1] == '%') {
              if (title == '+') {
                setResult(result + title);
              } else {
                const str = result.substring(0, result.length - 1);
                setResult(str + title);
              }
            } else if (
              (result[result.length - 1] == '+' ||
                result[result.length - 1] == '-') &&
              (result[result.length - 2] == '/' ||
                result[result.length - 2] == '*' ||
                result[result.length - 2] == '%')
            ) {
              const str = result.substring(0, result.length - 2);
              setResult(str + title);
            } else {
              const str = result.substring(0, result.length - 1);
              setResult(str + title);
            }
          } else {
            setResult(result + title);
          }
        } else {
          setResult(result + title);
        }
      }
    } catch (error) {
      console.log(error);
      setResult(0);
    }
  };

  const Btn = ({title, type}) => (
    <TouchableOpacity
      onPress={() => calculate(title)}
      style={{
        padding: 10,
        borderRadius: 10,
        elevation: 2,
        backgroundColor: getColor(colors.dark2, colors.light1),
        height: 65,
        width: 65,
        margin: 12,
      }}>
      <Text
        style={{
          fontSize: 40,
          color: 'black',
          textAlign: 'center',
          textAlignVertical: 'center',
          color: getBtnColor(type),
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        paddingVertical: 15,
        backgroundColor: getColor(colors.light, colors.dark),
      }}>
      <Switch
        value={darkTheme}
        onValueChange={() => setDarkTheme(!darkTheme)}
        thumbColor={getColor(colors.dark, colors.light)}
        trackColor={{true: colors.light2, false: colors.dark2}}
      />
      <Text
        style={{
          fontSize: 40,
          color: getColor(colors.dark, colors.light),
          width: '100%',
          textAlign: 'right',
          paddingRight: 20,
          marginTop: 160,
          paddingBottom: 20,
        }}>
        {result}
      </Text>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          backgroundColor: getColor(colors.light1, colors.dark1),
          elevation: 7,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <Btn title="C" type="top" />
        <Btn title="X" type="top" />
        <Btn title="/" type="top" />
        <Btn title="%" type="top" />
        <Btn title="7" type="number" />
        <Btn title="8" type="number" />
        <Btn title="9" type="number" />
        <Btn title="*" type="right" />
        <Btn title="4" type="number" />
        <Btn title="5" type="number" />
        <Btn title="6" type="number" />
        <Btn title="-" type="right" />
        <Btn title="1" type="number" />
        <Btn title="2" type="number" />
        <Btn title="3" type="number" />
        <Btn title="+" type="right" />
        <Btn title="00" type="number" />
        <Btn title="0" type="number" />
        <Btn title="." type="number" />
        <Btn title="=" type="right" />
      </View>
    </View>
  );
}
