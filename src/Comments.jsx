const Comments = ({ comments }) => {
  return (
    <>
      <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Email</td>
        <td>Body</td>
      </tr>
      {comments.map((value, i) => {
        return (
          <tr key={i}>
            <td key={5 * i + 1}>{JSON.stringify(value.id)}</td>
            <td key={5 * i + 2}>{JSON.stringify(value.name)}</td>
            <td key={5 * i + 3}>{JSON.stringify(value.email)}</td>
            <td key={5 * i}> {JSON.stringify(value.body)}</td>
          </tr>
        );
      })}
    </>
  );
};

export default Comments;
