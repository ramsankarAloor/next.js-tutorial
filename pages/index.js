// pages/index.js

import MeetupList from "../components/meetups/MeetupList";
import axios from "axios";

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
  try {
    const response = await axios.get("http://localhost:3000/api/meetups");
    return {
      props: {
        meetups: response.data.map((doc) => ({
          title: doc.title,
          image: doc.image,
          address: doc.address,
          id: doc._id.toString(),
        })),
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error(error);
    return {
      props: { meetups: [] },
    };
  }
}

export default HomePage;
