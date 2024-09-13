import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const CampaignInfo = () => {
  const { id } = useParams();
  const [campaign, setCampaign] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://infinion-test-int-test.azurewebsites.net/api/campaign/${id}`)
      .then((response) => response.json())
      .then((data) => setCampaign(data));
  }, [id]);

  const handleBack = () => {
    navigate("/campaign");
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveChanges = () => {
    // Update the campaign here
    fetch(
      `https://infinion-test-int-test.azurewebsites.net/api/campaign/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(campaign),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setCampaign({ ...campaign, ...data });
        setIsEditing(false);
      });
  };

  return (
    <div className="pt-[30px] px-[85px]">
      <>
        <button className="flex gap-2 items-center" onClick={handleBack}>
          <FaArrowLeft />
          Back
        </button>
      </>
      <div className="py-[16px] flex justify-between">
        <h2 className="text-[#247B7B] font-bold text-[20px] m-0 ">
          Campaign Information
        </h2>

        <div className="py-[8px] px-[18px] flex text-[14px] bg-[#EDF0F0] rounded-[4px]">
          <span className="border-r-2 mr-2 pr-2"> Campaign Status</span>
          <span
            className={`${
              campaign.campaignStatus?.toLowerCase() === "inactive"
                ? "text-red-500"
                : "text-green-500"
            } `}
          >
            {campaign.campaignStatus}
          </span>
        </div>
      </div>
      <div>
        <div className="text-start">
          <p>Campaign Name</p>
          <input
            className="p-[10px] border-1 text-[#999999] rounded-[4px] w-full"
            value={campaign.campaignName}
            onChange={(e) =>
              setCampaign({ ...campaign, campaignName: e.target.value })
            }
            disabled={!isEditing}
          />
        </div>

        <div className="flex gap-[40px] text-start justify-between py-[24px]">
          <div className="w-[100%]">
            <p>Start Date</p>
            <input
              type="date"
              className="p-[10px] border-1 text-[#999999] rounded-[4px] w-full"
              value={new Date(campaign.startDate).toLocaleDateString("en-CA")}
              onChange={(e) =>
                setCampaign({
                  ...campaign,
                  startDate: new Date(e.target.value).toISOString(),
                })
              }
              disabled={!isEditing}
            />
          </div>
          <div className="w-[100%]">
            <p>End Date</p>
            <input
              type="date"
              className="p-[10px] border-1 text-[#999999] rounded-[4px] w-full"
              value={new Date(campaign.endDate).toLocaleDateString("en-CA")}
              onChange={(e) =>
                setCampaign({
                  ...campaign,
                  endDate: new Date(e.target.value).toISOString(),
                })
              }
              disabled={!isEditing}
            />
          </div>
        </div>
        <div className="text-start">
          <div className="w-[100%]">
            <p>Linked Keywords</p>
            <ul className="border-1 flex px-[10px] pt-[10px] pb-[46px] gap-2">
              {campaign.linkedKeywords?.map((keyword, index) => (
                <li
                  className="px-[11px] py-[5px] text-white bg-[#247B7B] rounded-[4px] w-[73px] text-center"
                  key={index}
                >
                  {keyword}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-start">
          <div className="w-[100%]">
            <p> Want to receive daily digest about the campaign?</p>
            <select
              className="border-1 px-[10px] pt-[10px]               pb-[10px] w-full"
              value={campaign.digestCampaign}
              onChange={(e) =>
                setCampaign({ ...campaign, digestCampaign: e.target.value })
              }
              disabled={!isEditing}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
        <div className="text-start mt-3">
          <div className="w-[100%]">
            <p> Want to receive daily digest about the campaign?</p>
            <select
              className="border-1 px-[10px] pt-[10px] pb-[10px] w-full"
              value={campaign.dailyDigest}
              onChange={(e) =>
                setCampaign({ ...campaign, dailyDigest: e.target.value })
              }
              disabled={!isEditing}
            >
              <option value="Hourly">Hourly</option>
              <option value="Daily">Daily</option>
              <option value="Monthly">Monthly</option>
              <option value="Weekly">Weekly</option>
            </select>
          </div>
        </div>

        <div className="flex gap-[30px] my-[50px]">
          {isEditing ? (
            <button
              className="bg-[#990000] text-white py-[12px] px-[36px] rounded-[5px] text-[14px]"
              onClick={handleSaveChanges}
            >
              Save Changes
            </button>
          ) : (
            <button
              className="border-2 text-black border-black py-[12px] px-[36px]  rounded-[5px] text-[14px]"
              onClick={handleEdit}
            >
              Edit Campaign
            </button>
          )}
          <button className="bg-[#990000] text-white py-[12px] px-[36px] rounded-[5px] text-[14px]">
            Stop Campaign
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignInfo;
