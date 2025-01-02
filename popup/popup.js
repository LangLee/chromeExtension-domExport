// Function to load saved configuration
function loadConfiguration() {
    document.getElementById('targetDomId').addEventListener('input', saveConfiguration);
    document.getElementById('titleDomId').addEventListener('input', saveConfiguration);
    chrome.storage.sync.get(['targetDomId', 'titleDomId'], (result) => {
        console.log('Loaded configuration:', result);
        if (result?.targetDomId) {
            document.getElementById('targetDomId').value = result.targetDomId;
        } 
        if (result?.titleDomId) {
            document.getElementById('titleDomId').value = result.titleDomId;
        }
    });
}

// Function to save configuration
function saveConfiguration() {
    const targetDomId = document.getElementById('targetDomId').value;
    const titleDomId = document.getElementById('titleDomId').value;

    chrome.storage.sync.set({ targetDomId, titleDomId }, () => {
        console.log('Configuration saved:', { targetDomId, titleDomId });
    });
}

// Load configuration when the popup is opened
document.addEventListener('DOMContentLoaded', loadConfiguration);
