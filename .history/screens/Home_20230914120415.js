import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Icon, Card, Text } from '@rneui/themed';


export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Card>
                <Text>Word of the Day</Text>
                <Text h4>be-nev-o=lent</Text>
                <Text>adjective</Text>
                <Text>
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Text>
                <Button size="sm" type="clear">
                    Learn More
                </Button>
            </Card>
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
