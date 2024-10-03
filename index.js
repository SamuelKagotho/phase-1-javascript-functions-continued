function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
  }

  let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
  }

  let wrapAdjective = function(par="*") {
    return function(innerFunction="special") {
      return `You are ${par}${innerFunction}${par}!`
    }
  }



