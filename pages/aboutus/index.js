import Link from "next/link";

export default function AboutUs() {
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];

  const list = details.map((element, index) => {
    return (
      <Link key={index} href={`/aboutus/${element.id}`}>
        <li>
          <h3>
            {element.name} - {element.role}
          </h3>
        </li>
      </Link>
    );
  });

  return <ul>{list}</ul>;
}
