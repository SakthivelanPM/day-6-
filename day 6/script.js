class UberPriceCalculator {
    constructor(distance, duration) {
      this.distance = distance;
      this.duration = duration;
    }
  
    calculatePrice() {
      const baseFare = 2.5;
      const distanceRate = 1.5;
      const durationRate = 0.2;
  
      const distanceCost = this.distance * distanceRate;
      const durationCost = this.duration * durationRate;
      const totalCost = baseFare + distanceCost + durationCost;
  
      return totalCost.toFixed(2); // Round to 2 decimal places
    }
  }
  
  // Example usage
  const ride = new UberPriceCalculator(20, 60); // 20 miles distance, 60 minutes duration
  const price = ride.calculatePrice();
  console.log("Total Price: $" + price);