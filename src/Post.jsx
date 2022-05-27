const Post = ({ post }) => {
  return post.map((value, i) => {
    return (
      <tr key={i}>
        <td key={20 * i + 1}>{value.id}</td>
        <td key={20 * i + 2}>{value.title}</td>
        <td key={20 * i + 3}>{value.body}</td>
      </tr>
    );
  });
};

export default Post;
