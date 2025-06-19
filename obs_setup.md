# OBS Setup
You know the drill.
## Initial setup
- Import Scene Collection
- Config OBS Stream profile as follow:
> - Stream: make sure `Enable Enhanced Broadcasting` is **disabled**
> - Output/Streaming: 6k constant bitrate, Low Latency
> - Output/Recording: 10k constant bitrate, High Quality
> - Output/Audio: Track 1 bitrate 128
> - Audio/Advanced: set Monitoring Device to your **main audio output**
> - Video: 1080p60
## Audio capture setup
> [!NOTE]
> If you can optimize the audio setup flow, please let me know! I'm not the best at this and things could break (audio-wise)

There will be 3 audio scenes already made - Gameplay, Casters and BGM. You will need to change the capture devices in Gameplay and Casters.

For Gameplay audio, make sure that the source `audio - osu! gameplay` is set to the osu!cuttingedge client you are running

For Casters audio:
- Make sure source `Discord` is, well, capturing your Discord audio
- `Streamer Mic` can be change as you see fit (only if you have Commentator role, else remove this source)
## ASS Setup
This part is ASS (quite literally). It just works half of the time, then the other half is when things randomly breaks. ASS is mainly used for smooth audio transitioning between scenes (BGM and Gameplay audio mostly).
- Import ASS backup file from `./OBS files/ASS config`
- Check for stuff and see if it works or not. If it doesn't, ~~glhf~~ let me (hoaq) know
