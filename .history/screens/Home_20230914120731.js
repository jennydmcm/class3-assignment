import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, ButtonGroup, Icon, Card, Text, Image } from '@rneui/themed';


export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <ButtonGroup
                buttons={['Multiple', 'Select', 'Button', 'Group']}
                selectMultiple
                selectedIndexes={selectedIndexes}
                onPress={(value) => {
                    setSelectedIndexes(value);
                }}
                containerStyle={{ marginBottom: 20 }}
            />
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
