import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Button, ButtonGroup, Icon, Input } from '@rneui/themed';
import stylesHome from './Home.styles';



export default function Home({ navigation }) {
    return (
        <View style={styles.container}>

            <Pressable style={stylesHome.buttonArea}>
                <Button style={styles.click} title="Go Back" onPress={() => navigation.goBack()} />
                <Button style={styles.save} radius={"sm"} type="solid">
                    Save
                    <Icon name="save" color="white" />
                </Button>
            </Pressable>
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
