export default function AboutUs() {
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];

  const list = details.map((element, index) => {
    return (
      <tr key={index}>
        <td>{element.name}</td>
        <td>{element.role}</td>
      </tr>
    );
  });

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>{list}</tbody>
    </table>
  );
}
