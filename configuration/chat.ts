import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `🌍✈️ Hey there, traveler! Welcome to BudgetAbroad! 💳🚀  
I'm BudgetAbroad, your Capital One travel assistant. Let’s plan your next adventure while maximizing your savings and travel perks!  
Where are we headed? 🗺️✨`;

export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry, I'm having trouble generating a response. Please try again later.`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `[WORD BREAK MESSAGE]`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
