import { useState } from "react";
import Swal from "sweetalert2";

const AddUser = () => {
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const handleChange = (event) => {
    setGender(event.target.value);
  };
  const handleStatus = (event) => {
    setStatus(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const selectedGender = gender;
    const selectedStatus = status;
    const user = { name, email, selectedGender, selectedStatus };
    console.log(user);
    fetch("https://user-management-server-gules-xi.vercel.app/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
            form.reset();
            Swal.fire({
                title: "Good job!",
                text: "You just added an User!",
                icon: "success"
              });
        }
      });
  };
  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold text-center">Add User Here:</h2>
      <div className="md:w-[50%] mx-auto my-5">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Name
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id=""
              name="name"
              placeholder="Enter name"
              required=""
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Email
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id=""
              name="email"
              placeholder="Enter Email"
              required=""
            />
          </div>
          <div className="space-y-2 flex items-center gap-5">
            <h4 className="text-xl font-bold">Gender</h4>
            <div className="flex items-center justify-center">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-green-500 h-5 w-5 mr-2"
                  value="male"
                  checked={gender === "male"}
                  onChange={handleChange}
                />
                <span className="text-gray-700">Male</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  className="form-radio text-green-500 h-5 w-5 mr-2"
                  value="female"
                  checked={gender === "female"}
                  onChange={handleChange}
                />
                <span className="text-gray-700">Female</span>
              </label>
            </div>
          </div>
          <div className="space-y-2 flex items-center gap-5">
            <h4 className="text-xl font-bold">Status</h4>
            <div className="flex items-center justify-center">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-green-500 h-5 w-5 mr-2"
                  value="active"
                  checked={status === "active"}
                  onChange={handleStatus}
                />
                <span className="text-gray-700">Active</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  className="form-radio text-green-500 h-5 w-5 mr-2"
                  value="inactive"
                  checked={status === "inactive"}
                  onChange={handleStatus}
                />
                <span className="text-gray-700">Inactive</span>
              </label>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <button
              className="inline-flex bg-[#20a732] items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-white hover:bg-[#1b8e2a] h-10 px-4 py-2 w-full"
              type="submit"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
