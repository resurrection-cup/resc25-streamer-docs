# osu! Stream Client Setup
Below are step-by-step guide on setting up RESC25 streaming client.
## Prerequisite
- A fresh installation of osu! cutting-edge
- All osu! related files found in the Streamer Kit
## Step-by-step guide
Get `tournament.cfg` and `Skins` folder from `RESC25-StreamerKit\osu files\` and paste to the new osu! installation
> [!WARNING]
> RESC25 stream setup uses 1080 client height, which requires monitor with at least 2560x1440 resolution. If you only have a 1080P monitor with a NVIDIA GPU, this resolution can be achieved using DSR.

Temporarily change file name of `tournament.cfg` to anything to disable tournament mode

Open osu! client in normal mode and change the following settings:
> - Login with your credentials
> - Release stream: Cutting Edge
> - Detail settings: disable everything except **Snaking sliders**
> - Seasonal background: Never
> - Background dim: `85%` and enable **don't change during breaks**
> - Score meter size: 1.25
> - Output device: anything **other than your main audio output**
> - Audio compatibility mode: `ON`
> - Skin: `User`
> - Ignore all beatmap skins: `ON`
> - Automatic cursor size: `ON`
> - all other settings unchanged


Import all maps when you are in normal client mode to avoid messing up `osu!.db` and make sure all maps loaded correctly

Upon finishing all steps above, re-enable tournament mode (by reverting name change of `tournament.cfg` that you did earlier)

It's recommended that **before** opening stream client, set your 2nd monitor as the **main** monitor, then open client and change main monitor back to your prefered one. This will make sure the client doesn't overlap with anything need on the main monitor (usually OBS and *Overlay Controller*)