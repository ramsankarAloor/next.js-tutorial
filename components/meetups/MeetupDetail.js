import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

function MeetupDetail(props) {
  return (
    <Card>
      <div className={classes.image}>
        <img src={props.meetupData.image} alt={props.meetupData.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.meetupData.title}</h3>
        <address>{props.meetupData.address}</address>
      </div>
    </Card>
  );
}

export default MeetupDetail;
