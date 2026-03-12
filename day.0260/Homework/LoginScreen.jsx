import React, {useState} from "react"
import {View,TextInput,Button} from "react-native"

export default function LoginScreen({navigation}){

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const login = async () => {

 await fetch("http://localhost:5000/auth/login",{
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify({email,password})
 })

 navigation.navigate("Profile")
}

return(
<View>

<TextInput placeholder="email" onChangeText={setEmail}/>
<TextInput placeholder="password" onChangeText={setPassword}/>

<Button title="Login" onPress={login}/>

<Button title="Go Signup" onPress={()=>navigation.navigate("Signup")}/>

</View>
)
}