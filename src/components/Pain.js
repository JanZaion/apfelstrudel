import * as Tone from 'tone';
import { useState } from 'react';

Tone.Transport.bpm.value = 125;

const Pain = () => {
  const [transportCount, setTransportCount] = useState(0);
  const [timetCount, setTimetCount] = useState(0);
  const [transportSeconds, setTransportSeconds] = useState(0);
  const [measure, setMeasure] = useState(0);

  const l = new Tone.Loop((time) => {
    setTransportCount(Tone.Transport.position);
    setTimetCount(time);
    setTransportSeconds(Tone.Transport.seconds);
    setMeasure(Tone.Time('8n').toSeconds());
  }, '8n');

  const suffering = new Tone.Player(require('./bass_4.opus')).toDestination();
  const suffering2 = new Tone.Player(require('./bass_4.mp3')).toDestination();
  const suffering3 = new Tone.Player(require('./bass_4.wav')).toDestination();
  const suffering4 = new Tone.Player(require('./bass_4.ogg')).toDestination();
  const suffering5 = new Audio(require('./bass_4.opus'));

  return (
    <>
      <button onClick={() => suffering.start()}>Does opus make sound?</button>
      <button onClick={() => suffering2.start()}>Does mp3 make sound?</button>
      <button onClick={() => suffering3.start()}>Does wav make sound?</button>
      <button onClick={() => suffering4.start()}>Does ogg make sound?</button>
      <button onClick={() => suffering5.play()}>Does opus def player make sound?</button>
      <br />
      <button
        onClick={() => {
          Tone.start();
          Tone.Transport.start();
          l.start();
        }}
      >
        Start the pain
      </button>
      <br />
      <div>transport: {transportCount}</div>
      <div>time: {timetCount}</div>
      <div>transport seconds: {transportSeconds}</div>
      <div>measure: {measure}</div>
      <div>BPM: {Tone.Transport.bpm.value}</div>
    </>
  );
};

export default Pain;
