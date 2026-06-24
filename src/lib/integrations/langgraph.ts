import Anthropic from "@anthropic-ai/sdk";
import { ChatOpenAI } from "@langchain/openai";
import { ChatAnthropic } from "@langchain/anthropic";
import { PromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { RunnableSequence } from "@langchain/core/runnables";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const openai = new ChatOpenAI({
  modelName: "gpt-4o",
  apiKey: process.env.OPENAI_API_KEY,
});

const claude = new ChatAnthropic({
  modelName: "claude-3-5-sonnet-20240620",
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export { anthropic, openai, claude, PromptTemplate, StringOutputParser, RunnableSequence };
