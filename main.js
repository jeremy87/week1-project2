//Array for Days !!

// For any methods that we didn't cover, please refer to the Array Documentation.
// Discovering new things is fun and a great way to learn!!
// Please console.log("Question#") followed by console.log(yourAnswer) after each question.
// If you would like, practice using document.write() as well. Use any elements you like!
// ==========================================================================

// 1. Declare a variable whose value is an empty Array. Use any method you choose to add at least 4 items to it.
	
	var animals = []

	animals.push('dog', 'cat', 'goat', 'chicken')
	console.log(animals)

	["dog", "cat", "goat", "chicken"]

// 2. Add an additional item to the beginning of your Array.

	animals.unshift('horse')
	console.log(animals)

	["horse", "dog", "cat", "goat", "chicken"]

// 3. Remove the second and third items.

	animals.splice(1,2);
	console.log(animals)

	["horse", "goat", "chicken"]	

// 4. Add two new items after the second item.

	animals.splice(2,0,'cow','sheep')
	console.log(animals)

	["horse", "goat", "cow", "sheep", "chicken"]

// 5. Write 'The current length of the array is....' using the .length method

	console.log('The current length of the array is ' + animals.length)

// Use the following Array for questions 6-11:
var things = ['mug', 'book', 'mouse', 'plant', 'sunglasses'];

// 6. Change 'mouse' to 'keyboard'

	things[2] = 'keyboard'
	console.log(things)

	["mug", "book", "keyboard", "plant", "sunglasses"]

// 7. Combine all of the elements of the array into a string.

	things.toString()

	"mug,book,mouse,plant,sunglasses"

// 8.* Declare a variable called lastItem whose using .pop() Add two new items to lastItem, on at the beginning and one at the end.

	var lastItem = new Array(things.pop();)

	lastItem.push('coffee mug');
	lastItem.unshift('chair');
	console.log(lastItem)	

// 9.* Create a new Array called itemLast. The items should be the same as lastItem, only in reverse order.

	var itemLast = lastItem.reverse();
	console.log(itemLast)

// 10.* Remove the first item of itemLast.

	itemLast.shift();
	console.log(itemLast)

// 11.* Remove all items from itemLast (No need to write to the document. Just console.log to test your results)

	var itemLast = [];
	console.log(itemLast)

// 12. Using the Arrays below, create a single Array called numberPets whose value is [12, 5, 9, 27, 'fish', 'dog']

var firstArray = [12, 5, 9, 27];
var secondArray = ['fish', 'dog'];

	var numberPets = firstArray.concat(secondArray);
	console.log(numberPets)

	[12, 5, 9, 27, "fish", "dog"]

// Use the following array for questions 13-16:

var people = ['Bill', 'Ted', 'Emily', 'Andrea', 'Doug'];

// 13. Add two new people after 'Doug'

	people.push('Jeremy', 'Alyssa')
	console.log(people)

	["Bill", "Ted", "Emily", "Andrea", "Doug", "Jeremy", "Alyssa"]

// 14.* Remove everybody except 'Andrea' and 'Ted'

	people.shift();
	people.splice(1,1);
	people.splice(4,3);

	console.log(people)

// 15. Add a new person to the beginning of the Array

	people.unshift('Mark')
	console.log(people)

	["Mark", "Ted", "Andrea"]

// 16. Arrange the items alphabetically. Store this Array as orderedPeople

	var orderedPeople = people.sort();
	console.log(orderedPeople)

	["Andrea", "Mark", "Ted"]

// 17. Create an array of arrays with the following three arrays:
var array1 = ["Fido", "Spot", "Rex", "Sparky"]
var array2 = ["Bulldog", "Lab", "Dalmation", "Beagle"]
var array3 = ["White", "Black", "Spotted", "Tri-color"]

// Goal:
var array4 = [
                ["Fido", "Spot", "Rex", "Sparky"],
                ["Bulldog", "Lab", "Dalmation", "Beagle"],
                ["White", "Black", "Spotted", "Tri-color"]
              ]

// Answer *
	
	var bigArray = [(array1, array2, array3)];
	console.log(bigArray)

// 18.* Remove "Sparky" and "White" from the above array of arrays.

	bigArray[0].pop();
	bigArray[2].shift();

	console.log(bigArray)

// BONUS 1: Try to arrange the following items from smallest to largest:
var sortingNumbers = [2, 5, 98, 55, 77, 300]
// Explain why it doesn't sort as expected.

// BONUS 2: Transform array1 into array2 using as few lines of code as you can without directly changing the value of an item (ie array1[0] = item)
var array1 = [2, 'dog', 34, 'Bill', 'plant', 'mug', 17];

//Goal
var array2 = ['plant', 17, 2, 'Bill', 'dog'];

