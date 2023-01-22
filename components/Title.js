import {Text,StyleSheet} from 'react-native'

function Title({children}){
 return        <Text style={styles.title}> {children} </Text>

}

export default Title;
const styles=StyleSheet.create({
    
    title:{
        fontSize:18,
        color:'#ddb52f',
        fontWeight:'bold',
        textAlign:'center',
        borderWidth:2,
        borderColor:'#ddb52f',
        padding:12
    }
})