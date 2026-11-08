import SetupGuide from 'components/SetupGuide/SetupGuide';
import { attendeeModule} from 'data/event';

const Attendees = () => {
    return  (
        <SetupGuide modules={[attendeeModule]} />
    );
}

export default Attendees;