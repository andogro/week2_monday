//THE OBJECT OF MY AFFECTION: OBJECTS
//IN CLASS OBJECT EXERCISES

// For any methods that we didn't cover, please refer to the Object Documentation.
// Please console.log("Question#") followed by console.log(yourAnswer) after each question.
// If you would like, practice using document.write() as well. Use any elements you like!
// ==========================================================================

// 1. Create an object called "me" that describes you with your name, city, and job title.

console.log("Question 1");
var me = {name: 'Andy', city: 'Golden', jobTitle: 'Researcher'
};
console.log(me);

// 2. To your "me" object, add a key of "family" with the value being an array of three of your family members.
// Example of desired output: { name: 'Bob Smith',
//                              city: 'Denver',
//                              jobTitle: 'professional wrestler',
//                               family: ['Joan', 'Kyle', 'Hank'] }

console.log("Question 2");
me.family =['Jacey', 'Xavier', 'Betty'];
console.log(me);


// 3. Using the "me" object, use two different methods of accessing your city.

console.log("Question 3");

console.log(me.city);
console.log(me['city']);

// Use the following Object for questions 4-9:
var invitees = { adults: [{
                          name: "Penny",
                          table: 10,
                          dinnerChoice: ["salad", "beef", "ice cream"]
                        },
                        {
                          name: "Billy",
                          table: 12,
                          dinnerChoice: ["soup", "beef", "sorbet"]
                        },
                        {
                          name: "Lauren",
                          table: 3,
                          dinnerChoice: ["soup", "chicken", "ice cream"],
                          specialConsiderations: { allergies: "melon",
                                                   seating: "Don't sit her next to ex husband at table 8."}
                        }
                        ],
                  children: [{
                             name: "Junior",
                             table: 4,
                             allergies: ["nuts"]
                            },
                            { name: "Pablo",
                            table: 4,
                            allergies: ["gluten", "following directions"]
                            },
                            { name: "Ada",
                            table: 4,
                            allergies: ["boys"]
                            }
                         ]
                      };

// 4. Access Penny's dinner choice.

console.log("Question 4");
console.log(invitees.adults[0].dinnerChoice);


// 5. Access Pablo's table number.

console.log("Question 5");
console.log(invitees.children[1].table);

// 6. Access Lauren's seating specialConsideration.

console.log("Question 6");
console.log(invitees.adults[2].specialConsiderations);

// 7. Access Billy's desert choice (this will be the third item in his dinneChoice array)

console.log("Question 7");
var dessertChoice = invitees.adults[1].dinnerChoice[2]
console.log(dessertChoice);

// 8. Access Ada's allergies.
console.log("Question 8");
console.log(invitees.children[2].allergies);

// 9. Create a string that reads Lauren's dinner choice in a sentence.
// Desired result: "Lauren's appetizer is _______. She will be eating ______ for dinner
// and has selected ________ as her dessert."

console.log("Question 9")
var dinnerChoice = ("Lauren's appetizer is " + invitees.adults[1].dinnerChoice[0] + ". She will be eating " +
invitees.adults[1].dinnerChoice[1] + " for dinner and has selected " + invitees.adults[1].dinnerChoice[0] + " as her dessert.")
console.log(dinnerChoice);

// 10. Create an empty object called "jsWorkshop" using Constructor Notation.
console.log("Question 10");
var jsWorkshop = new Object();
console.log(jsWorkshop);

// 11. To your "jsWorkshop" object, assign a key of "classmates" with the value being an array of five your classmates.
console.log("Question 11");
jsWorkshop.classmates = ['Kevin', 'Gustavo', 'Caleb', 'Jenny', 'Andy'];
console.log(jsWorkshop);

// 12. Acesss the third classmate in your "jsWorkshop" object.
console.log("Question 12");
console.log(jsWorkshop.classmates[2])

// 13. Get the length of the fourth classmate's name.

console.log("Question 13");
console.log(jsWorkshop.classmates[3].length)

// 14. Clear the classmates value.

