import type { ContextGuard } from "../context-guard/contracts/context-guard";
import type { VerdictAssessment } from "../domain/verdict-assessment";

export class VerdictEngine {
  public constructor(private readonly contextGuard: ContextGuard) {}

  public evaluate(issueKey: string): Promise<VerdictAssessment> {
    return this.contextGuard.evaluate(issueKey);
  }
}
