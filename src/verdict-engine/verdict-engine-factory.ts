import { InMemoryContextGuard } from "../context-guard/services/in-memory-context-guard";
import { VerdictEngine } from "./verdict-engine";

export function createVerdictEngine(): VerdictEngine {
  const contextGuard = new InMemoryContextGuard();

  return new VerdictEngine(contextGuard);
}
