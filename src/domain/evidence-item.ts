export type EvidenceType =
  | "ADR_CONFLICT"
  | "OPEN_INCIDENT"
  | "MISSING_APPROVAL";

export interface EvidenceItem {
  id: string;
  type: EvidenceType;
  title: string;
  source: "JIRA" | "CONFLUENCE" | "JSM" | "TEAMWORK_GRAPH";
  sourceId: string;
  description: string;
  blocking: boolean;
}