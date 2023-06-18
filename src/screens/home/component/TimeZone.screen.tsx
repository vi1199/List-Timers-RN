import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../../utils/colors';
import moment from 'moment-timezone';
import {useEffect, useState} from 'react';

export function TimeZone() {
  const [dt, setDt] = useState(new Date().toLocaleString());
  const [zone, setZone] = useState(false);

  const currentZone = moment.tz('Asia/Kolkata').format('YYYY-MM-DD HH:mm:ss');
  const PstZone = moment
    .tz('America/Los_Angeles')
    .format('YYYY-MM-DD HH:mm:ss');

  useEffect(() => {
    let secTimer = setInterval(() => {
      setDt(!zone ? currentZone : PstZone);
    }, 1000);

    return () => clearInterval(secTimer);
  }, [currentZone, PstZone, zone]);

  return (
    <View>
      <View style={styles.container}>
        <Text style={{fontSize: 14}}>
          Internet Time : {!zone ? 'IST' : 'PST'}
        </Text>
        <Text style={{fontSize: 14, fontWeight: '800', textAlign: 'center'}}>
          {dt}
        </Text>
      </View>
      <TouchableOpacity style={styles.toggle} onPress={() => setZone(!zone)}>
        <Text style={{fontSize: 20, color: COLORS.white}}>
          {'IST' + '⇋' + 'PST'}
        </Text>
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
