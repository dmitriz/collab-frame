/**
 * Gracefully exit a focus block or task session.
 */
function initExitCue({ summary = "", timeSpent = null }) {
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