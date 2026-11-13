import type { VerdictAssessment } from "../../domain/verdict-assessment";

export interface ContextGuard {
  evaluate(issueKey: string): Promise<VerdictAssessment>;
}
