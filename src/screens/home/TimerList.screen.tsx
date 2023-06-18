import {useEffect, useState} from 'react';
import {Home} from './component/TimerInput.screen';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useCountdown} from '../../hooks/useCountdown';
import {useAppDispatch, useAppSelector} from '../../redux/store.hooks';
import {COLORS} from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';
import {
  removeTimerAction,
  setTimerAction,
  timerObj,
} from '../../reducers/app.slice';

const TimerItem = ({item}: any) => {
  const dispatch = useAppDispatch();

  const removeTimer = () => {
    dispatch(removeTimerAction(item));
  };
  const [hours, minutes, seconds] = useCountdown(parseInt(item.addedTime));
  return (
    <View style={styles.timerItem}>
      <Text style={{fontSize: 12}}>
        {hours + ':' + minutes + ':' + seconds}
      </Text>
      <TouchableOpacity onPress={removeTimer} style={styles.removeTimer}>
        <Text style={{color: COLORS.white}}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export const TimerList = () => {
  const timer = useAppSelector(timer => timer.appSlice.timer);
  const navigation = useNavigation();

  const showAddCta = () => {
    return (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.addTimer}>
        <Text children={'+'} style={{color: COLORS.primary, fontSize: 18}} />
      </TouchableOpacity>
    );
  };

  const renderItem = ({item}: any) => {
    return <TimerItem item={item} />;
  };
  return (
    <FlatList
      data={timer}
      extraData={timer}
      renderItem={renderItem}
      ListFooterComponent={showAddCta}
      ListFooterComponentStyle={{alignItems: 'center', padding: 10}}
    />
  );
};
const styles = StyleSheet.create({
  addTimer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    elevation: 4,
    backgroundColor: COLORS.greyShade1,
  },
  timerItem: {
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: COLORS.greyShade2,
    marginVertical: 1.2,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  removeTimer: {
    backgroundColor: 'red',
    paddingHorizontal: 4,
    paddingVertical: 4,
    borderRadius: 4,
  },
});
