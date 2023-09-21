import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Icon } from '@rneui/themed';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Button radius={"sm"} type="solid">
                Save
                <Icon name="save" color="white" />
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
