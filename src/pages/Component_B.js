import React from 'react';
import { View, Text, Button } from 'react-native'; 
import { useSelector} from 'react-redux'

const Component_B = (props) => {
const ourCounter = useSelector(myGlobalState => myGlobalState.counter)
const myUserName = useSelector(cnm => cnm.userName)

return (

    <View style={{ backgroundColor: '#bdbdbd', flex: 1 }}>
        <Text>Component_B</Text>
        <Text style={{ fontSize: 30 }} >Counter: {ourCounter} </Text>
        <Text style={{ fontSize: 30 }} >Name: {myUserName} </Text>

    </View>
     );
};

export default Component_B;