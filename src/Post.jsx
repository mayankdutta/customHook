const Post = ({ post }) => {
  return (
    <>
      <tr>
        <td>Id</td>
        <td>Title</td>
        <td>Body</td>
      </tr>
      ;
      {post.map((value, i) => {
        return (
          <tr key={i}>
            <td key={20 * i + 1}>{JSON.stringify(value.id)}</td>
            <td key={20 * i + 2}>{JSON.stringify(value.title)}</td>
            <td key={20 * i + 3}>{JSON.stringify(value.body)}</td>
          </tr>
        );
      })}
    </>
  );
};

export default Post;
