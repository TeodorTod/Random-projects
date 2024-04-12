import { View, Text } from "react-native";
import Svg, { Circle, Rect } from 'react-native-svg';

type RingProgressProps = {
    radius?: number,
    strokeWidth?: number,
};

const color = "#EE0F55"

const RingProgress = ({ radius = 100, strokeWidth = 15 }: RingProgressProps) => {
    const innnerRadius = radius - strokeWidth -20;
    return (
        <View style={{ width: radius * 2, height: radius * 2, alignSelf: "center",}}>
            <Svg>
                <Circle cx={radius} cy={innnerRadius +10} r={innnerRadius} strokeWidth={strokeWidth} stroke={color}/>
            </Svg>
        </View>

    );
}

export default RingProgress;