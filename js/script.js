let randomStorySubject = ["The cat", "The bird", "The fish", "The dog"];
let randomStoryAction = ["climbs", "sings", "swims", "barks"];
let randomStoryObject = ["the tree", "a song", "in the lake", "in the garden"];

const story = document.getElementById("getRandomStory");
story.addEventListener("click", function() {
    let subject = randomStorySubject[Math.floor(Math.random() * randomStorySubject.length)];
    let action = randomStoryAction[Math.floor(Math.random() * randomStoryAction.length)];
    let object = randomStoryObject[Math.floor(Math.random() * randomStoryObject.length)];
    document.getElementById("output").innerText = `${subject} ${action} ${object}.`;
});
