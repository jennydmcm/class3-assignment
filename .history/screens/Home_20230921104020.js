import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, View } from 'react-native';
import { Button, ButtonGroup, Icon, Input } from '@rneui/themed';
import stylesHome from './Home.styles';



export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Pressable style={stylesHome.buttonArea}>
                <Button color="secondary">Next Page</Button>
                <Button color="warning">Warning</Button>
                <Button radius={"sm"} type="solid">
                    Save
                    <Icon name="save" color="white" />
                </Button>
                <Button title="Solid" type="solid" loading />
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
