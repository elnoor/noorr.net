import React from "react";

export default function WelcomeText({ showRevisedText = true }) {
  return showRevisedText ? (
    <>
      My name is Elnur and coding is my true passion. To me, it's not just a way
      to earn a living, but it brings me joy and fulfillment. When I don't have
      enough opportunities to code during my work hours due to meetings and
      events, I like to find new problems to solve and turn them into apps in my
      free time. More often than not, when I have some spare time, I ask myself
      "should I play a video game or code something?" and you guessed it, coding
      wins out 90% of the time. So, don't be surprised if you receive an email
      from me at 3am, I may be busy coding up until then.
      <br />
      <br />
      I enjoy discussing the latest technology trends and sharing my knowledge
      and insights with others. I believe that knowledge is only valuable when
      it's shared, and I'm always eager to learn something new. My rule for
      learning is "meeting twice". When I first encounter something new, I
      ignore it. But if I see it a second time, I know I must learn it and apply
      it wherever I can.
      <br />
      <br />I may not update this website frequently, but you can check out my
      LinkedIn profile for a more up-to-date representation of my work and
      interests. If you have something to share or just want to connect, please
      don't hesitate to reach out to me through the contact page or on LinkedIn.
      I'm always open to meeting new people and hearing new ideas.
    </>
  ) : (
    <>
      My name is Elnur. My #1 passion is coding... This is not only the way to
      make money, but also a means to make myself happy. If I don't get enough
      chance to do good amount of coding (problem solving) at my daily work (due
      to meetings, events etc.), at home you can expect me to find a problem,
      solve it and make it an app. Usually whenever I get some free time, I ask
      myself a question: Should I play a console game or or should I code
      something ?.. Guess what, %90 of times I select the second. So, it is
      pretty natural if you receive an email from me around 3am - I am usually
      busy doing some coding till then.
      <br />
      <br />I like discussing the latest tech trends, to explain, teach whatever
      I know or learned recently. I believe knowledge is only beautiful when it
      is shared. I also love to learn new stuff. My philosphy/rule to start
      learning is "meeting twice". Basically whenever I hear/see someting new
      for the first time I ignore it. If I encounter with it for the second
      time, no way I can let it pass. That should be mine... I must learn it and
      for sure apply it whenever can be and needed. I may not update this
      website very frequently, sorry if you felt that, please, feel free to
      check out my LinkedIn profile as it is usually more up-to-date. If you
      have something to tell me, please, do not hesitate to drop a line for me
      in contact page or via LinkedIn. I am more than happy to hear and meet new
      people as it is always fun.
    </>
  );
}
