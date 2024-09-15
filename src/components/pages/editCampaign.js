import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const EditCampaign = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [editCampaign, setEditCampaign] = useState({
    id: id,
    campaignName: "",
    startDate: "",
  });

  useEffect(() => {
    fetch(`https://infinion-test-int-test.azurewebsites.net/api/campaign/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setEditCampaign(data);
        console.log(data);
      });
  }, [id]);

  const handleChange = (event) => {
    setEditCampaign({
      ...editCampaign,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://infinion-test-int-test.azurewebsites.net/api/campaign/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(editCampaign),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setEditCampaign(data);
        console.log(data);
        navigate("/"); // Redirect to homepage
      });
  };

  return (
    <div className="pt-[30px] px-[85px]">
      {/* ... */}
      <form onSubmit={handleSubmit}>
        <div className="text-start">
          <p>Campaign Name</p>
          <input
            type="text"
            value={editCampaign.campaignName}
            onChange={handleChange}
            name="campaignName"
            className="p-[10px] border-1 text-[#999999] rounded-[4px] w-full"
          />
        </div>

        <div className="flex gap-[40px] text-start justify-between py-[24px]">
          <div className="w-[100%]">
            <p>Start Date</p>
            <input
              type="date"
              name="startDate"
              value={new Date(editCampaign.startDate).toLocaleDateString(
                "en-CA"
              )}
              onChange={handleChange}
              className="p-[10px] border-1 text-[#999999] rounded-[4px] w-full"
            />
          </div>
          <div className="w-[100%]">
            <p>End Date</p>
            <input
              type="date"
              name="endDate"
              value={new Date(editCampaign.endDate).toLocaleDateString("en-CA")}
              onChange={handleChange}
              className="p-[10px] border-1 text-[#999999] rounded-[4px] w-full"
            />
          </div>
        </div>

        <div className="text-start">
          <div className="w-[100%]">
            <p>Linked Keywords</p>
            <textarea
              className="border-1 px-[10px] pt-[10px] pb-[46px] w-full"
              value={editCampaign.linkedKeywords?.join("\n")}
              onChange={(e) =>
                setEditCampaign({
                  ...editCampaign,
                  linkedKeywords: e.target.value.split("\n"),
                })
              }
            ></textarea>
          </div>
        </div>

        <div className="text-start mt-4">
          <div className="w-[100%]">
            <p> Want to receive daily digest about the campaign?</p>
            <select
              name="receiveDailyDigest"
              value={editCampaign.dailyDigest}
              className="border-1 px-[10px] pt-[10px] pb-[10px] w-full"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        <div className="text-start pt-4">
          <div className="w-[100%]">
            <p> Kindly select the time you want tio receive daily digest</p>
            <select
              name="digestFrequency"
              className="border-1 px-[10px] pt-[10px] pb-[10px] w-full"
            >
              <option value="Yes">Hourly</option>
              <option value="Daily">Daily</option>
              <option value="Monthly">Monthly</option>
              <option value="Weekly">Weekly</option>
            </select>
          </div>
        </div>

        <div className="flex gap-[30px] my-[50px]">
          <button
            type="submit"
            className="border-2 text-black border-black py-[12px] px-[36px]  rounded-[5px] text-[14px]"
          >
            Save Campaign
          </button>

          <button
            type="button"
            className="bg-[#990000] text-white py-[12px] px-[36px] rounded-[5px] text-[14px]"
            onClick={() => navigate(-1)}
          >
            Stop Campaign
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCampaign;
