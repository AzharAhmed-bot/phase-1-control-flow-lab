function scuberGreetingForFeet(ride){
  if(ride<=400){
    return'This one is on me!';
  }
  else if(ride>2000 && ride<2500){
    return 'I will gladly take your thirty bucks.';
  }
 else if(ride>=2500) {
  return 'No can do.';
 }
  // Write your code here!
}
function ternaryCheckCity(city){
  const cityMessage = city==="NYC" ? 'Ok, sounds good.': 'No go.';
  return cityMessage;
 }
 console.log(ternaryCheckCity("NYC"));
 function switchOnCharmFromTip(tip){
  switch(tip){
      case'generous':
          return "Thank you so much.";
          break;
      case 'not as generous':
          return "Thank you.";
          break;
      default :
       return "Bye.";
  }
}
  onsole.log(switchOnCharmFromTip("Thank you for everything"));