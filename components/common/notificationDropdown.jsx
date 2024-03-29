import { EmailNotification } from "../../icons";

const NotificationDropdown = () => {
  return (
    <div className="p-4 pb-0 text-dark bg-white rounded-lg w-96">
      <div className="flex justify-between opacity-60 mb-3">
        <p>Notification</p>
        <p>4</p>
      </div>
      <div className="flex border-t border-t-[#1D1D1D33] py-7">
        <div className="pr-7 py-7 pl-3 border-r border-r-dark20 flex items-center">
          <EmailNotification />
        </div>
        <div className="ml-5">
          <p className="font-semibold">New Invite</p>
          <p className="opacity-60 my-2">David Roy invite you</p>
          <p className="text-[#C53A23]">1 hour ago</p>
        </div>
      </div>

      <div className="flex border-t border-t-[#1D1D1D33] py-7">
        <div className="pr-7 py-7 pl-3 border-r border-r-dark20 flex items-center">
          <EmailNotification />
        </div>
        <div className="ml-5">
          <p className="font-semibold">New Invite</p>
          <p className="opacity-60 my-2">David Roy invite you</p>
          <p className="text-[#C53A23]">1 hour ago</p>
        </div>
      </div>
    </div>
  );
};

export default NotificationDropdown;
