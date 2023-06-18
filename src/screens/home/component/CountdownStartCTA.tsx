import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../../../utils/colors';
import {useAppDispatch} from '../../../redux/store.hooks';
import {setTimerAction} from '../../../reducers/app.slice';
import moment from 'moment';

export function CountdownStartCTA() {
  const dispatch = useAppDispatch();
  const startTimer = () => {
    dispatch(setTimerAction(moment().format('LTS')));
  };

  return (
    <TouchableOpacity style={styles.container} onPress={startTimer}>
      <Text children="Start" style={styles.textColor} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    marginHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 8,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20,
    margin: 20,
  },
  textColor: {
    color: COLORS.white,
  },
});
