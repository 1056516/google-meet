let localStream;
const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');
const meetingContainer = document.getElementById('meeting-container');

// Get access to the user's camera and microphone
async function startLocalStream() {
    localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    localVideo.srcObject = localStream;
}

// Handle actions for creating and joining meetings
document.getElementById('createBtn').onclick = async () => {
    alert('Meeting created! (No real functionality)');
    await startLocalStream();
    meetingContainer.classList.remove('hidden');
};

document.getElementById('joinBtn').onclick = () => {
    alert('Joining meeting... (No actual joining functionality)');
    meetingContainer.classList.remove('hidden');
};

// On page load, start the local stream
startLocalStream();
