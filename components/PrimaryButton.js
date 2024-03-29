import { View,Text ,Pressable,StyleSheet} from "react-native";

function PrimaryButton ({children,onPress}){
   
    return (
        <View style={styles.buttonOuterContainer}>
           <Pressable style={({pressed})=>pressed ? [styles.buttonInnnerContainer,styles.pressed]:styles.buttonInnnerContainer} onPress={onPress} android_ripple={{color:'#640233'}}>
               <Text style={styles.buttonText}>{children}</Text>
           </Pressable>
       </View>
    )
}
export default PrimaryButton;

const styles = StyleSheet.create({

    buttonOuterContainer:{
        margin:4,
        borderRadius:28,
        overflow:'hidden'
    },

    buttonInnnerContainer:{
        backgroundColor:'#72063c',
        paddingVertical:8,
        paddingHorizontal:16,
        elevation:2
    },

    buttonText:{
        color:'white',
        textAlign:'center'
    },

    pressed:{
        opacity:0.75
    }
})