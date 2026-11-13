import { VerdictStatus } from "./verdict-status";
import { EvidenceItem } from "./evidence-item";
import { RemediationAction } from "./remediation-action";

export interface VerdictAssessment {
  issueKey: string;
  status: VerdictStatus;
  evidence: EvidenceItem[];
  remediationActions: RemediationAction[];
  evaluatedAt: string;
}