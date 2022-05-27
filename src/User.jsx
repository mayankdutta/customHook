const User = ({ user }) => {
  return (
    <>
      <tr>
        <td>ID</td>
        <td>Name</td>
        <td>User name</td>
        <td>Email</td>
        <td>Phone</td>
        <td>Website</td>
        <td>Address</td>
        <td>Company</td>
      </tr>
      {user.map((value, i) => {
        return (
          <tr key={i}>
            {/* <td>{JSON.stringify(value)}</td> */}
            <td key={55 * i + 1}>{JSON.stringify(value.id)}</td>
            <td key={55 * i + 2}>{JSON.stringify(value.name)}</td>
            <td key={55 * i + 3}>{JSON.stringify(value.username)}</td>
            <td key={55 * i + 4}>{JSON.stringify(value.email)}</td>
            <td key={55 * i + 5}>{JSON.stringify(value.phone)}</td>
            <td key={55 * i + 6}>{JSON.stringify(value.website)}</td>
            <td key={55 * i + 7}>{JSON.stringify(value.address)}</td>
            <td key={55 * i + 8}>{JSON.stringify(value.company)}</td>
          </tr>
        );
      })}
    </>
  );
};

export default User;
