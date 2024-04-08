import { useRouter } from "next/router";

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },
  { id: 2, name: "Vaibhav", role: "Backend Developer" },
  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

export default function DetailsPage() {
  const router = useRouter();
  const devId = Number(router.query.devId);
  console.log("dev id => ", devId);
  let obj
  for (let ele of details) {
    if (ele.id === devId) {
      obj = ele;
      break;
    }
  }

  return (
    <h2>
      {obj ? `${obj.name} - ${obj.role}` : "Developer does not exist."}
    </h2>
  );
}
