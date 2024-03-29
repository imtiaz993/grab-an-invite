import { Field } from "formik";

const PopupContent = ({ popupStep }) => {
  return (
    <div>
      {popupStep === 1 ? (
        <Step1 />
      ) : popupStep === 2 ? (
        <Step2 />
      ) : (
        popupStep === 3 && <Step3 />
      )}
    </div>
  );
};

const Step1 = () => (
  <div>
    <div className="font-bold text-[22px] mt-7">
      Are you looking for events in a specific location or city?
    </div>
    <div className="flex mt-5">
      <Field
        type="radio"
        name="locationPreference"
        id="check_specific_events"
        value="specific"
        className="accent-secondary w-5 h-5 mr-2 cursor-pointer"
      />
      <label htmlFor="check_specific_events" className=" cursor-pointer">
        Yes, I&apos;m looking for events in a specific location
      </label>
    </div>
    <div className="flex mt-5">
      <Field
        type="radio"
        name="locationPreference"
        id="check_various_events"
        value="various"
        className="accent-secondary w-5 h-5 mr-2 cursor-pointer"
      />
      <label htmlFor="check_various_events" className=" cursor-pointer">
        No, I&apos;m open to events in various locations
      </label>
    </div>
  </div>
);

const Step2 = () => (
  <div>
    <div className="font-bold text-[22px] mt-7">
      Do you prefer virtual or in-person events?
    </div>
    <div className="flex mt-5">
      <Field
        type="radio"
        name="eventPreference"
        id="virtual_events"
        value="virtual"
        className="accent-secondary w-5 h-5 mr-2 cursor-pointer"
      />
      <label htmlFor="virtual_events" className=" cursor-pointer">
        Virtual events only
      </label>
    </div>
    <div className="flex mt-5">
      <Field
        type="radio"
        name="eventPreference"
        id="in_person_events"
        value="in_person"
        className="accent-secondary w-5 h-5 mr-2 cursor-pointer"
      />
      <label htmlFor="in_person_events" className=" cursor-pointer">
        In-person events only
      </label>
    </div>
    <div className="flex mt-5">
      <Field
        type="radio"
        name="eventPreference"
        id="no_preference"
        value="no_preference"
        className="accent-secondary w-5 h-5 mr-2 cursor-pointer"
      />
      <label htmlFor="no_preference" className=" cursor-pointer">
        No preference
      </label>
    </div>
  </div>
);

const Step3 = () => (
  <div>
    <div className="font-bold text-[22px] mt-7">
      Would you like to receive updates on upcoming events and special
      promotions via email?
    </div>
    <div className="flex mt-5">
      <Field
        type="radio"
        name="emailUpdates"
        id="yes_email_updates"
        value="yes"
        className="accent-secondary w-5 h-5 mr-2 cursor-pointer"
      />
      <label htmlFor="yes_email_updates" className=" cursor-pointer">
        Yes
      </label>
    </div>
    <div className="flex mt-5">
      <Field
        type="radio"
        name="emailUpdates"
        id="no_email_updates"
        value="no"
        className="accent-secondary w-5 h-5 mr-2 cursor-pointer"
      />
      <label htmlFor="no_email_updates" className=" cursor-pointer">
        No
      </label>
    </div>
  </div>
);

export default PopupContent;
