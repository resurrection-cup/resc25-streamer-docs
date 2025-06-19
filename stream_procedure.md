# Stream Procedure
Since we have many animations and different scenes, please pay attention to the order of running the stream.
## App opening sequence
> [!IMPORTANT]
> Always follow this exact sequence to open apps before starting the stream, because one wrong order and you will need to do a lot of source refresh
1. osu! client
2. tosu
3. Overlay Controller
4. OBS
## Operating the Overlay Controller
- Left click on slot: Active slot
- Right click on slot: Remove picked/banned map
- Reset button: basically Panic button but for overlay
- Stream Title & Stream Ping: your classic copy pasta
- Dropdowns: Choose winner for the pick (or change to Pick to remove winner)
## General stream running procedure
- Before stream starts, in Overlay Controller:
    - Turn **ON** `Beatmap Details` on top right
    - Choose correct Stage
    - Choose Match ID to stream
    - Change Stream Title and ready for Stream Ping
- 5 minutes before match starts, ping stream in the correct channel with correct role
- On stream start, stays on the `STARTING - Match` scene until countdown reaches 0, then transition to `INTERMISSION` for casters to do the intro. This can be flexible depends on what the casters are talking about.
- Upon going to ban phase (you should be monitoring in-game chat during the stream), transition from `INTERMISSION` to `Mappool`
    - Before transitioning, in Overlay Controller, select First Ban slot
- Select banned maps in order (wait for the transition to finish for each slots)
- Go to first pick slot, then click on the slot and choose picked map (there will be map stats animation so make sure to time this right)
- Stay on Mappool scene until first client finishes loading the map (using Studio Mode in OBS to monitor both Gameplay and Mappool scenes)
- Repeat this process until match finishes
- Upon having a match winner, go to the **corresponding winner scene** (Red or Blue) 
- If you are streaming back-to-back matches, go back to `INTERMISSION` for the casters to do the closing words first, then go to `STARTING - Match` scene for countdown. Else, go to `Ending` scene and end the stream