// Handler.
function analyticsHandler(event) {
  console.log(event);
}

// Add the listener.
Flourish.addAnalyticsListener(analyticsHandler)