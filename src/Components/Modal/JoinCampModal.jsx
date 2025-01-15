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
import { useState } from "react";
import { useForm } from "react-hook-form";

import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingSpinner from "../shared/LoadingSpinner/LoadingSpinner";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const JoinCampModal = ({ open, onClose, campDetails, user }) => {
  const { campName, price, location, professionalName, _id } =
    campDetails || {};
  const [gender, setGender] = useState("male"); // Add state for gender
  const { register, handleSubmit, setValue } = useForm();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    const registrationId = _id;

    const registrationData = { registrationId, ...data };

    try {
      const { data } = await axiosSecure.post(
        "/camp/registration",
        registrationData
      );
      if (data.insertedId) {
        toast.success("Registration Successful!");
        navigate("/dashboard/registered-camps");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }

    // console.log(registrationData);
  };

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogHeader className="text-teal-700 font-bold">
          Join Camp: {campName}
        </DialogHeader>

        <DialogBody className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            {...register("camp_name")}
            label="Camp Name"
            value={campName}
            readOnly
          />
          <Input
            {...register("camp_fees")}
            label="Camp Fees"
            value={`$${price}`}
            readOnly
          />
          <Input
            {...register("location")}
            label="Location"
            value={location}
            readOnly
          />
          <Input
            {...register("professional_name")}
            label="Healthcare Professional"
            value={professionalName}
            readOnly
          />
          <Input
            {...register("participant_name")}
            label="Participant Name"
            value={user?.displayName}
            placeholder="Enter your name"
            readOnly
          />
          <Input
            {...register("participant_email")}
            label="Participant Email"
            value={user?.email}
            placeholder="Enter your email"
            readOnly
          />
          <Input
            {...register("participant_age")}
            label="Age"
            type="number"
            required
            placeholder="Enter your age"
          />
          <Input
            {...register("participant_mobile")}
            label="Phone Number"
            type="tel"
            placeholder="Enter your phone number"
            required
          />
          <Select
            value={gender}
            onChange={(e) => {
              setGender(e); // Update local state
              setValue("gender", e); // Set value for react-hook-form
            }}
            label="Gender"
          >
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
          <Input
            {...register("emergency_contact")}
            label="Emergency Contact"
            type="tel"
            placeholder="Enter emergency contact"
            required
          />
        </DialogBody>

        <DialogFooter>
          <Button variant="text" color="red" onClick={onClose} className="mr-2">
            <span>Cancel</span>
          </Button>
          <Button type="submit" variant="gradient" color="green">
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </form>
    </Dialog>
  );
};

export default JoinCampModal;
