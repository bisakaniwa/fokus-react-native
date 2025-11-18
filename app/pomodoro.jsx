import { useRef, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { ActionButton } from '../components/ActionButton';
import { FokusButton } from '../components/FokusButton';
import { Footer } from '../components/Footer';
import { Timer } from '../components/Timer';
import { PauseIcon, PlayIcon } from '../icons';

const pomodoro = [
  {
    id: 'focus',
    display: "Foco",
    initialValue: 25 * 60,
    image: require('../assets/images/pomodoro.png'),
  },
  {
    id: 'short',
    display: 'Pausa curta',
    initialValue: 5 * 60,
    image: require('../assets/images/short.png'),
  },
  {
    id: 'long',
    display: 'Pausa longa',
    initialValue: 15 * 60,
    image: require('../assets/images/long.png'),
  },
];

export default function Pomodoro() {
  const timerRef = useRef(null);
  const [timerType, setTimerType] = useState(pomodoro[0]);
  const [seconds, setSeconds] = useState(pomodoro[0].initialValue);
  const [timerRunning, setTimerRunning] = useState(false);

  const clear = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setTimerRunning(false);
    }
  };

  const toggleTimerType = (newTimerType) => {
    setTimerType(newTimerType);
    setSeconds(newTimerType.initialValue);
    clear();
  };

  const toggleTimer = () => {
    if (timerRef.current) {
      clear();
    } else {
      setTimerRunning(true);

      const id = setInterval(() => {
        setSeconds((oldState) => {
          if (oldState === 0) {
            clear();
            return timerType.initialValue;
          }
          return oldState - 1;
        })
      }, 1000);

      timerRef.current = id;
    };
  };

  return (
    <View
      style={styles.container}
    >
      <Image source={timerType.image} style={{ height: 312 }} />

      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map((timer) =>
            <ActionButton
              key={timer.id}
              active={timer.id === timerType.id}
              display={timer.display}
              onPress={() => toggleTimerType(timer)}
            />
          )}
        </View>

        <Timer totalSeconds={seconds} />

        <FokusButton
          onPress={toggleTimer}
          title={timerRunning ? 'Pausar' : 'Começar'}
          icon={timerRunning ? <PauseIcon /> : <PlayIcon />}
        />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40,
  },
  actions: {
    padding: 24,
    backgroundColor: '#14448080',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    gap: 32,
  },
  context: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
