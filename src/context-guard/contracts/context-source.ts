import type { AssessmentContext } from "../types/assessment-context";

export interface ContextSource {
  collect(issueKey: string): Promise<AssessmentContext>;
}
