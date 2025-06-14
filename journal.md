title: "flipper ultimate extensiomn board"
author: "Riston Rodrigues (name or slack username)"
description: "diy ultimate flipper extension board with capabilites incorporating those of most availablr extension boards at fraction of the cost"
created_at: "5-23-25"

day 1:
may 23

so i just finished my reserch and yes creating dev boaf that lets me do everything that different flipper extension boards do combined into one is possible, and it can be created at fraction of the boards being sold online, saw some compelete diy boards , created my own wifi devboard a month ago and now think its possible to go for the ultimate dev board im plnning to make it available on hack market.

so aftr a week or reserching found out that the cmponents needed cn be bought in india just not sure of id the vendor will allow hcb, india secific problem
seed studio still ships cheap pcb to india so its good thst i can get the pcb made (already done 5-6 pcb in diff hackclub programs).

created -the bom , serched for parts and vendors and the total comes out to be under 40$ so its good.

found out the old go to vendor for parts stopped accepting hcb cards, found a new vens\dor that should acet the parts if not we are doomed as the parts arent available at other places and too expensive on amazon 4x the prize

time speat today: 3 hrs (serched for a dozen vendors for prt availability locally , went through already available tutorials from talking sasquash, and others, cretaed the bom)


day 2:
jun 2
so just finised my finals so im free speant 1.5 hrs yesterday for more reserch , so decided agaist comprlte board creation using pcba as customs will demnd more cudstoms in india than the valur of the devboard itself. today i soeant 2 hrs on easy eda looking for footprintds, and some pcb design of nrf 24 module ,cc10101 , andother modules trying and testing as they only have solderable chips for the modules not the module footprit itself so had to make changes as pcba is now a compelete no-no, i also was coinsidering udsing protoboards insted of bcb but then i doint think the project will be approved will use this as backup if pcb from seeed studio is too late, had to cresate the footprints fir the modules i want to
integrate i made those man spent more time in figuring out how to do that insted of realling doing thzt but its good experience. 

so some changes made in bom will use whole modules insted of pcba, wroom with external anteena can be a problem due the vendors that allow hcb the one that has parts doesnt do i think, banggood ships from china at same price as available india but cant say about the customs, flyrobo should has all parts needed, the budget tweaked to 50$ +- 10

time speat today: 6 hrs(4.5 today ,1.5 yesteray) footprint design, module change , more modules can be integrated into the ultimate board as oposed to the 2-3 max on commercial ones as latest rerserch, so 3 for ble wifi 2.4ghz gps sd carfd and all can be combined and supported on 3.7 volts via flipper and esp idf switches aere added to control the current flow to modules (new reserch) 
next step- perfecting footprints for all modules, pcn]b creating and fixing errors,  3d design of cover

day 3:
june 4

speant 4 hrs crated better footprints and schematics for components in easyeda learnt how to do it for nrf24,cc1101 and esp32 wroom the naming of each pad pin was tireswome found aother vendor that will dielever the component neede on time bur for a dollar more he has it in stock 100 pieces, was thinking of softwae but flipper aldeady has the apps necesary to run my devboard as per my reserch so its not needed some missing or ghost components messing with the pcb
time speat today:4 hrs, learnt custrom footprint, component creation, linking both of them together


day 4,5
jun 12,13
sorry for not updating as needed had a hell bad of a wek which exhausted mr physically and mentaLLY , FOUND OUT THE Allowed hcb vendoer doesnt hav any or most parts i need, or ill nedd aybe use ali express, the schematic had to be redone like foot prints and components as somehow they werent saved i had to restart from scratch, the neo6m and sd card modules footprints and componrnty diagrsasms are good not as many eroors this time, faced issue with thwe wiring of these 2 with the esp devkit c footprint they need to wired to the flipper i had wired them to fevmkit do had to reo thst, also added new nrf24 slot, and switched so when being powerered by flipper only one thing workd at a time swithcheds wil, ensure that , problem lied in connectionnflipper can weither power esp ot nrf ot the cc10101 at a time so switches should dolve the problem the neo6m derived power from 5v of flipper gpio its god i finished the pcb but not sure how ill add 3d models here im trying that todya 
total time for all of this 6 hrs ok img upload works its good , biggest peoblem if i want to use it as an nrf box the current from 3.3 id insufficiant, attaching a battery isnt poasible so i can only use 2 modules max at a time.
![image](https://github.com/user-attachments/assets/c78bab9b-68ec-4143-8485-aa09bc84f16c)

footprint changing ![image](https://github.com/user-attachments/assets/b347ac33-fa17-49bc-b84f-d6abda3d47e9)
routing sucks 2 hrs and evwrfything is still a mess cretig custom footprint sucks bad i have to redo a lot of things
ok 86 eroors sall related to drc and the lettersd  creatwed for footprints 
finlly the board is done no drc edited foororints again-![image](https://github.com/user-attachments/assets/53ae6e07-58ce-4fa4-a334-5f762cecba50)

time spent:6 hrs+ reded schematic component and footprintsa for components, routing mesed my head,integrating all compemts took a lot of trial and error as teht all could ave shot dcircuted the borad , added switches to conterol power output from flipper gpio

day 6, jun 14
im stuck with the 3d models of each components tried grabcad models with my board pcb omehoe eveb 2 hrs im clueles on how to perfectly add those to my board if this goes on dpopont know if i cluld vcreate case before i have the parts, i tried booleen it still is stuck, nor gruping works mate connector is still messed up ![image](https://github.com/user-attachments/assets/b6b4d918-d956-42a9-a5c7-1f2c9e47f188)
current board with no added parts got esp devkit modue and more but stuck
big problem after azll work i ddi the pitch is 78.7 mil even after personally setting the oitch to 100mil ie 2.54 inch sth ill have to redo everything man its just messed up it ws what was messing the 3d models back to square one ![image](https://github.com/user-attachments/assets/adb6f365-6965-4667-a784-55d98df3c0fe)
![image](https://github.com/user-attachments/assets/099c8a40-95bb-421a-be2f-ab7df1fe32dc)

![image](https://github.com/user-attachments/assets/544fa0e8-73d2-4c45-8b8d-7dc012d249cb) managed t change half to corrct size rest are stuck no matter what i do, ma i tied all step i did on the other ones still same man i fell sing peotoboard pcb and wirws would have been bettwr. ![image](https://github.com/user-attachments/assets/125b0f5e-5645-4771-99dd-998f7ae0f3b1) u can se the sp and nrf c1010 are still jot getting grid right despite changeing everything as pr documentaion
stuck in fliper and nrf footprints custom design sucks ok still no solutuon nonmatter what i do it doesnt sem to change for these to tried everything seems o   r a software issue dsamn , just it wont improve or change no matter what doing it ahain will waste another day![image](https://github.com/user-attachments/assets/c305a7a6-d00d-4c52-8e47-abe835e2b643) using protoboards was much easier

![image](https://github.com/user-attachments/assets/01020f3f-ab38-494c-9a3e-ecb616cef966)
finally it took 45 mins just for adjusement



hrs speant today-8hrs, stuff done - assmebling of pcb model and external models to creare the cadse got messed as i notieded after hrs of trial and eroror it s messed up my gid size messed everything up, had to serch try and do redo everything in footprints and changed footprints of 4 , still 2 esp anf nrf had to be compeletely redone, judt too messy too headaching actaull speant a lot of time thats not accounted in hoe to actualy do new styudf in easyeda