console.log("Question 14");
delete jsWorkshop.classmates;
console.log(jsWorkshop);

// 15. Create an empty array called "books".
// Create three objects that contain book titles, their author, and number of pages.
// Insert the three objects into the "books" array.
// (Feel free to make up the titles. And the authors. Have fun. No pressure.)
// Example of desired array: [ youHadMeAtWoof, bangkokHaunts, theCatcherInTheRye]
// Example of desired object: {title: "You Had Me at Woof", author: "Julie Klum", pages: 207}
// Final desired result:
console.log("Question 15");
var books = new Object([]);
books.doorsOfMisperception = {title: "Doors of Misperception", author: "Aldous Tuxley", pages: 345};
books.hurdyGurdyMan = {title: "Hurdy Gurdy Man", author: "Mitchel Longfellow", pages: 201};
books.sonOfSamIAm = {title:"Son of Sam I Am", author: "David Berkowitz", pages: 66};
console.log(books);

///    var books = [{ youHadMeAtWoof: {
                                  //title: "You Had Me at Woof",
                                  //author: "Julie Klum",
                                  //pages: 207
                                  //},
                   //theCatcherInTheRye: {
                    //              title: "The Catcher in the Rye",
                      //            author: "JD Salinger",
                        //          pages: 214
                          //        },
                   //bangkokHaunts: {
                    //              title: "Bangkok Haunts",
                      //            author: "John Burdett",
                        //          pages: 569,
                          //        }
              //  }]

                // 15a. Access the author of the first book.
console.log("Question 15a");
console.log(books.doorsOfMisperception.author);


                // 15b. Print the length of the author the the third book.

console.log("Question 15b");
console.log(books.sonOfSamIAm.author.length);

                // 16. To each book object variable, add a key of "dateRead" with a value of the year you read the book.
                // (Go ahead and make this up, too. Get wild.)
console.log("Question 16");
books.doorsOfMisperception.dateRead = 1995;
books.hurdyGurdyMan.dateRead = 2000;
books.sonOfSamIAm.dateRead = 2020;
console.log(books);

                // 17. Remove the second book from the books Array.

                console.log("Question 17");
                delete books.hurdyGurdyMan;
                console.log(books);

                // Bonus: Explain, in your own words, the difference between Literal Notation and Constructor.
console.log("Question 17 Bonus");

console.log("In Constructor language you construct an empty object first, then populate it later.  In Literal, you literally insert the property values while you are creating the object.");



                // 17. Let's play a game. Create an object (like we did with the bike in class) and assign it at least five properties.
                // The class will guess what your object is based on it's properties.

            console.log("Question 17-2");
            var guess = {texture: 'dense', flavor: 'sour', package: 'red', shape: 'oval', color: 'rainbow',
            };

                // You're a zookeeper and keeping a detailed log of each of the animals in your zoo.
                // 18. Create an empty object called "zoo"

var zoo = new Object();

                // 19. Create assign three animals as your keys in the "zoo" object. The values of the animals should be empty objects.
console.log("Question 19");

 zoo.elephant = {};
 zoo.tiger= {};
 zoo.giraffe= {};

console.log(zoo);
                // 20. Within each animal empty object, assign a key/value pair of "timeSlept" and a number indicating the hours of sleep each animal got. (Make this up, obvi)
console.log("Question 20");

              zoo.elephant.timeSlept = 8;
              zoo.tiger.timeSlept = 12;
              zoo.giraffe.timeSlept = 13;
console.log(zoo);

                // 21. Within each animal object, assign a object pair consisting of a key called "meals" and an empty array as the value.
console.log("Question 21");
         zoo.elephant.meals = [];
          zoo.tiger.meals = [];
         zoo.giraffe.meals = [];
         console.log(zoo);
                // 22. Within each animal's meals array, create two objects with keys of "monday" and "wednesday". You only feed those jerks twice a week. It's fine.
