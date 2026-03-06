import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { View, Button, Image } from "react-native";

export default function AdminAddProduct() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImage(uri);
      uploadImage(uri);
    }
  };

  const uploadImage = async (uri) => {
    const data = new FormData();

    data.append("file", {
      uri: uri,
      type: "image/jpeg",
      name: "product.jpg",
    });

    data.append("upload_preset", "YOUR_UPLOAD_PRESET");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();

    console.log("Image URL:", file.secure_url);
  };

  return (
    <View>
      <Button title="Upload Image" onPress={pickImage} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  );
}