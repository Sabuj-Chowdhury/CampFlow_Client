import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { useState } from "react";
import { imageUpload } from "../../utils/ImageBB/imagebbAPI";
import LoadingSpinner from "../shared/LoadingSpinner/LoadingSpinner";

const UpdateProfileModal = ({ open, onClose, profile }) => {
  const { name, image } = profile || {};
  const [imagePreview, setImagePreview] = useState(image || null);
  const [imageUrl, setImageUrl] = useState(image);
  const [loading, setLoading] = useState(false);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      // Generate preview
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);

      // Upload image
      try {
        const imageUrl = await imageUpload(file);
        setImageUrl(imageUrl); // Save URL in state
      } catch (error) {
        console.error("Image upload failed:", error);
      }
    }
  };

  const handleUpdate = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;

    const updateData = {
      name,
      image: imageUrl, // Use the uploaded URL from state
    };

    console.log("Updated Data:", updateData);
    try {
      // api call
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <Dialog open={open} handler={onClose} className="max-w-lg mx-auto">
      <DialogHeader className="text-xl font-bold text-teal-600">
        Update Profile
      </DialogHeader>

      <form onSubmit={handleUpdate}>
        <DialogBody className="space-y-6 bg-gray-50">
          {/* Profile Image Preview */}
          <div className="flex flex-col items-center space-y-4">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Profile Preview"
                className="w-24 h-24 rounded-full object-cover shadow-md border border-gray-200"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                No Image
              </div>
            )}

            <input
              type="file"
              accept="image/*"
              name="image"
              onChange={handleImageChange}
              className="file:bg-teal-600 file:text-white file:rounded-md file:px-4 file:py-2 file:border-none file:cursor-pointer text-gray-600"
            />
          </div>

          {/* Name Input */}
          <Input
            label="Name"
            name="name"
            defaultValue={name}
            className="bg-gray-50 border border-gray-300 text-gray-800 focus:border-teal-500 focus:ring-teal-500"
            size="lg"
          />
        </DialogBody>

        <DialogFooter className="justify-end bg-white">
          <Button
            variant="text"
            color="red"
            onClick={onClose}
            className="mr-2 text-gray-500 hover:text-red-600 font-medium"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="gradient"
            color="teal"
            className="bg-teal-600 text-white hover:bg-teal-700 font-medium"
          >
            Save Changes
          </Button>
        </DialogFooter>
      </form>
    </Dialog>
  );
};

export default UpdateProfileModal;
