import qr_code from "/public/images/svg/qr-code.svg";
import bg1 from "/public/images/bg/sm1.jpg";
import bg2 from "/public/images/bg/sm2.jpg";
import bg3 from "/public/images/bg/sm3.jpg";
import bg4 from "/public/images/bg/sm4.jpg";

export const card_data = [
  {
    id: 1,
    img1: bg1,
    img2: qr_code,
    bg_color:"rgba(0, 100, 200, 0.7)",
    heading_text: "Loyalty Membership",
    sub_title:"Save on Subscriptions",
    sub_text:"Join our loyalty program and Save on every membership renewal!",
    identifer:"342-527-026-415",
    issue_date:"Aug 31, 2023",
    expiry_date:"May 23, 2026",
    link: "/login",
  },
  {
    id: 2,
    img1: bg2,
    img2: qr_code,
    bg_color:"rgba(200, 0, 0, 0.7)",
    heading_text: "Film Fanatics Club",
    sub_title:"View and Save",
    sub_text:"Dive into cinematic experiences and enjoy special perks!",
    identifer:"221-737-686-338",
    issue_date:"Aug 18,2023",
    expiry_date:"Mar 24, 2030",
    link: "/login",
  },
  {
    id: 3,
    img1: bg3,
    img2: qr_code,
    bg_color:"rgba(0, 100, 0, 0.7)",
    heading_text: "Style Card",
    sub_title:"Earn as You Style",
    sub_text:"Accumulate points every time you visit our salon!",
    identifer:"180-879-966-499",
    issue_date:"Aug 08, 2023",
    expiry_date:"Jan 08, 2027",
    link: "/login",
  },
  {
    id: 4,
    img1: bg4,
    img2: qr_code,
    bg_color:"rgba(250, 100, 20, 0.7)",
    heading_text: "Loyalty Card",
    sub_title:"Save Now",
    sub_text:"Join our loyalty program and save on every purchase!",
    identifer:"521-179-219-730",
    issue_date:"Aug 05, 2023",
    expiry_date:"Oct 30, 2025",
    link: "/login",
  },
];
