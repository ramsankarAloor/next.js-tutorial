import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return <MeetupDetail meetupData={props.meetupData} />;
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { meetupId: "1" } }, // Example: pre-defined meetupId
      { params: { meetupId: "2" } }, // Example: pre-defined meetupId
      // Add more paths as needed
    ],
    fallback: false, // or 'blocking' if you want to enable incremental static generation
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://www.nps.gov/common/uploads/places/images/nri/20131126/siteadmin/D2F5EA00-C5B7-F538-0D33DD9DB13B2BBF/D2F5EA00-C5B7-F538-0D33DD9DB13B2BBF.jpg",
        title: "Capitol",
        address: "Washington DC, USA",
      },
    },
  };
}

export default MeetupDetails;
