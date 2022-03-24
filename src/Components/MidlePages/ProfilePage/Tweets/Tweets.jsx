import TweetsCard from "../../HomePage/TweetsCard/TweetsCard";

const Tweets = () => {
  return (
    <>
      <TweetsCard
        name="Bobur"
        userName="@bobur_mavlonov"
        lastSeen="Apr 1"
        text="4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni normallashtirishni reja qildim"
      />

      <TweetsCard
        name="Bobur"
        userName="@bobur_mavlonov"
        lastSeen="Apr 1"
        text="Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima deyayotganimizga qarab ham o'tirmaymiz. 

      Bitta biznes trener nito gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi slishkom aqlli odamlar nazdida. 
      
      Gap faqat biznes trenerlar haqida emas."
      />
    </>
  );
};

export default Tweets;
