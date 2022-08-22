import react from 'react';
import { Text, View, StyleSheet} from 'react-native';

export default function Cesta(props){
    return(
        <View>
            <Text> Nova: </Text>
            <Text>{props.texto}</Text>
        </View>

    )

}




