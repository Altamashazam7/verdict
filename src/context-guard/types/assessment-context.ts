import type { EvidenceItem } from "../../domain/evidence-item";

export interface AssessmentContext {
  issueKey: string;
  evidence: EvidenceItem[];
}
