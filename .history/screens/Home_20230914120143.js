import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, LinearGradient } from '@rneui/themed';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Button
                ViewComponent={LinearGradient}
                linearGradientProps={{
                    colors: ["#FF9800", "#F44336"],
                    start: { x: 0, y: 0.5 },
                    end: { x: 1, y: 0.5 },
                }}
            >
                Linear Gradient
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
