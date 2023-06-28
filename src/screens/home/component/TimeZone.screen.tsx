import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../../utils/colors';
import moment from 'moment-timezone';
import {useEffect, useState} from 'react';

export function TimeZone() {
  const [dt, setDt] = useState('');
  const [zone, setZone] = useState('Asia/Kolkata');

  useEffect(() => {
    const id = setInterval(startTime, 1000);
    return () => clearInterval(id);
  }, [zone]);

  function startTime() {
    const inTime = moment.tz(zone).format('YYYY-MM-DD hh:mm:ss a');
    setDt(inTime);
  }
  return (
    <View>
      <View style={styles.container}>
        <Text style={{fontSize: 14}}>Internet Time : {zone}</Text>
        <Text style={{fontSize: 14, fontWeight: '800', textAlign: 'center'}}>
          {dt}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.toggle}
        onPress={() => setZone('Asia/Kolkata')}>
        <Text style={{fontSize: 20, color: COLORS.white}}>{'IST'}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.toggle}
        onPress={() => setZone('America/Los_Angeles')}>
        <Text style={{fontSize: 20, color: COLORS.white}}>{'PST'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.greyShade2,
    paddingVertical: 20,
    alignItems: 'center',
    elevation: 4,
  },
  toggle: {
    backgroundColor: COLORS.primary,
    alignSelf: 'center',
    margin: 20,
    borderRadius: 6,
    elevation: 4,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});
