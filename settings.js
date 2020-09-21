import * as Facebook from "expo-facebook";
import { YellowBox } from "react-native";
import _ from "lodash";
const settingThingsUp = () => {
  YellowBox.ignoreWarnings(["Setting a timer"]);
  const _console = _.clone(console);
  console.warn = (message) => {
    if (message.indexOf("Setting a timer") <= -1) {
      _console.warn(message);
    }
  };
  Facebook.initializeAsync(
    ("320708535657468": string | undefined),
    ("eeasy app": string | undefined)
  );
};
export default settingThingsUp;
