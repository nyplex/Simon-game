export default function printMe() {
    console.log('I get called from print.js!');
}

export let changeText = () => {
  $("#myText").text("Je suis")
}