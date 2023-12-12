document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Add your logic to handle the form submission, e.g., send an email or store the data
    alert("Email Sent!");
});

// script.js

// Function to create buttons and set their links
function createButtons(projectId, googlePlayLink, appStoreLink) {
    const projectInfo = document.getElementById(projectId);

    // Create Google Play button
    const googlePlayBtn = document.createElement('a');
    googlePlayBtn.href = googlePlayLink;
    googlePlayBtn.classList.add('btn', 'play-btn');
    googlePlayBtn.textContent = 'Google Play';

    // Create App Store button
    const appStoreBtn = document.createElement('a');
    appStoreBtn.href = appStoreLink;
    appStoreBtn.classList.add('btn', 'app-store-btn');
    appStoreBtn.textContent = 'App Store';

    // Append buttons to project info
    projectInfo.appendChild(googlePlayBtn);
    projectInfo.appendChild(appStoreBtn);
}

// Call the function to create buttons with project IDs and links
createButtons('project1', 'https://play.google.com/store/apps/details?id=com.superbekala.DeliveryApp&pcampaignid=web_share', 'https://apps.apple.com/eg/app/sb-delivery/id1513473067');

createButtons('project2', 'https://play.google.com/store/apps/details?id=com.superbekala.android.vendorapp&pcampaignid=web_share', 'https://apps.apple.com/eg/app/sb-vendors/id1484285196');

createButtons('project3', 'https://play.google.com/store/apps/details?id=com.superbekala.adminapp&pcampaignid=web_share', 'https://apps.apple.com/eg/app/sb-admin/id1498961681');

