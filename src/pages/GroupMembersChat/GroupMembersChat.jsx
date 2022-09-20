import React from "react";
import { useState } from "react";
import GroupMember from "../../components/groupMember/GroupMember";
import { Mialimages } from "../../feature/Mialimages";
const GroupMembersChat = ({ memerShow }) => {
  const [data, setData] = useState([
    {
      logo: Mialimages.avatar,
      memberheading: "#Designers",
      members: "Members (8)",
      fileImage: Mialimages.pdf,
      filename: "Brand Styles Guide.pdf",
      filesize: "487KB",
      fileImage2: Mialimages.figma,
      filename2: "Dashboard UI Kit.psd",
      filesize2: "2.5MB",
      fileImage3: Mialimages.pdf,
      filename3: "Rocket – Admin Dash...",
      filesize3: "4.2MB",
      photosbackground: Mialimages.bg,
      photosbackground2: Mialimages.bg2,
      photosbackground3: Mialimages.bg3,
      userIcon: Mialimages.user1,
      username: "Jacob Hawkins",
      profession: "UI/UX Designer",
      userIcon2: Mialimages.user2,
      username2: "Regina Cooper",
      profession2: "Project Manager",
      userIcon3: Mialimages.user3,
      username3: "Jane Wilson",
      profession3: "Project Manager",
    },
  ]);
  return (
    <>
      <div className="desginer_siderBar">
        {data.map((e, idx) => (
          <GroupMember
            key={idx}
            logo={e.logo}
            memberheading={e.memberheading}
            members={e.members}
            fileImage={e.fileImage}
            filename={e.filename}
            filesize={e.filesize}
            fileImage2={e.fileImage2}
            filename2={e.filename2}
            filesize2={e.filesize2}
            fileImage3={e.fileImage3}
            filename3={e.filename3}
            filesize3={e.filesize3}
            photosbackground={e.photosbackground}
            photosbackground2={e.photosbackground2}
            photosbackground3={e.photosbackground3}
            userIcon={e.userIcon}
            username={e.username}
            profession={e.profession}
            userIcon2={e.userIcon2}
            username2={e.username2}
            profession2={e.profession2}
            userIcon3={e.userIcon3}
            username3={e.username3}
            profession3={e.profession3}
            memerShow={memerShow}
          />
        ))}
      </div>
    </>
  );
};

export default GroupMembersChat;
