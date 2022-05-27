const Comments = ({ comments }) => {
  return comments.map((value, i) => {
    return (
      <tr key={i}>
        <td key={5 * i + 1}>{value.id}</td>
        <td key={5 * i + 2}>{value.name}</td>
        <td key={5 * i + 3}>{value.email}</td>
        <td key={5 * i}>{value.body}</td>
      </tr>
    );
  });
};

export default Comments;
