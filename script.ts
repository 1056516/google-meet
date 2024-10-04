let localStream: MediaStream;
const localVideo = document.getElementById('localVideo') as HTMLVideoElement;
const remoteVideo = document.getElementById('remoteVideo') as HTMLVideoElement;
const meetingContainer = document.getElementById('meeting-container');

async function startLocalStream(): Promise<void> {
    localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    localVideo.srcObject = localStream;
}

document.getElementById('createBtn')!.onclick = async () => {
    alert('Meeting created! (No real functionality)');
    await startLocalStream();
    meetingContainer.classList.remove('hidden');
};

document.getElementById('joinBtn')!.onclick = () => {
    alert('Joining meeting... (No actual joining functionality)');
    meetingContainer.classList.remove('hidden');
};

startLocalStream();
