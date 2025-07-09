Title: Flipper Ultimate Extension Board
Author: Riston Rodrigues (name or Slack username)
Description:This is a  DIY ultimate Flipper extension board with capabilities incorporating those of most available extension boards from rabbit labs and more, at a fraction of the cost. it takes all those boards available and integrates them into one offering capabilites surpasing all at fraction of cost.
Created at: 2025-05-23
Total time spent: ~28 hrs



Day 1: May 23
Finished research. Confirmed that i can creata a dev board that combines the features of different Flipper extension boards at a much lower cost than commercial options.
followed all available tutorials reserched if itsd possibile 
tasks i did-
Created the BOM
started  schematic, finished it came to know parts i need modules dont have schermatic or footprints
Searched for parts and vendors (total cost ~ $40) this doesnt include the pcb and case as its via pritnting legion
usual indian vendor stopped accepting HCB card — found alternatives, conforemed 
confirmed seed studio price with shipping

Time spent: 4.5 hrs


day 2: June 2
Decided  against full PCBA due to customs issues in India. using pcba will increase board cost to 100 pcb + other modules not done , problem with cxustoms more than value of actual board.

tasks done by me-
Switched to using whole modules- easier but creating footprints harder
Created custom footprints for NRF24, CC1101, ESP32 WROOM today 
BOM revised to ~$50 ± $10 for most 
added switches to control module power via Flipper GPIO to pcb base diagram

Time spent: 6 hrs 

day 3: June 4
 Improved footprints and schematic- changed the fotprints found out problems when i added them to schemdeatic and pcb so whole dimension itertating changing till needed
Learned custom footprint + component linking in EasyEDA: how to create component footprints scratch head scratching process, but im ggood at it now 
Found another vendor with parts in stock for esp with externa anteena riange of the board increaset to 100-200 m from 10m for flipper

Time spent: 4 hrs


Day 4-5: June 12-13
Recreated schematic, footprints, and components - had to modify the component diagrams , footprints and schematic dur to provlems earlier in dimension mismatch in both pitch size for pins
Added SD card + NEO6M GPS module footprints and component diagrams from scratch
Added switches so Flipper powers one major module at a time - filpper has linlited power so it needs to be managed to avoid damazging board and the flipper itself
Completed PCB routing — resolved DRC errors custom component diag and footprints gave this spenant a ,ot time understanding rsolving still had to route reroute ocb a dozen toimes

Time spent: 6 hrs
![image](https://github.com/user-attachments/assets/c78bab9b-68ec-4143-8485-aa09bc84f16c)

footprint changing ![image](https://github.com/user-attachments/assets/b347ac33-fa17-49bc-b84f-d6abda3d47e9)
![image](https://github.com/user-attachments/assets/53ae6e07-58ce-4fa4-a334-5f762cecba50)


Day 6: June 14
 Tried adding 3D models to board problems with importing the models dissolved into onshape it gotn divided into many small dissassociated pieces, faced grid + pitch mismatch  (78.7 mil vs 100 mil) for most components this made my head ache this is really difficult to change in easyeda.
Redid footprints, schematic, PCB routing from start to match the pitch 
i cleared DRC errors after fixing grid + pitch
inalized PCB design after major effort

Time spent: 4 hrs ![image](https://github.com/user-attachments/assets/b6b4d918-d956-42a9-a5c7-1f2c9e47f188)
 ![image](https://github.com/user-attachments/assets/adb6f365-6965-4667-a784-55d98df3c0fe)
![image](https://github.com/user-attachments/assets/099c8a40-95bb-421a-be2f-ab7df1fe32dc)

![image](https://github.com/user-attachments/assets/544fa0e8-73d2-4c45-8b8d-7dc012d249cb)
![image](https://github.com/user-attachments/assets/125b0f5e-5645-4771-99dd-998f7ae0f3b1)
![image](https://github.com/user-attachments/assets/c305a7a6-d00d-4c52-8e47-abe835e2b643) 

![image](https://github.com/user-attachments/assets/01020f3f-ab38-494c-9a3e-ecb616cef966)
finally it took 45 mins just for adjusement


[image](https://github.com/user-attachments/assets/469e1a22-000d-41eb-8840-cc0dd6098eac)


Day 7: June 15
finally i successfuly  Imported PCB + external module 3D models into Onshape, it was part studio import of module + booleen worked in this so problem solved
Created basic case design chnaged as neeeded as problems exist due to component mismatch wih model and real life
Note: case and PCB may need adjustments based on actual parts as the parts in model and real life are a lot diff, and the models are a little offgrid with size pin size the pcb has right sizes for footprints confirmed this multiple times.

Time spent: 4 hrs

Tested basic JS scripting on Momentum firmware for Flipper- so having softeae is need as per reviweer so i went to flipper comjunities on rdiit founf js scripting via flipeer sdk for frimwares like movementum that are available alloe us to use flipper via bnormal scripting to do a lot of things rrserch was painful as he firmwares got split from extreme to momentum and extreme so js scripting shoud allow me to use my boars without reting flipper aps from scratch, 
warning: cant test this wthpout actual board with me told this o reviwer as this needs extensive testing,


for time i put less hrs in bard cause i though reviews wont believe it that i spent so much time for this , actually i ws palnning on finishing this in 14 hrs itself but a lot of things went wrong like footprint component dimension problems, model size problem part availability . pcb and schemaic redesign multiple times, so also budegt hopefully is sill 50 until the price blows up or gets messed , like seed stopped cheap pcb dilevery and is asking 30 dollars for a basic pcb, but jlc reduced price to 14 dollars with shipping with cupons this should go to2-3 s people asaid s it would save hc 8 dollars 

also pitch change will be needed o be doenin the pcb when real parts arrive.

day 3 9/7/25
had to add comon gend for the tp charger module![image](https://github.com/user-attachments/assets/21176ded-d65d-4c03-a7b7-c6cf98374f2a)



things got messed the vendor droped support for hcb found another thaTs cheaper so lets see where it goes
some pins got messed up sck and button io got connected togethrrer shorting the circut had to compeletely reset the circut
damn somehow no matter what i do the netlist isnt updating iy can lead to problems kater![image](https://github.com/user-attachments/assets/b0ce0255-60f7-4a2d-8758-f86320a0e90f)
made it as compact as i could without pcba
man still error not fixed schematic done its connected but somehow pchb isnt getting chaNGED maybeil have to reroute





