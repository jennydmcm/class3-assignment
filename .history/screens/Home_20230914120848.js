import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, ButtonGroup, Icon, Input } from '@rneui/themed';


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
            <Input
                placeholder="Comment"
                leftIcon={{ type: 'font-awesome', name: 'comment' }}
                onChangeText={value => this.setState({ comment: value })}
            />
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
