import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import axios from "axios";

function NewMeetup() {
   const router = useRouter()
  async function onAddMeetup(data) {
    try {
      const resp = await axios.post("/api/new-meetup", data);
      console.log(resp.data);
    } catch (error) {
      console.error(error.response.data);
    }

    router.push('/');
  }

  return <NewMeetupForm onAddMeetup={onAddMeetup} />;
}

export default NewMeetup;
