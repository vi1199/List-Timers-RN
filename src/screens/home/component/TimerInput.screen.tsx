import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {CountdownStartCTA} from './CountdownStartCTA';
import {COLORS} from '../../../utils/colors';
import {TimerInput} from './component/TimerInput';
import {GetTime} from './component/GetTime';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../../nav/screens';
import {useAppDispatch} from '../../../redux/store.hooks';
import {setTimerAction} from '../../../reducers/app.slice';
import {TimeZone} from './TimeZone.screen';

export const Home = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [hour, setHour] = useState('');
  const [min, setMin] = useState('');
  const [sec, setSec] = useState('');

  const minutesInMill = parseInt(min) * 60 * 1000;
  const secInMill = parseInt(sec) * 1000;
  const todayday = new Date().getTime();

  const calculatedTime = minutesInMill + secInMill || 0;

  const onPressButton = () => {
    dispatch(setTimerAction({addedTime: todayday + calculatedTime}));
    setSec('');
    setMin('');
    setHour('');
    navigation.navigate(routes.TimerList);
  };
  return (
    <View style={styles.container}>
      <TimeZone />
      <View style={styles.body}>
        <View style={styles.input}>
          <TextInput
            placeholder="0.0"
            style={styles.inputStyle}
            value={hour}
            inputMode="numeric"
            maxLength={2}
            onChangeText={text => setHour(text)}
            keyboardType="numeric"
          />
          <Text> : </Text>
          <TextInput
            placeholder="0.0"
            style={styles.inputStyle}
            inputMode="numeric"
            value={min}
            maxLength={2}
            onChangeText={text => setMin(text)}
            keyboardType="numeric"
          />
          <Text> : </Text>
          <TextInput
            placeholder="0.0"
            style={styles.inputStyle}
            inputMode="numeric"
            value={sec}
            maxLength={2}
            onChangeText={text => setSec(text)}
            keyboardType="numeric"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity style={styles.button} onPress={onPressButton}>
            <Text children={'Start'} style={styles.textColor} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.greyShade1,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: COLORS.greyShade2,
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle: {
    borderColor: COLORS.primary,
  },
  button: {
    backgroundColor: COLORS.primary,

    paddingVertical: 16,
    borderRadius: 8,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  textColor: {
    color: COLORS.white,
  },
});
