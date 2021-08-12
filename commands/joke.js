module.exports = {
      name: 'joke',
      description: 'This command is for telling jokes',
      execute(message, args) {

var j1 = "A man walks into a library and asks the librarian for books about paranoia. She whispers, \"They're right behind you!\"";
var j2 = "Want to hear a roof joke? The first one's on the house.";
var j3 = "What should you do if you're attacked by a group of clowns? Go straight for the juggler.";
var j4 = "Why don't koalas count as bears? They don't have the right koalafications.";
var j5 = "A cement mixer and a prison bus crashed on the highway. Police advise citizens to look out for a group of hardened criminals.";
var j6 = "I couldn't figure out why the baseball kept getting bigger. Then it hit me.";
var j7 = "I saw a movie about how ships are put together. It was riveting.";
var j8 = "A man walks into a library and orders a hamburger. The librarian says, \"This is a library.\" The man apologizes and whispers, \"I'd like a hamburger, please.\"";
var j9 = "Why did the taxi driver get fired? Passengers didn't like it when she went the extra mile.";
var j10 = "What do you get when you pour root beer into a square cup? Beer.";
var j11 = "A group of crows was arrested for hanging out together. The charge? Attempted murder.";
var j12 = "How do you look for Will Smith in the snow? Just follow the fresh prints.";
var j13 = "Which rock group has four guys who can't sing or play instruments? Mount Rushmore.";
var j14 = "Why does Humpty Dumpty love autumn? Because he always has a great fall.";
var j14 = "Why does Humpty Dumpty love autumn? Because he always has a great fall.";
var j15 = "Where do hamburgers take their sweethearts on Valentine's Day to dance? The Meat Ball!";
var j16 = "What time does a duck wake up? The quack of down.";
var j17 = "Some people eat snails. They must not like fast food.";
var j18 = "Have you heard the one about the skunk? Never mind, it really stinks.";
var j19 = "It's always windy in a sports arena. All those fans.";
var j20 = "How do mountains stay warm in the winter? Snowcaps.";
var j21 = "What happens to a frog's car when it breaks down? It gets toad away.";
var j22 = "What do you call a pile of kittens? A meowntain.";
var j23 = "Is this pool safe for diving? It deep ends.";
var j24 = "What is worse than raining cats and dogs? Hailing taxis!";
var j25 = "What did the nose say to the finger? Quit picking on me!";
var j26 = "What is the best day to go to the beach? Sunday, of course!";
var j27 = "What bow can't be tied? A rainbow!";
var j28 = "How many tickles does it take to make an Octopus laugh? Ten-tickles.";
var j29 = "How does a dog stop a video? By hitting the paws button!";
var j30 = "People think \"icy\" is the easiest word to spell. Come to think of it, I see why.";
var j31 = "My teachers told me I'd never amount to much because I procrastinate so much. I told them, \"Just you wait!\"";
var j32 = "Comic Sans walks into a bar. The bartender says, \"We don't serve your type here.\"";
var j33 = "What's the easiest way to get straight As? Use a ruler.";
var j34 = "A grasshopper sits down at a bar. The bartender says, \"We have a drink named after you!\" The grasshopper replies, \"Who names a drink 'Steve?'\"";
var j35 = "What's a balloon's least favorite type of music? Pop.I went into a store to buy some books about turtles. \"Hardbacks?\" asked the shopkeeper.\"Yes,\" I replied. \"And they have little heads, too.\"";
var j36 = "I went into a store to buy some books about turtles. \"Hardbacks?\" asked the shopkeeper.\"Yes,\" I replied. \"And they have little heads, too.\"";
var j37 = "What does the world's top dentist get? A little plaque.";
var j38 = "I used to be addicted to not showering. Luckily, I've been clean for five years.";
var j39 = "Have you heard about Murphy's Law? Yes. Anything that can go wrong will go wrong. How about Cole's Law? No. It's julienned cabbage in a creamy dressing.";
var j40 = "What did the green grape say to the purple grape? \"Breathe, man! Breathe!\"";
var j41 = "What's the difference between a hippo and a Zippo? One is really heavy, the other's a little lighter.";
var j42 = "How does a farmer mend his overalls? With cabbage patches.";
var j43 = "Why was the tomato red? Because he saw the salad dressing.";
var j44 = "I got my husband a fridge for his birthday. His face lit up when he opened it.";
var j45 = "Why were they called the Dark Ages? Because there were lots of knights.";
var j46 = "How does NASA organize a party? They planet.";
var j47 = "What did the big flower say to the little flower? Hi bud!";
var j48 = "What's sticky and brown? A stick!";
var j49 = "Why is no one friends with Dracula? Because he's a pain in the neck.";
var j50 = "What did one toilet say to the other? You look flushed.";

            var joke_num = Math.ceil(Math.random()*50);

            console.log("Tell Joke called by " + message.author.tag + ", joke_num = " + joke_num);

            switch(joke_num) {
                  case 1:
                        message.channel.send(j1);
                        break;
                  case 2:
                        message.channel.send(j2);
                        break;
                  case 3:
                        message.channel.send(j3);
                        break;
                  case 4:
                        message.channel.send(j4);
                        break;
                  case 5:
                        message.channel.send(j5);
                        break;
                  case 6:
                        message.channel.send(j6);
                        break;
                  case 7:
                        message.channel.send(j7);
                        break;
                  case 8:
                        message.channel.send(j8);
                        break;
                  case 9:
                        message.channel.send(j9);
                        break;
                  case 10:
                        message.channel.send(j10);
                        break;
                  case 11:
                        message.channel.send(j11);
                        break;
                  case 12:
                        message.channel.send(j12);
                        break;
                  case 13:
                        message.channel.send(j13);
                        break;
                  case 14:
                        message.channel.send(j14);
                        break;
                  case 15:
                        message.channel.send(j15);
                        break;
                  case 16:
                        message.channel.send(j16);
                        break;
                  case 17:
                        message.channel.send(j17);
                        break;
                  case 18:
                        message.channel.send(j18);
                        break;
                  case 19:
                        message.channel.send(j19);
                        break;
                  case 20:
                        message.channel.send(j20);
                        break;
                  case 21:
                        message.channel.send(j21);
                        break;
                  case 22:
                        message.channel.send(j22);
                        break;
                  case 23:
                        message.channel.send(j23);
                        break;
                  case 24:
                        message.channel.send(j24);
                        break;
                  case 25:
                        message.channel.send(j25);
                        break;
                  case 26:
                        message.channel.send(j26);
                        break;
                  case 27:
                        message.channel.send(j27);
                        break;
                  case 28:
                        message.channel.send(j28);
                        break;
                  case 29:
                        message.channel.send(j29);
                        break;
                  case 30:
                        message.channel.send(j30);
                        break;
                  case 31:
                        message.channel.send(j31);
                        break;
                  case 32:
                        message.channel.send(j32);
                        break;
                  case 33:
                        message.channel.send(j33);
                        break;
                  case 34:
                        message.channel.send(j34);
                        break;
                  case 35:
                        message.channel.send(j35);
                        break;
                  case 36:
                        message.channel.send(j36);
                        break;
                  case 37:
                        message.channel.send(j37);
                        break;
                  case 38:
                        message.channel.send(j38);
                        break;
                  case 39:
                        message.channel.send(j39);
                        break;
                  case 40:
                        message.channel.send(j40);
                        break;
                  case 41:
                        message.channel.send(j41);
                        break;
                  case 42:
                        message.channel.send(j42);
                        break;
                  case 43:
                        message.channel.send(j43);
                        break;
                  case 44:
                        message.channel.send(j44);
                        break;
                  case 45:
                        message.channel.send(j45);
                        break;
                  case 46:
                        message.channel.send(j46);
                        break;
                  case 47:
                        message.channel.send(j47);
                        break;
                  case 48:
                        message.channel.send(j48);
                        break;
                  case 49:
                        message.channel.send(j49);
                        break;
                  case 50:
                        message.channel.send(j50);
                        break;
            }

      }
}