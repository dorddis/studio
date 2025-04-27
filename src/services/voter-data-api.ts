/**
 * Represents a row of voter data.
 */
export interface VoterDataRow {
  /**
   * The Assembly Constituency number.
   */
  acNo: string;
  /**
   * The Assembly Constituency name.
   */
acName: string;
  /**
   * The part number.
   */
  partNo: string;
  /**
   * The number of voters.
   */
  noOfVoters: number;
  /**
   * Cumulative count (unclear what this represents).
   */
  cumulative: string;
  /**
   * The sample index.
   */
  sampleIndex: string;
}

/**
 * Asynchronously retrieves sample voter data for a given state and constituency.
 *
 * @param state The state to filter by.
 * @param constituency The constituency to filter by.
 * @returns A promise that resolves to an array of VoterDataRow objects.
 */
export async function getVoterData(
  state: string,
  constituency: string
): Promise<VoterDataRow[]> {
  // TODO: Implement this by calling an API.

  // Mock data for demonstration
  const mockData: VoterDataRow[] = Array.from({ length: 8 }, (_, i) => ({
    acNo: `${123 + i}`,
    acName: `Example Constituency ${i + 1}`,
    partNo: `${456 + i}`,
    noOfVoters: 1000 + i * 50,
    cumulative: `${5000 + i * 50}`,
    sampleIndex: `${789 + i}`,
  }));

  return mockData;
}
