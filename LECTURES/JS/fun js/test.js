function distributeGifts(totalGifts, friends) {
  // If not enough gifts for each friend to get at least one
 let gifts = 0
 for(let i = 0; i < friends; i++){
  if(totalGifts > 0){
    gifts++;
    totalGifts--;
  }
 }
 return gifts
}

// Example usage:
console.log(distributeGifts(10, 5)); // Output: 2