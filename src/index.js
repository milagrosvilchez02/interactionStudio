const button = document.getElementById("button");

const url = "https://axxonconsultingsa.us-5.evergage.com/api2/event/testmv";

const rawdata = { action: "hello world", user: { id: "testuser" } };

const handlePostData = async () => {
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(rawdata),
  }).then((res) => {});
};

button.addEventListener("click", handlePostData);
