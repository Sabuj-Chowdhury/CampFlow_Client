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

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { TbFidgetSpinner } from "react-icons/tb";

const JoinCampModal = ({ open, onClose, campDetails, user }) => {
  const { campName, price, location, professionalName, _id } =
    campDetails || {};
  const [gender, setGender] = useState("male"); // Add state for gender
  const { register, handleSubmit, setValue } = useForm();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    // setLoading(true);
    const campId = _id;
    const {
      camp_name,
      camp_fees,
      emergency_contact,
      location,
      age,
      email,
      name,
      mobile,
    } = data;

    const price = parseFloat(camp_fees);

    const registrationData = {
      camp_name,
      campId,
      price,
      location,
      status: "pending",
      payment_status: "pending",
      participant: { name, email, age, mobile, emergency_contact, gender },
    };

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
            type="number"
            defaultValue={price}
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
            {...register("name")}
            label="Participant Name"
            value={user?.displayName}
            placeholder="Enter your name"
            readOnly
          />
          <Input
            {...register("email")}
            label="Participant Email"
            value={user?.email}
            placeholder="Enter your email"
            readOnly
          />
          <Input
            {...register("age")}
            label="Age"
            type="number"
            required
            placeholder="Enter your age"
          />
          <Input
            {...register("mobile")}
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
          <Button
            disabled={loading}
            type="submit"
            variant="gradient"
            color="green"
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2 text-center">
                <TbFidgetSpinner className="animate-spin"></TbFidgetSpinner>{" "}
                submitting ..
              </div>
            ) : (
              <span>Confirm</span>
            )}
          </Button>
        </DialogFooter>
      </form>
    </Dialog>
  );
};

export default JoinCampModal;
JoinCampModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  campDetails: PropTypes.object,
  user: PropTypes.object,
};
