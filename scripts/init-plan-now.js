/**
 * Starts a timeboxed work session using the "plan-now" protocol.
 *
 * @param {Object} [options] - Optional session configuration.
 * @param {string} [options.topic="unspecified"] - The topic or focus of the session.
 * @param {number} [options.duration=60] - Duration of the session in minutes.
 * @returns {{topic: string, duration: number, startTime: Date, status: string}} An object representing the active session.
 */
function initPlanNow({ topic = "unspecified", duration = 60 }) {
  const startTime = new Date();
  console.log(`⏳ Plan-Now session started`);
  console.log(`Topic: ${topic}`);
  console.log(`Duration: ${duration} min`);
  console.log(`Start time: ${startTime.toISOString()}`);

  return {
    topic,
    duration,
    startTime,
    status: "active"
  };
}

if (require.main === module) {
  initPlanNow({ topic: "focus", duration: 45 });
}

module.exports = { initPlanNow };