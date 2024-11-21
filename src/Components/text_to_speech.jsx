function TextToSpeech() {
  function handleClick() {
    let paragraph = ` what   Yeah, I'm gonna take my horse to the old town road
    `;
    playSpeech(paragraph);
  }

  function playSpeech(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const selectedVoice = voices.find(
      (voice) => voice.name.toLowerCase().includes("male") // Use "female" for a female voice
    );
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    utterance.lang = "en-ca"; // Language
    utterance.pitch = 0.7; // Pitch (0.1 to 2)
    utterance.rate = 0.8; // Rate (0.1 to 10)
    utterance.volume = 1; // Volume (0 to 1)

    window.speechSynthesis.speak(utterance);
  }
  return (
    <>
      <button
        className="click-button"
        onClick={() => {
          handleClick();
        }}
      >
        Click
      </button>
    </>
  );
}

export default TextToSpeech;
