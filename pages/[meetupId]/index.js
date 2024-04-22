import { addRequestMeta } from "next/dist/server/request-meta";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

function MeetupDetails(props) {
  return <MeetupDetail meetupData={props.meetupData} />;
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    `mongodb+srv://ramsankaraloor:${process.env.MONGODB_PASSWORD}@cluster0.xggjwq1.mongodb.net/meetups`
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();

  const paths = meetups.map((meetup) => ({
    params: { meetupId: meetup._id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log("Received meetupId:", meetupId);

  let client;
  try {
    client = await MongoClient.connect(
      `mongodb+srv://ramsankaraloor:${process.env.MONGODB_PASSWORD}@cluster0.xggjwq1.mongodb.net/meetups`
    );

    const db = client.db();
    const meetupsCollection = db.collection("meetups");

    console.log("Attempting to find meetup with ID:", meetupId);
    const singleMeetup = await meetupsCollection.findOne({
      _id: new ObjectId(meetupId),
    });

    console.log("Found meetup:", singleMeetup);

    if (!singleMeetup) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        meetupData: {
          id: singleMeetup._id.toString(),
          title: singleMeetup.title,
          image: singleMeetup.image,
          description: singleMeetup.description,
          address: singleMeetup.address,
        },
      },
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  } finally {
    if (client) {
      client.close();
    }
  }
}

export default MeetupDetails;
