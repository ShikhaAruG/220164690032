import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

async function register() {
  try {
    const payload = {
      email: process.env.REG_EMAIL,
      name: process.env.REG_NAME,
      mobileNo: process.env.REG_MOBILE,
      githubUsername: process.env.REG_GITHUB,
      rollNo: process.env.REG_ROLLNO,
      accessCode: process.env.REG_ACCESSCODE
    };

    console.log("Sending payload:", payload);

    const response = await axios.post(
      "http://20.244.56.144/evaluation-service/register",
      payload
    );

    console.log("Registration Successful!");
    console.log(response.data);
  } catch (error) {
    console.error("Registration Failed:");
    console.error(error.response?.data || error.message);
  }
}

register();
