// 📂 travelUtils.ts
// 🏝️ Travel Utilities for BudgetAbroad ✈️💳
// This module provides travel cost estimates, multi-day itineraries, and Capital One perks.

// Helper function to normalize user input (case-insensitive)
function formatDestination(destination: string): string {
    return destination.trim().toLowerCase();
  }
  
  // 1️⃣ 💰 Travel Cost Estimator - Get a daily budget range based on destination & style
  export function calculateBudget(destination: string, style: "budget" | "mid" | "luxury"): string {
    const budgetData: Record<string, { budget: number; mid: number; luxury: number }> = {
      "paris": { budget: 60, mid: 120, luxury: 250 },
      "tokyo": { budget: 50, mid: 100, luxury: 200 },
      "new york": { budget: 70, mid: 150, luxury: 300 },
      "london": { budget: 65, mid: 130, luxury: 270 },
      "bangkok": { budget: 30, mid: 80, luxury: 180 },
      "dubai": { budget: 100, mid: 200, luxury: 500 },
    };
  
    const formattedDestination = formatDestination(destination);
  
    if (!budgetData[formattedDestination]) {
      return `❌ Sorry, budget data for **${destination}** is currently unavailable.`;
    }
  
    return `📍 **Estimated Daily Budget for ${destination}:**  
    - 🎒 **Backpacker:** $${budgetData[formattedDestination].budget}/day  
    - ✨ **Mid-Range:** $${budgetData[formattedDestination].mid}/day  
    - 🌟 **Luxury:** $${budgetData[formattedDestination].luxury}/day  
    💡 These estimates cover food, transport, and accommodation!`;
  }
  
  // 2️⃣ 🗺️ Generate Multi-Day Travel Itineraries
  export function generateItinerary(destination: string, days: number): string {
    const samplePlans: Record<string, string[]> = {
      "tokyo": [
        "🏯 **Day 1:** Explore Asakusa, eat ramen at Ichiran 🍜",
        "🎮 **Day 2:** Akihabara tech stores & Ghibli Museum",
        "🌲 **Day 3:** Day trip to Mount Fuji 🏔️",
        "🏮 **Day 4:** Shinjuku nightlife & Robot Restaurant 🤖",
        "🍣 **Day 5:** Sushi breakfast at Tsukiji Market 🎏"
      ],
      "paris": [
        "🗼 **Day 1:** Eiffel Tower & Louvre Museum 🎨",
        "🥐 **Day 2:** Bakery tour & Versailles Palace",
        "🎭 **Day 3:** Opera night & Seine River cruise",
        "🏰 **Day 4:** Montmartre artistic district & Sacré-Cœur",
        "🛍️ **Day 5:** Champs-Élysées shopping & Disneyland Paris"
      ],
      "bangkok": [
        "🌅 **Day 1:** Grand Palace & Wat Pho (Reclining Buddha) 🏯",
        "🥢 **Day 2:** Floating markets & street food tour 🍢",
        "🏖️ **Day 3:** Ayutthaya ancient temples & river cruise",
        "🍹 **Day 4:** Rooftop bars & Muay Thai experience 🥊",
        "🏝️ **Day 5:** Day trip to Pattaya or Koh Larn beach"
      ]
    };
  
    const formattedDestination = formatDestination(destination);
  
    if (!samplePlans[formattedDestination]) {
      return `🚧 Custom itinerary for **${destination}** coming soon! 🚀`;
    }
  
    // Ensure the number of days requested doesn't exceed available data
    const limitedItinerary = samplePlans[formattedDestination].slice(0, Math.min(days, samplePlans[formattedDestination].length));
  
    return `🗺️ **${days}-Day Itinerary for ${destination}:**\n${limitedItinerary.join("\n")}`;
  }
  
  // 3️⃣ 💳 Fake Capital One Travel API - Showcase Exclusive Perks
  export function suggestCapitalOnePerks(destination: string): string {
    return `💳 **Capital One Travel Perks for ${destination}:**  
    - ✈️ **Flight Price Drop Protection** (Book confidently!)  
    - 🏨 **5% Cashback on Hotels & Rentals** with Capital One Travel  
    - 🌟 **Free Lounge Access** at ${destination}'s major airports  
    - 🎟️ **Discounts on tours & activities** with your Capital One card  
    💡 **Tip:** Use Capital One Miles to cover travel expenses at **1 cent per mile!**`;
  }
  