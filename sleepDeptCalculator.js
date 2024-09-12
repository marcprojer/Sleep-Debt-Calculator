const getSleepHours = (day) => {
    // numbers = amount of lseep per day
    switch (day) {
      case "monday":
        return 8;
        break;
      case "tuesday":
        return 8;
        break;
      case "wednesday":
        return 8;
        break;
      case "thursday":
        return 9;
        break;
      case "friday":
        return 10;
        break;
      case "saturday":
        return 8;
        break;
      case "sunday":
        return 8;
        break;
      default:
        return "Error!";
    }
  };
  
  const getActualSleepHours = () => {
    return (
      getSleepHours("monday") +
      getSleepHours("tuesday") +
      getSleepHours("wednesday") +
      getSleepHours("thursday") +
      getSleepHours("friday") +
      getSleepHours("saturday") +
      getSleepHours("sunday")
    );
  };
  
  /*
  console.log(getSleepHours("monday"));
  console.log(getActualSleepHours());
  */

  // change idealHours if you need less sleep per day.
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours) {
      console.log("You've got the perfect amount of sleep!");
    } else if (actualSleepHours > idealSleepHours) {
      console.log(
        "You've got " +
          (actualSleepHours - idealSleepHours) +
          " more hours of sleep this week than needed!"
      );
    } else if (actualSleepHours < idealSleepHours) {
      console.log(
        "You should get some rest because you've slept " +
          (idealSleepHours - actualSleepHours) +
          " hours less than you should have this week."
      );
    } else {
      console.log("Error! Something went wrong, check your code.");
    }
  };
  
  calculateSleepDebt();
  