---
sidebar_position: 3
---

# Sound files

Example of a file that defines a single sound:

```lua
sounds = {
  {
    frequency = 500,
    sustain = 0.3,
    waveform = "triangle",
  }
}
```

The following fields can be used to describe a sound:

- attack (in seconds)
- decay (in seconds)
- sustain (in seconds)
- sustainPunch (in seconds)
- amplification
- tremoloDepth
- tremoloFrequency (in hertz)
- frequency (in hertz)
- frequencyDeltaSweep
- frequencyJump1Onset
- frequencyJump2Onset
- frequencyJump1Amount
- frequencyJump2Amount
- frequencySweep
- vibratoFrequency (in hertz)
- vibratoDepth (in hertz)
- flangerOffset
- flangerOffsetSweep
- repeatFrequency
- waveform ("sine", "triangle", "sawtooth", "square", "tangent", "whistle", "breaker", "whitenoise", "pinknoise", "brownnoise")

:::tip

Use [jfxr] for sound creation. A script then transforms the resulting jfxr link (for example [this link]) into a table consumable by PewPew Live.

See this [example].

:::

[jfxr]: https://pewpew.live/jfxr/index.html
[this link]: https://pewpew.live/jfxr/index.html#%7B%22_version%22%3A1%2C%22_name%22%3A%22Pickup%2Fcoin%206%22%2C%22_locked%22%3A%5B%5D%2C%22sampleRate%22%3A44100%2C%22attack%22%3A0%2C%22sustain%22%3A0.1%2C%22sustainPunch%22%3A60%2C%22decay%22%3A0.14%2C%22tremoloDepth%22%3A0%2C%22tremoloFrequency%22%3A10%2C%22frequency%22%3A700%2C%22frequencySweep%22%3A0%2C%22frequencyDeltaSweep%22%3A0%2C%22repeatFrequency%22%3A0%2C%22frequencyJump1Onset%22%3A25%2C%22frequencyJump1Amount%22%3A75%2C%22frequencyJump2Onset%22%3A66%2C%22frequencyJump2Amount%22%3A0%2C%22harmonics%22%3A0%2C%22harmonicsFalloff%22%3A0.5%2C%22waveform%22%3A%22square%22%2C%22interpolateNoise%22%3Atrue%2C%22vibratoDepth%22%3A0%2C%22vibratoFrequency%22%3A10%2C%22squareDuty%22%3A90%2C%22squareDutySweep%22%3A0%2C%22flangerOffset%22%3A6%2C%22flangerOffsetSweep%22%3A0%2C%22bitCrush%22%3A16%2C%22bitCrushSweep%22%3A0%2C%22lowPassCutoff%22%3A22050%2C%22lowPassCutoffSweep%22%3A0%2C%22highPassCutoff%22%3A0%2C%22highPassCutoffSweep%22%3A0%2C%22compression%22%3A1%2C%22normalization%22%3Atrue%2C%22amplification%22%3A100%7D
[example]: https://github.com/jyaif/ppl-utils/blob/cd0607d3448915319ce9abc1f6019287566f6bdd/content/levels/useful_helpers/helpers/boxes/cannon_pickup_sound.lua#L3
