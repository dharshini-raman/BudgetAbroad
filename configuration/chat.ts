import { OWNER_NAME, AI_NAME } from "./identity";
import { calculateBudget, generateItinerary, suggestCapitalOnePerks } from "./travelUtils";

export const INITIAL_MESSAGE: string = `🌍✈️ Hey there, traveler! Welcome to BudgetAbroad! 💳🚀  
I'm BudgetAbroad, your Capital One travel assistant. Let’s plan your next adventure while maximizing your savings and travel perks!  
Where are we headed? 🗺️✨`;

export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry, I'm having trouble generating a response. Please try again later.`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `[WORD BREAK MESSAGE]`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response

// ✈️ 🌍 Function to Handle User Queries
export function handleUserQuery(userInput: string): string {
  const lowerCaseInput = userInput.toLowerCase();

  // 💰 Handle Budget Queries
  if (lowerCaseInput.includes("budget for")) {
    const destination = userInput.replace(/budget for/i, "").trim();
    return calculateBudget(destination, "mid"); // Defaulting to "mid-range"
  }

  // 🗺️ Handle Itinerary Requests
  if (lowerCaseInput.includes("plan my trip to")) {
    const destination = userInput.replace(/plan my trip to/i, "").trim();
    return generateItinerary(destination, 5); // Defaulting to 5-day itineraries
  }

  // 💳 Handle Capital One Perks Queries
  if (lowerCaseInput.includes("capital one perks for")) {
    const destination = userInput.replace(/capital one perks for/i, "").trim();
    return suggestCapitalOnePerks(destination);
  }

  return "❓ Not sure what you're asking! Try:\n- `Budget for Tokyo`\n- `Plan my trip to Paris`\n- `Capital One perks for Dubai`";
}
