import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Button, ButtonGroup, Icon, Input } from '@rneui/themed';
import stylesHome from './Home.styles';



export default function Home({ navigation }) {
    return (
        <View style={styles.container}>

            <Pressable style={stylesHome.buttonArea}>
                <Button style={styles.click} title="Go Back" onPress={() => navigation.goBack()} />
                <Button radius={"sm"} type="solid">
                    Save
                    <Icon name="save" color="white" />
                </Button>
                <Input
                    placeholder="Comment"
                    leftIcon={{ type: 'font-awesome', name: 'comment' }}
                    onChangeText={value => this.setState({ comment: value })}
                />
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
