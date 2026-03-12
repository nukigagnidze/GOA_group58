{posts.map((post) => (
  <View key={post.id}>
    <Text>{post.text}</Text>

    {post.image && (
      <Image
        source={{ uri: post.image }}
        style={{ width: 300, height: 300 }}
      />
    )}
  </View>
))}