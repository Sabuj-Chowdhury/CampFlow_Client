import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";

const JoinCampModal = ({ open, onClose, campDetails, user }) => {
  const { campName, price, location, professionalName } = campDetails || {};

  return (
    <Dialog
      open={open}
      handler={onClose}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
      size="lg"
    >
      <DialogHeader className="text-teal-700 font-bold">
        Join Camp: {campName}
      </DialogHeader>

      <DialogBody className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input label="Camp Name" value={campName} readOnly />
        <Input label="Camp Fees" value={`$${price}`} readOnly />
        <Input label="Location" value={location} readOnly />
        <Input
          label="Healthcare Professional"
          value={professionalName}
          readOnly
        />
        <Input
          label="Participant Name"
          value={user?.displayName}
          placeholder="Enter your name"
        />
        <Input
          label="Participant Email"
          type="email"
          value={user?.email}
          placeholder="Enter your email"
          readOnly
        />
        <Input label="Age" type="number" placeholder="Enter your age" />
        <Input
          label="Phone Number"
          type="tel"
          placeholder="Enter your phone number"
        />
        <Select label="Gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
        <Input
          label="Emergency Contact"
          type="tel"
          placeholder="Enter emergency contact"
        />
      </DialogBody>

      <DialogFooter>
        <Button variant="text" color="red" onClick={onClose} className="mr-2">
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="green">
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default JoinCampModal;
