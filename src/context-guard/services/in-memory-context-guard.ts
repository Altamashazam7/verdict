import type { ContextGuard } from "../contracts/context-guard";
import type { EvidenceItem } from "../../domain/evidence-item";
import type { RemediationAction } from "../../domain/remediation-action";
import type { VerdictAssessment } from "../../domain/verdict-assessment";

const KAN_4_EVIDENCE: readonly EvidenceItem[] = [
  {
    id: "adr-conflict",
    type: "ADR_CONFLICT",
    title: "ADR Conflict",
    source: "CONFLUENCE",
    sourceId: "KAN-4-ADR-CONFLICT",
    description: "A conflicting architecture decision has been identified.",
    blocking: true,
  },
  {
    id: "open-p1-incident",
    type: "OPEN_INCIDENT",
    title: "Open P1 Incident",
    source: "JSM",
    sourceId: "KAN-4-P1-INCIDENT",
    description: "An open P1 incident is associated with this issue.",
    blocking: true,
  },
  {
    id: "missing-security-approval",
    type: "MISSING_APPROVAL",
    title: "Missing Security Approval",
    source: "JIRA",
    sourceId: "KAN-4-SECURITY-APPROVAL",
    description: "The required security approval has not been recorded.",
    blocking: true,
  },
];

const KAN_4_REMEDIATION_ACTIONS: readonly RemediationAction[] = [
  {
    id: "resolve-adr-conflict",
    title: "Resolve the ADR conflict",
    description: "Update or reconcile the conflicting architecture decision.",
  },
  {
    id: "resolve-p1-incident",
    title: "Resolve the P1 incident",
    description: "Resolve the open P1 incident before proceeding with approval.",
  },
  {
    id: "obtain-security-approval",
    title: "Obtain security approval",
    description: "Record the required security approval on the issue.",
  },
];

export class InMemoryContextGuard implements ContextGuard {
  public async evaluate(issueKey: string): Promise<VerdictAssessment> {
    if (issueKey === "KAN-4") {
      return {
        issueKey,
        status: "BLOCKED",
        evidence: KAN_4_EVIDENCE.map((item) => ({ ...item })),
        remediationActions: KAN_4_REMEDIATION_ACTIONS.map((action) => ({
          ...action,
        })),
        evaluatedAt: new Date().toISOString(),
      };
    }

    return {
      issueKey,
      status: "INSUFFICIENT_EVIDENCE",
      evidence: [],
      remediationActions: [
        {
          id: "collect-assessment-evidence",
          title: "Collect assessment evidence",
          description:
            "Provide linked Jira, Confluence, or JSM evidence before assessing this issue.",
        },
      ],
      evaluatedAt: new Date().toISOString(),
    };
  }
}
