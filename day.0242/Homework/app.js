import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, Modal, TextInput, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const API_URL = 'http://localhost:3000/posts';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editId, setEditId] = useState(null);

  // Load posts
  const fetchPosts = async () => {
    try {
      const res = await axios.get(API_URL);
      setPosts(res.data);
    } catch (err) {
      Alert.alert('Error', 'Failed to fetch posts');
    }
  };

  useEffect(() => { fetchPosts(); }, []);

  // Add or update post
  const savePost = async () => {
    if (!title || !content) return Alert.alert('Error', 'All fields are required');

    try {
      if (editId) {
        const res = await axios.put(`${API_URL}/${editId}`, { title, content });
        setPosts(posts.map(p => p.id === editId ? res.data : p));
      } else {
        const res = await axios.post(API_URL, { title, content });
        setPosts([...posts, res.data]);
      }
      setTitle(''); setContent(''); setEditId(null); setModalVisible(false);
    } catch (err) {
      Alert.alert('Error', 'Failed to save post');
    }
  };

  // Delete post
  const deletePost = (id) => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this post?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: async () => {
          try {
            await axios.delete(`${API_URL}/${id}`);
            setPosts(posts.filter(p => p.id !== id));
          } catch (err) {
            Alert.alert('Error', 'Failed to delete post');
          }
        }}
      ]
    );
  };

  // Edit post
  const editPost = (post) => {
    setTitle(post.title);
    setContent(post.content);
    setEditId(post.id);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Button title="Add Post" onPress={() => setModalVisible(true)} />

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.postItem}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text>{item.content}</Text>
            <View style={styles.buttonContainer}>
              <Button title="Edit" onPress={() => editPost(item)} />
              <Button title="Delete" color="red" onPress={() => deletePost(item.id)} />
            </View>
          </View>
        )}
      />

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput placeholder="Title" style={styles.input} value={title} onChangeText={setTitle} />
            <TextInput placeholder="Content" style={[styles.input, {height:100}]} value={content} onChangeText={setContent} multiline />
            <Button title={editId ? "Update Post" : "Add Post"} onPress={savePost} />
            <Button title="Cancel" color="grey" onPress={() => { setModalVisible(false); setTitle(''); setContent(''); setEditId(null); }} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex:1, 
    padding:20, 
    marginTop:50 
},

  postItem: { 
    padding:10, 
    marginVertical:5, 
    borderWidth:1, 
    borderRadius:5, 
    borderColor:'#ccc' 
},

  postTitle: { 
    fontWeight:'bold', 
    marginBottom:5
},

  buttonContainer: { 
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:5
},

  modalContainer: { 
    flex:1, 
    justifyContent:'center', 
    alignItems:'center', 
    backgroundColor:'rgba(0,0,0,0.5)' 
},

  modalContent: { 
    width:'90%', 
    backgroundColor:'#fff', 
    padding:20, 
    borderRadius:10 
},

  input: { 
    borderWidth:1, 
    borderColor:'#ccc', 
    padding:10, 
    marginBottom:10, 
    borderRadius:5 
}
});
