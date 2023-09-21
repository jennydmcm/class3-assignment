import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, ButtonGroup, Icon, Card, Text, Image } from '@rneui/themed';


export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Button color="secondary">Secondary</Button>
            <Button color="warning">Warning</Button>
            <Button radius={"sm"} type="solid">
                Save
                <Icon name="save" color="white" />
            </Button>
            <Button title="Solid" type="solid" loading />

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
