const uploadInput = document.getElementById("videoUpload");
const container = document.getElementById("videoContainer");

uploadInput.addEventListener("change", () => {
  const file = uploadInput.files[0];
  if (!file) return;

  const videoURL = URL.createObjectURL(file);

  const video = document.createElement("video");
  video.src = videoURL;
  video.controls = true;

  container.prepend(video);
});
