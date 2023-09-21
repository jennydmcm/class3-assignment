import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Icon, Card, Text, Image } from '@rneui/themed';


export default function Home({ navigation }) {
    return (
        <View style={styles.container}>

            <Card.Title>CARD WITH DIVIDER</Card.Title>
            <Card.Divider />
            <View style={{ position: "relative", alignItems: "center" }}>
                <Image
                    style={{ width: "100%", height: 100 }}
                    resizeMode="contain"
                    source={{ uri: "https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4" }}
                />
                <Text >Pranshu Chittora</Text>
            </View>
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
