import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import InputField from "../components/Inputfield";

const SellerRegistration: React.FC = () => {
  const [businessName, setBusinessName] = useState<string>("Example");
  const [url, setUrl] = useState<string>("www.website.com/example");
  const [error, setError] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  const [savedUrls, setSavedUrls] = useState<string[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUrls = localStorage.getItem("savedUrls");
    if (storedUrls) {
      setSavedUrls(JSON.parse(storedUrls).map((u: string) => u.toLowerCase()));
    }
  }, []);

  const handleUrlChange = (value: string) => {
    const formattedUrl = value.trim().toLowerCase(); 
    setUrl(formattedUrl);

    if (savedUrls.includes(formattedUrl)) {
      setError("That URL is already taken. Try another.");
    } else {
      setError("");
    }
  };

  const handleSubmit = () => {
    const formattedUrl = url.trim().toLowerCase(); 

    if (!formattedUrl || error) return;
    if (!checked) {
      alert("You must agree to the terms.");
      return;
    }

    const updatedUrls = [...savedUrls, formattedUrl];
    setSavedUrls(updatedUrls);
    localStorage.setItem("savedUrls", JSON.stringify(updatedUrls));

    alert(`Seller Registered with URL: ${formattedUrl}`);
    navigate("/success");

    setUrl(""); 
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 py-10 bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-black mb-6 text-center">
          Seller <span className="text-purple-600">Registration</span>
        </h2>

        <InputField
          label="Business Name"
          value={businessName}
          setValue={setBusinessName}
          editableIcon={true}
          containerClassName="bg-gray-200"
        />

        <InputField
          label="Business URL"
          value={url}
          setValue={handleUrlChange}
          error={error}
          editableIcon={false}
          type="url"
          containerClassName="border border-black"
        />

        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            id="terms"
            className="mr-2 cursor-pointer"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <label htmlFor="terms" className="text-gray-700 text-sm cursor-pointer">
            I agree to the user agreement and privacy policy
          </label>
        </div>

        <div className="text-center">
          <Button text="Become Seller Now" onClick={handleSubmit} className="mt-6 w-full" />
        </div>
      </div>
    </div>
  );
};

export default SellerRegistration;
