import { View, Text } from "react-native";
import Svg, { Circle, Rect } from "react-native-svg";

type RingProgressProps = {
  radius?: number;
  strokeWidth?: number;
};

const color = "#EE0F55";

const RingProgress = ({
  radius = 100,
  strokeWidth = 20,
}: RingProgressProps) => {
  const innnerRadius = radius - strokeWidth - 20;
  const circumference = 2 * Math.PI * innnerRadius;
  return (
    <View
      style={{ width: radius * 2, height: radius * 2, alignSelf: "center" }}
    >
      <Svg>
        <Circle
          cx={radius}
          cy={innnerRadius + 10}
          r={innnerRadius}
          strokeWidth={strokeWidth}
          stroke={color}
          opacity={0.3}
        />
        <Circle
          cx={radius}
          cy={innnerRadius + 10}
          r={innnerRadius}
          strokeWidth={strokeWidth}
          stroke={color}
          strokeDasharray={[circumference * 0.2, circumference]}
          strokeLinecap="round"
        />
      </Svg>
    </View>
  );
};

export default RingProgress;
