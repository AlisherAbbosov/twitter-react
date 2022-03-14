import MidleHeading from "../MidleHeading";
import "./HomePage.scss";
import NewTweet from "./NewTweet";
import TweetsCard from "./TweetsCard/TweetsCard";

const HomePage = () => {
  return (
    <div className="home">
      <MidleHeading />
      <NewTweet />
      <TweetsCard
        name="Designsta"
        lastSeen="25m"
        userName="@inner"
        text="Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?"
      />
      <TweetsCard
        name="cloutexhibition"
        lastSeen="22m"
        userName="@RajLahoti"
        text="YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam."
      />
    </div>
  );
};

export default HomePage;
