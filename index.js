// Define the saturdayFun function
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Now you can use the saturdayFun function
  console.log(saturdayFun()); // This Saturday, I want to roller-skate!
  console.log(saturdayFun("bathe my dog")); // This Saturday, I want to bathe my dog!

  function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  }
  
  const mondayHome = "work from home";
  console.log(mondayWork());               // This Monday, I will go to the office!
  console.log(mondayWork(mondayHome));     // This Monday, I will work from home!
  console.log(mondayHome);      

  


  function wrapAdjective(wrapper = "*") {
    return function(adjective) {
      return `You are ${wrapper}${adjective}${wrapper}!`;
    };
  }
  