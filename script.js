let localStream;
const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');
const meetingContainer = document.getElementById('meeting-container');
const currentMeetingId = document.getElementById('currentMeetingId');

// Get access to the user's camera and microphone
async function startLocalStream() {
    localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    localVideo.srcObject = localStream;
}

// Handle actions for creating and joining meetings
document.getElementById('createBtn').onclick = async () => {
    const response = await fetch('/create_meeting');
    const data = await response.json();

    currentMeetingId.innerText = data.meetingId;
    meetingContainer.classList.remove('hidden');
    await startLocalStream();
};

document.getElementById('joinBtn').onclick = () => {
    const meetingIdInput = document.getElementById('meetingId').value;
    if (meetingIdInput) {
        currentMeetingId.innerText = meetingIdInput;
        meetingContainer.classList.remove('hidden');
        startLocalStream();
    } else {
        alert("Please enter a Meeting ID.");
    }
};

// Initialize the local stream on page load
startLocalStream();
