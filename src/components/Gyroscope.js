import { Gyroscope } from "expo-sensors";
import { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Switch, View, Text } from "react-native";

export default function GyroscopeTest() {
    const [{x, y, z}, setGyroscopeData] = useState({x:0, y:0, z:0})
    const [gyroscopeEnabled, setGyroscopeEnabled] = useState(false)

    useEffect(() => {
        let subscription
        if (gyroscopeEnabled) {
            // subscription = Gyroscope.addListener(gyroscopeData => setGyroscopeData(gyroscopeData))
            subscription = Gyroscope.addListener(setGyroscopeData)
            Gyroscope.setUpdateInterval(500)
        } else {
            subscription?.remove()
        }

        return () => {
            subscription?.remove()
        }
    }, [gyroscopeEnabled])

    function handleToggleGyroscope() {
        setGyroscopeEnabled(!gyroscopeEnabled)
    }

    return (
        <SafeAreaView>
            <View>
                <Text>x: {x}</Text>
                <Text>y: {y}</Text>
                <Text>z: {z}</Text>
                {gyroscopeEnabled ? <Text>True</Text> : <Text>False</Text>}
                <Switch
                onValueChange={handleToggleGyroscope}
                value={gyroscopeEnabled}
                />
            </View>
            <View style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                backgroundColor: 'red',
                transform: [
                    {translateX: x * 10}, 
                    {translateY: y * 10}
                ]
            }}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    sphere: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'red',
    }
})