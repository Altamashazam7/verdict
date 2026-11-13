import { createVerdictEngine } from "../verdict-engine-factory";

describe("VerdictEngine", () => {
  it("returns a blocked assessment for KAN-4 with the required evidence", async () => {
    const verdictEngine = createVerdictEngine();
    const assessment = await verdictEngine.evaluate("KAN-4");

    expect(assessment.issueKey).toBe("KAN-4");
    expect(assessment.status).toBe("BLOCKED");
    expect(assessment.evidence).toHaveLength(3);
    expect(
      assessment.evidence.map((evidenceItem) => evidenceItem.title),
    ).toEqual(
      expect.arrayContaining([
        "ADR Conflict",
        "Open P1 Incident",
        "Missing Security Approval",
      ]),
    );
    expect(
      assessment.evidence.map((evidenceItem) => evidenceItem.source),
    ).toEqual(["CONFLUENCE", "JSM", "JIRA"]);
    expect(
      assessment.evidence.every((evidenceItem) => evidenceItem.blocking),
    ).toBe(true);
  });

  it("returns insufficient evidence for an unknown issue", async () => {
    const verdictEngine = createVerdictEngine();
    const assessment = await verdictEngine.evaluate("KAN-999");

    expect(assessment.issueKey).toBe("KAN-999");
    expect(assessment.status).toBe("INSUFFICIENT_EVIDENCE");
    expect(assessment.evidence).toEqual([]);
  });
});
