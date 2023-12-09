import { FaBars, FaRegUserCircle, FaHome } from "react-icons/fa";
export const UserMenu = [
   
    {
      id: "au@201",
      itm: "",
      url: "#",
      dropdown: true,
      dropdown_itms: [
        {
          id: "du@01",
          dp_itm: "Account",
          url: "#",
          sbu_dropdown: true,
          sub_items: [
            {
              id: "sub@01",
              sub_itm: "Account",
              url: "/account",
            },
            {
              id: "sub@02",
              sub_itm: "Account Details",
              url: "/account-details",
            },
          ],
        },
        {
          id: "du@02",
          dp_itm: "Product",
          url: "/product",
        },
        {
          id: "du@03",
          dp_itm: "Loan",
          url: "#",
          sbu_dropdown: true,
          sub_items: [
            {
              id: "sub@001",
              sub_itm: "Business Loans",
              url: "/business-loan",
            },
            {
              id: "sub@002",
              sub_itm: "Educations Loans",
              url: "/educations-loan",
            },
            {
              id: "sub@003",
              sub_itm: "Home Loans",
              url: "/home-loan",
            },
            {
              id: "sub@004",
              sub_itm: "Car Loans",
              url: "/car-loan",
            },
            {
              id: "sub@005",
              sub_itm: "Personal Loans",
              url: "/personal-loan",
            },
          ],
        },
        {
          id: "du@04",
          dp_itm: "Card",
          url: "/card",
        },
      ],
    },
  ];
  