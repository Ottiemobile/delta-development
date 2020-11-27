/*****************************************
 *This is desidned for testing out code  *
 *that could be used for the main website*
 *****************************************/
 
 var devName= "Dillon Torre";
 
 var incomingUser= prompt("Who are you? What is your name?", "Write name here. Full name If you can");
 
 switch(incomingUser){
  case "Myra":
   alert("Hey Myra!");
   break;
  case "Lucas":
   alert("Hey Lucas!");
   break;
  case "Celeste":
   alert("Hey Celeste!");
   break;
  case devName:
   alert("Welcome Developer. It's been a while.");
   break;
  default:
   alert("Hello there ", incomingUser , "!");
 }