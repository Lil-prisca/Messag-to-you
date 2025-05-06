console.log("Welcome to the Page");
let main = document.querySelector(".main-container");
let submitt = document.querySelector(".submit");
let form = document.querySelector(".form");
let alert = document.querySelector(".alert");
let scontainer = document.querySelector(".secondContainer");
let fname = document.querySelector(".firstName");
let lname = document.querySelector(".SecondName");
let image = "./promise-3.jpg";
let wishes = document.createTextNode("HAPPY BIRTHDAY TO YOU");
let wishes1 = document.createTextNode(
  "Hey bestie! 😊💕🎉 I just wanted to take a moment to wish you a happy birthday! 🎂🍰🎁 It's been a long while I knew this cry baby 😂, she can so cry over every little issue 🤣, I guess she just gets too emotional attached easily 💔. Regardless, we would always be there for you baby (the only baby we have now) 👶. Even though she can also stress your life o 😩, but I'm so grateful to have you in my life 🙏. I know you can get emotional at times 🤗, but that's just part of what makes you so caring and loving ❤."
);

let wishes2 = document.createTextNode(
  "You've always been there for me 🤝, checking in on me and showing concern 📱, even when I've let you down 😔. There are some times I don't check up on her, she would still message me and say 'Dara, you can never change, why haven't you checked on me?' 📲 after I have said over and over again that I would change 🙄. 😂 Your ability to care for others is truly admirable 🙌, even though she thinks she is wicked or can do wicked things 😳, you just can't imagine her still asking and checking up on people she doesn't want to talk to or message from other people 🤷‍♀."
);
let wishes3 = document.createTextNode(
  "And I'm so lucky to have you as a friend 🤩! I love how you're always willing to lend a listening ear 👂 and offer advice when I need it 💬. You're someone I can run to when I'm in need 🏃‍♀, and I know you'll always be there for me 💯. I never made a mistake on making you my bestie 💕, cause it's one of the best things that's happened to me 🙏. I'm so happy our paths crossed 🌈, and I wish our friendship continues to grow stronger with each passing day 💗."
);
let wishes4 = document.createTextNode(
  "Here's to another amazing year ahead! 🎉 I wish you a happy birthday 🎂, more money to spend 💸 (because you sabi spend ahh odoguwu spender 😂), more life to live 🌟, more fun to have 🤩, and more success in all areas of your life 🚀. May all your dreams and aspirations come to fruition 🌈. P.S. Don't forget about your weight loss goal! 🏋‍♀ Let's work on that together 💪. Happy birthday, bestie! 🎁👑"
);

submitt.addEventListener("click", function () {
  console.log("You just Submitted your Name ");
  let fnamevalue = fname.value;
  let lnamevalue = lname.value;
  console.log(fnamevalue);
  if (fnamevalue === "" || lnamevalue === "") {
    let para = document.createElement("p");
    let text = document.createTextNode("One of the Input is Empty");
    para.appendChild(text);
    alert.appendChild(para);
    alert.style.marginTop = "10px";
  } else {
    form.style.display = "none";
    scontainer.style.display = "block";

    if (
      fnamevalue.toLowerCase() === "promise" ||
      lnamevalue.toLowerCase() === "ohanekwu"
    ) {
      let para = document.createElement("p");
      let div = document.createElement("div");
      let div1 = document.createElement("div");
      let div2 = document.createElement("div");
      let div3 = document.createElement("div");
      let div4 = document.createElement("div");
      let text = document.createTextNode(
        `${fnamevalue.toUpperCase()}, This Message is for you`
      );
      let imgdiv = document.createElement("div");
      let img = document.createElement("img");
      img.setAttribute("src", image);
      img.style.height = "100px";
      img.style.width = "100px";
      imgdiv.appendChild(img);
      img.style.borderRadius = "40px";
      imgdiv.style.textAlign = "center";
      para.appendChild(text);
      div.appendChild(wishes);
      div1.appendChild(wishes1);
      div2.appendChild(wishes2);
      div3.appendChild(wishes3);
      div4.appendChild(wishes4);
      scontainer.appendChild(imgdiv);
      scontainer.appendChild(para);
      scontainer.appendChild(div);
      scontainer.appendChild(div1);
      scontainer.appendChild(div2);
      scontainer.appendChild(div3);
      scontainer.appendChild(div4);
      scontainer.style.height = "90%";

      main.style.width = "500px";
      main.style.height = "600px";
      main.style.padding = "10px";
    } else {
      let para = document.createElement("p");
      let text = document.createTextNode(
        `${fnamevalue.toUpperCase()}, The Message is for you is COMING SOON`
      );
      para.appendChild(text);
      scontainer.appendChild(para);
    }
  }
});
