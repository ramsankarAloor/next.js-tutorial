import MeetupList from "../components/meetups/MeetupList";

const dummy_list = [
  {
    id: 1,
    image:
      "https://www.nps.gov/common/uploads/places/images/nri/20131126/siteadmin/D2F5EA00-C5B7-F538-0D33DD9DB13B2BBF/D2F5EA00-C5B7-F538-0D33DD9DB13B2BBF.jpg",
    title: "Capitol",
    address: "Washington DC, USA",
  },
  {
    id: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1200px-Colosseo_2020.jpg",
    title: "Colosseum",
    address: "Rome",
  },
];

const HomePage = () => {
  return (
    <>
      <MeetupList meetups={dummy_list} />
    </>
  );
};

export default HomePage;
