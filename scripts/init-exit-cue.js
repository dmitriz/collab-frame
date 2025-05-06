/**
 * Ends a focus block or task session and returns session details.
 *
 * @param {Object} [options] - Optional session details.
 * @param {string} [options.summary] - Optional summary of the session.
 * @param {number|null} [options.timeSpent] - Optional time spent in minutes.
 * @returns {{ endTime: Date, summary: string, timeSpent: number|null, status: string }} An object containing the session end time, summary, time spent, and a status of "closed".
 */
function initExitCue({ summary = "", timeSpent = null }) {
  if (timeSpent !== null && (typeof timeSpent !== 'number' || timeSpent < 0)) {
    console.error('Error: timeSpent must be a positive number');
    timeSpent = null;
  }

  const endTime = new Date();
  console.log(`✅ Exit cue triggered`);
  console.log(`Session ended at: ${endTime.toISOString()}`);
  if (summary) console.log(`Summary: ${summary}`);
  if (timeSpent) console.log(`Time spent: ${timeSpent} min`);

  return {
    endTime,
    summary,
    timeSpent,
    status: "closed"
  };
}

if (require.main === module) {
  initExitCue({ summary: "Initial test run", timeSpent: 45 });
}

module.exports = { initExitCue };