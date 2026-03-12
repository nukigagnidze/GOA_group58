import React,{useState} from "react"
import {View,TextInput,Button} from "react-native"

export default function SignupScreen(){

const [username,setUsername] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const signup = async () => {

 await fetch("http://localhost:5000/auth/signup",{
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify({username,email,password})
 })
}

return(
<View>

<TextInput placeholder="username" onChangeText={setUsername}/>
<TextInput placeholder="email" onChangeText={setEmail}/>
<TextInput placeholder="password" onChangeText={setPassword}/>

<Button title="Signup" onPress={signup}/>

</View>
)
}