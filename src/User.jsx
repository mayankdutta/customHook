
const User = ({ user }) => {
  return user.map((value, i) => {
    return (
      <tr>
        <td key={5 * i + 1}>{value.id}</td>
        <td key={5 * i + 2}>{value.title}</td>
        <td key={5 * i + 3}>{value.body}</td>
      </tr>
    );
  });
};

export default User;