console.log("Question 22");
zoo.elephant.meals.push({ monday: ""}, { wednesday: ""});
zoo.tiger.meals.push({ monday: ""}, { wednesday: ""});
zoo.giraffe.meals.push({ monday: ""}, { wednesday: ""});
console.log(zoo);

                // 23. In the individual days of the week, create an object with the key of each meal ("breakfast", "lunch", "dinner") and a made up value of what they ate.
                // That array should look like this (within the meals object, within the animal object, within the zoo object):
    //                              [ { monday: {
    //                                breakfast: "cheetos on top of greek yogurt",
    //                                lunch: "6 gallons of Diet Coke",
    //                                dinner: "leftover lasagna"
    //                              }},
    //                               {wednesday: {
    //                                breakfast: "cashews, diced apples, tuna, grapes, BubbleYum",
    //                                lunch: "a ham and cheddar lunchable",
    //                                dinner: "I put my thing down, flip it, and reverse it"
    //                              }}]
console.log("Question 23");
zoo.elephant.meals[0].monday = {breakfast: "sunny d",
                        lunch: "turtle soup",
                       dinner: "chicken fingers"
                                }
zoo.elephant.meals[1].wednesday = {breakfast: "hot dogs",
                        lunch: "seitan",
                       dinner: "plant based gravy"
                                  }
zoo.tiger.meals[0].monday = {breakfast: "hay",
                                lunch: "granola",
                                dinner: "rockstar soup"
                                }
zoo.tiger.meals[1].wednesday = {breakfast: "pellets",
                                   lunch: "fish n chips",
                                   dinner: "bbq grass"
                                }
zoo.giraffe.meals[0].monday = {breakfast: "banana",
                                lunch: "lettuce",
                                dinner: "veal"
                                }
zoo.giraffe.meals[1].wednesday = {breakfast: "leftover fish from the seals",
                                  lunch: "butterfly wings",
                                  dinner: "coins from fountain"
                                  }

console.log(zoo);

                // 24. Damn it. The night zookeeper just informed you that your second animal took a nap right before bed time. Add two hours to his "timeSlept" value.
console.log("Question 24");
zoo.tiger.timeSlept = (zoo.tiger.timeSlept + 2);
console.log (zoo);

                 // 25. To each animal object, add a "favoriteActivities" key with the value being an array of three of his/her favorite activities.
console.log("Question 25");
zoo.elephant.favoriteActivities =  ["sleeping", "crushing beers", "stampeding"];
zoo.tiger.favoriteActivities = ["jumping", "thumping", "whumping"];
zoo.giraffe.favoriteActivities = ["pecking", "preening", "rampaging"];
console.log (zoo);

                // 26. Your first animal just tossed his lunch at the zoo visitors. Change his monday lunch value to an empty string.
console.log("Question 26");
zoo.elephant.meals[0].monday.lunch = "";
console.log(zoo.elephant.meals[0].monday);

// 27. You know your "zoo" object? The owner wants to add zookeepers to the object, too. But before we do that, we need to make sure
// the animals stay separate from the zookeepers. To do this, create an object within the "zoo" object. The key will be "animals" and the value will be an array
// containing the three animals you already defined.

console.log("Question 27");
zoo.animals = new Object();
zoo.animals.elephant = zoo.elephant;
zoo.animals.tiger = zoo.tiger;
zoo.animals.giraffe = zoo.giraffe;
console.log (zoo);

// 28. To the "zoo" object, add an object named "zookeepers" with the value being and empty object.
console.log("Question 28");
zoo.zookeepers = new Object();
console.log (zoo);

// 29. To the empty "zookeepers" object, add two objects with their keys being two names and their values being an empty object.
console.log("Question 29");
zoo.zookeepers = {Jim:[], Jam:[]};
console.log (zoo);

// 30. This joker wants you to add the "hireDate" for each zookeeper. Within the empty array attached to each name, assign a key/value pair of
// "hireDate" and the value being a string of hire date.
console.log("Question 30");
zoo.zookeepers.Jim.push({hireDate: "2/2/2000"});
zoo.zookeepers.Jam.push({hireDate: "1/25/2001"});
console.log (zoo);
