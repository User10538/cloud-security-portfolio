async function logSecurityEvent() {

  try {

    const res = await fetch(
      "https://za4ajp5sa6.execute-api.us-east-1.amazonaws.com/security-log",
      {
        method: "POST"
      }
    );

    const data = await res.json();

    console.log("Security event logged:", data);

  } catch (err) {

    console.error("Security logging failed:", err);

  }

}

// Automatically run on page load
logSecurityEvent();
