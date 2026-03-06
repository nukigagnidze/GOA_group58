import { AppState, Text } from "react-native";
import { useEffect, useState } from "react";

const AppStateComponent = () => {
  const [appState, setAppState] = useState(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", nextState => {
      setAppState(nextState);
    });

    return () => subscription.remove();
  }, []);

  return <Text>App State: {appState}</Text>;
};