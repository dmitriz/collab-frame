/**
 * Initialize a timeboxed work session based on the "plan-now" protocol.
 */
function initPlanNow({ topic = "unspecified", duration = 60 }) {
  if (typeof duration !== 'number' || duration <= 0) {
    console.error('Error: duration must be a positive number');
    duration = 60; // Reset to default if invalid
  }

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