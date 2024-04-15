import React, { useEffect, useState } from 'react';
import { View, Text, Button, Switch } from 'react-native';
import { Accelerometer } from 'expo-sensors';

export default function AcceleratorTest() {
    const [{x, y, z}, setData] = useState({x: 0, y: 0, z: 0});
    const [acceleratorEnabled, setAcceleratorEnabled] = useState(false)
    const [comment, setComment] = useState('Fase')

    useEffect(() => {
        let subscription
        if (acceleratorEnabled) {
            setComment('Teste iniciado')
            subscription = Accelerometer.addListener(data => {
                setData(data)
            })
        } else {
            subscription?.remove()
        }

        return () => {
            subscription?.remove()
        }
    }, [acceleratorEnabled]);

    function handleToggleAccelerator() {
        setAcceleratorEnabled(!acceleratorEnabled)
    }

    return (
        <View>
            <Text>Esta é a página de teste</Text>
            <Text>Tempo restante para iniciar: countdown segundos</Text>
            <Text>x: {x}</Text>
            <Text>y: {y}</Text>
            <Text>z: {z}</Text>
            <View>
                <Button title='Slow' onPress={() => Accelerometer.setUpdateInterval(2000)} />
                <Button title='Fast' onPress={() => Accelerometer.setUpdateInterval(50)} />
                <Switch
                    onValueChange={handleToggleAccelerator}
                    value={acceleratorEnabled}
                />
            </View>
            <Text>
                {comment}
            </Text>
        </View>
    );
}
