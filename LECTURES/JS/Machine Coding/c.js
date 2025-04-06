function trafficLightAction(color) {
    // Return "Stop",let trafficLight = "green";
     switch (color.toLowerCase()) {
          case 'red':
              return 'Stop';
          case 'yellow':
              return 'Slow Down';
          case 'green':
              return 'Go';
          case 'blue':
              return 'Invalid color';
          
      }
    }
    console.log(color);
  trafficLightAction("Red")
  

  