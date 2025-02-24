import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = ["Features", "Model", "Team", "About"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "FFR.",
      "Facial Feature Recognition.",
      "Analyse Your Face.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Study Section", "Learn, Share, and Grow."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "Casting Section",
      "Bridging the gap between",
      "You and Modeling Agencies.",
    ],
    video: highlightThirdVideo,
    videoDuration: 4,
  },
  {
    id: 4,
    textLists: ["Community Section", "Connect with likeminded", "people and discuss."],
    video: highlightFourthVideo,
    videoDuration: 3,
  },
];

export const models = [
  {
    id: 1,
    title: "Yellow Head",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "Blue Head",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "White Head",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "Black Head",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: 'Head', value: "small" },
  { label: 'Big Head', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];