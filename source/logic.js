/* Letter Fleet: puzzle logic (no DOM). Shared by the page and the test robot (node). */
const SIZE=8, NWORDS=5, EPOCH='2026-10-01';
/* Themes: family friendly, every word 3-7 letters. */
const THEMES=`At the beach|SAND WAVE SHELL TOWEL CRAB SUN KITE BUCKET SHOVEL SURF TIDE OCEAN SEAGULL PIER DUNE
Fruit|APPLE PEAR PLUM FIG GRAPE LEMON MANGO KIWI CHERRY BANANA PEACH ORANGE MELON LIME
On the farm|COW PIG HEN GOAT SHEEP HORSE DUCK LAMB GOOSE DONKEY ROOSTER TURKEY CALF PONY TRACTOR BARN
Weather|RAIN SNOW WIND HAIL FOG STORM CLOUD SUNNY SLEET THUNDER BREEZE FROST MIST RAINBOW
In the kitchen|PAN POT CUP BOWL FORK SPOON KNIFE PLATE KETTLE OVEN SINK TOASTER MIXER WHISK LADLE
Sports|GOLF TENNIS SOCCER RUGBY HOCKEY BOXING ROWING SKIING DARTS JUDO BOWLING CRICKET SURFING KARATE
Colors|RED BLUE GREEN PINK GOLD TEAL BLACK WHITE PURPLE ORANGE YELLOW SILVER BROWN NAVY CORAL
Musical instruments|DRUM HARP FLUTE PIANO TUBA BANJO VIOLIN GUITAR CELLO OBOE BUGLE ORGAN TRUMPET UKULELE
Up in the sky|SUN MOON STAR CLOUD COMET PLANE KITE BIRD ROCKET RAINBOW PLANET JET BALLOON
Vegetables|PEA CORN BEAN KALE LEEK ONION BEET CARROT CELERY POTATO SQUASH LETTUCE RADISH PEPPER TOMATO
Under the sea|EEL COD CRAB SEAL SHARK WHALE SQUID OYSTER OCTOPUS CLAM TUNA SHRIMP LOBSTER CORAL DOLPHIN
Clothes|HAT CAP COAT SCARF SHIRT SOCK GLOVE JACKET SHORTS SWEATER BOOT VEST SKIRT DRESS MITTEN
Breakfast|EGG HAM TOAST BACON WAFFLE CEREAL JUICE MUFFIN BAGEL OATS JAM PANCAKE YOGURT BUTTER COFFEE
In the garden|ROSE SEED SOIL HOSE RAKE TULIP DAISY SHED WEED FENCE SPADE LILY VINE BLOOM FLOWER
Birds|OWL JAY CROW DOVE HAWK EAGLE ROBIN WREN FINCH PARROT PIGEON SWAN STORK HERON FALCON
Tools|SAW AXE DRILL HAMMER WRENCH NAIL SCREW LEVEL CHISEL PLIERS FILE CLAMP TAPE LADDER SANDER
Going camping|TENT FIRE LOG MAP LANTERN CANOE TRAIL CAMP HIKE COMPASS COOLER CABIN STOVE TORCH
In the classroom|DESK BOOK PEN CHALK RULER PENCIL ERASER GLOBE PAPER BOARD CHAIR CLOCK CRAYON TEACHER LESSON
Desserts|PIE CAKE TART FUDGE COOKIE CANDY DONUT BROWNIE SUNDAE CUPCAKE MOUSSE PUDDING TRIFLE ECLAIR
Getting around|CAR BUS VAN TRAIN PLANE TRUCK SHIP BOAT TAXI BIKE SUBWAY TRAM FERRY SCOOTER WAGON
Your body|ARM LEG HAND FOOT KNEE ELBOW NOSE EAR EYE THUMB ANKLE WRIST CHIN CHEEK TOOTH
In the jungle|APE LION TIGER ZEBRA HIPPO MONKEY PARROT GORILLA PANTHER SLOTH TOUCAN LEMUR JAGUAR GECKO
Shapes|OVAL CUBE CONE STAR HEART SQUARE CIRCLE ARROW PRISM SPHERE DIAMOND OCTAGON RING KITE
Pizza toppings|HAM OLIVE ONION BACON CHEESE PEPPER TOMATO BASIL SPINACH GARLIC SAUSAGE FETA PESTO
Winter|SNOW SLED SKI ICE SCARF MITTEN IGLOO FROST COCOA BOOTS SKATE FLAKE CHILL PARKA SHOVEL
Autumn|LEAF RAKE ACORN APPLE CIDER PUMPKIN HAYRIDE SQUASH CORN HARVEST SWEATER MAPLE GOURD PIE
Pets|DOG CAT FISH BIRD HAMSTER BUNNY PUPPY KITTEN TURTLE GERBIL PARROT LIZARD PONY FERRET MOUSE
At the fair|CLOWN TENT RIDE JUGGLER ACROBAT POPCORN TICKET PRIZE BALLOON GAMES CANDY MAGIC TRAPEZE PONY
At the bakery|BREAD ROLL BUN PIE CAKE BAGEL SCONE MUFFIN DONUT LOAF FLOUR OVEN PASTRY COOKIE YEAST
Outer space|MOON STAR MARS SUN ORBIT COMET ROCKET PLANET GALAXY NEBULA SATURN VENUS JUPITER CRATER ALIEN
Game night|DICE CARDS CHESS DOMINO MARBLES JACKS PUZZLE TOKEN BOARD SPINNER PAWN KING QUEEN TIMER
Baseball|BAT BALL BASE GLOVE MITT PITCH INNING OUT STRIKE CATCHER DUGOUT HOMER BUNT UMPIRE FIELD
Around the house|DOOR ROOF WALL ATTIC PORCH GARAGE KITCHEN HALL STAIRS WINDOW CHIMNEY FLOOR CLOSET DECK LAMP
Trees|OAK ELM ASH PINE FIR MAPLE BIRCH CEDAR WILLOW SPRUCE CHERRY ASPEN PALM HOLLY POPLAR
Music|SONG NOTE BEAT TUNE CHORD MELODY RHYTHM TEMPO CHORUS SINGER BAND LYRIC VERSE CONCERT STAGE
Jobs|CHEF COOK PILOT NURSE DOCTOR FARMER BAKER JUDGE ACTOR DENTIST PAINTER TEACHER BARBER PLUMBER CLERK
Picnic|ANT BASKET BLANKET CHIPS SALAD PLATE NAPKIN GRASS PARK CUP JUICE FRUIT COOLER PICKLE
The great outdoors|HILL LAKE POND CAVE VALLEY CANYON RIVER ISLAND DESERT CLIFF BEACH GLACIER SWAMP MESA DELTA
Bugs|ANT BEE FLY MOTH WASP FLEA BEETLE CRICKET SPIDER LADYBUG HORNET GNAT TERMITE CICADA MANTIS
Herbs and spices|SALT MINT SAGE DILL BASIL THYME CUMIN GINGER PEPPER PAPRIKA OREGANO NUTMEG CLOVE CURRY PARSLEY
Snack time|CHIPS NUTS PRETZEL POPCORN CRACKER RAISIN GRANOLA CHEESE APPLE JERKY DIP SALSA CANDY FRIES COOKIE
At the office|DESK FILE PEN STAPLER PAPER FOLDER CLIP MEMO PHONE LAPTOP MOUSE PRINTER CHAIR MARKER TAPE
Thanksgiving|TURKEY PIE GRAVY CORN YAMS PARADE FAMILY FEAST PUMPKIN BREAD PECAN ROLLS HARVEST TABLE
At the park|SWING SLIDE BENCH TREE POND DUCK PATH KITE GRASS SEESAW PICNIC BALL DOG TRAIL
Arts and crafts|NEEDLE THREAD BUTTON YARN KNIT GLUE PAINT BRUSH BEAD FABRIC STITCH RIBBON CLAY PAPER CRAYON
Gems|RUBY GEM JADE OPAL PEARL AMBER TOPAZ GARNET DIAMOND EMERALD CRYSTAL ONYX QUARTZ JEWEL
Car parts|TIRE WHEEL HORN SEAT BRAKE ENGINE MIRROR TRUNK HOOD WIPER BUMPER PEDAL RADIO DOOR LIGHT
Countries|CHINA INDIA JAPAN ITALY SPAIN CANADA MEXICO FRANCE BRAZIL KENYA EGYPT CHILE GREECE NORWAY PERU
US states|OHIO IOWA UTAH MAINE TEXAS IDAHO NEVADA OREGON KANSAS ALASKA HAWAII FLORIDA VERMONT GEORGIA ARIZONA
Toys|BALL DOLL YOYO KITE TOP BLOCKS TEDDY PUZZLE ROBOT TRAIN MARBLE WAGON RATTLE BUBBLES
Drinks|TEA MILK JUICE WATER COCOA SODA LATTE COFFEE CIDER SHAKE PUNCH COLA
Furniture|BED SOFA DESK CHAIR TABLE STOOL BENCH DRESSER COUCH SHELF CRIB LAMP CABINET OTTOMAN MIRROR
Movie night|POPCORN SCREEN TICKET SEAT SNACK CANDY SODA FILM ACTOR SCENE CAMERA PREVIEW USHER LOBBY`.split('\n').map(l=>{const [n,w]=l.split('|');return {name:n,words:[...new Set(w.trim().split(/\s+/))]}});

function hashStr(s){let h=1779033703^s.length;for(let i=0;i<s.length;i++){h=Math.imul(h^s.charCodeAt(i),3432918353);h=h<<13|h>>>19}return h>>>0}
function rng(seed){let a=seed>>>0;return()=>{a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function shuffle(arr,r){const a=arr.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function dayNo(date){return Math.round((Date.UTC(...date.split('-').map((x,i)=>i==1?x-1:+x))-Date.UTC(...EPOCH.split('-').map((x,i)=>i==1?x-1:+x)))/864e5)+1}
function dateOf(no){const [y,m,d]=EPOCH.split('-').map(Number);return new Date(Date.UTC(y,m-1,d+no-1)).toISOString().slice(0,10)}

/* Theme for puzzle n: themes go round in a shuffled order, a fresh order each cycle, no theme twice in a row. */
function themeFor(no){const T=THEMES.length,cyc=Math.floor((no-1)/T);
  let order=shuffle(THEMES.map((_,i)=>i),rng(hashStr('lf-cycle-'+cyc)));
  if(cyc>0){const prev=shuffle(THEMES.map((_,i)=>i),rng(hashStr('lf-cycle-'+(cyc-1))));if(order[0]===prev[T-1])order.push(order.shift())}
  return THEMES[order[(no-1)%T]]}

/* Place words across or down on an 8x8 board, never overlapping or touching (not even corners). */
function place(words,r){const own=Array(SIZE*SIZE).fill(-1),cells=[];
  for(let wi=0;wi<words.length;wi++){const w=words[wi];let ok=false;
    for(let t=0;t<300&&!ok;t++){const d=r()<.5?0:1,len=w.length;
      const row=Math.floor(r()*(d?SIZE-len+1:SIZE)),col=Math.floor(r()*(d?SIZE:SIZE-len+1));
      const cs=[];for(let k=0;k<len;k++)cs.push((row+(d?k:0))*SIZE+col+(d?0:k));
      if(cs.every(c=>{const cr=Math.floor(c/SIZE),cc=c%SIZE;for(let a=-1;a<=1;a++)for(let b=-1;b<=1;b++){const R=cr+a,C=cc+b;if(R>=0&&R<SIZE&&C>=0&&C<SIZE&&own[R*SIZE+C]>=0)return false}return true})){
        cs.forEach(c=>own[c]=wi);cells.push(cs);ok=true}}
    if(!ok)return null}
  return {own,cells}}

/* The day's puzzle: theme, 5 words (19-25 letters, at least one short word), and where they sit. */
function makeDay(date){const no=dayNo(date),theme=themeFor(no),r=rng(hashStr('lf-day-'+date));
  for(let tries=0;tries<500;tries++){const pick=shuffle(theme.words,r).slice(0,NWORDS),tot=pick.reduce((a,w)=>a+w.length,0);
    if(tot<19||tot>25||!pick.some(w=>w.length<=4))continue;
    if(pick.some(a=>pick.some(b=>a!==b&&b.includes(a))))continue;
    const pl=place(pick.slice().sort((a,b)=>b.length-a.length),r);if(!pl)continue;
    const words=pick.slice().sort((a,b)=>b.length-a.length);
    const letters=Array(SIZE*SIZE).fill('');pl.cells.forEach((cs,wi)=>cs.forEach((c,k)=>letters[c]=words[wi][k]));
    return {date,no,theme:theme.name,words,cells:pl.cells,own:pl.own,letters}}
  throw new Error('no board for '+date)}

/* Make your own: a player's 5 words (3-7 letters) placed the same way for everyone who opens the same code. */
function makeCustom(words,title,code){words=words.slice().sort((a,b)=>b.length-a.length);const r=rng(hashStr('cs-make-'+code));
  for(let t=0;t<400;t++){const pl=place(words,r);if(!pl)continue;
    const letters=Array(SIZE*SIZE).fill('');pl.cells.forEach((cs,wi)=>cs.forEach((c,k)=>letters[c]=words[wi][k]));
    return {date:'c-'+hashStr(code).toString(36),no:0,theme:title||'Made for you',words,cells:pl.cells,own:pl.own,letters,custom:1}}
  return null}
/* Game state: {calls:[{l,c}], guesses:[{c,g,ok}], rev:[cells], sunk:[word idx], left, over, win} */
/* Game state: calls first, then the guessing round.
   {calls:[{l,c}], guesses:[{c,g,ok}], rev:[cells], sunk:[word idx], missed:[word idx], left, guessing, over, win} */
function newState(calls){return {calls:[],guesses:[],rev:[],sunk:[],missed:[],left:calls,guessing:false,over:false,win:false}}
function hiddenOf(day,st,L){const rev=new Set(st.rev);return day.letters.map((x,c)=>c).filter(c=>day.letters[c]===L&&!rev.has(c)&&!st.sunk.includes(day.own[c]))}
/* Call a letter: shows ONE square holding it, in the shortest word that still hides one (ties: earlier on the board).
   Lighting every letter of a word sinks it. When the calls run out, the guessing round starts. */
function callLetter(day,st,L){if(st.over||st.guessing||st.left<=0)return null;const hid=hiddenOf(day,st,L);st.left--;
  let res;if(!hid.length){st.calls.push({l:L,c:-1});res={hit:false}}
  else{hid.sort((a,b)=>{const wa=day.words[day.own[a]].length,wb=day.words[day.own[b]].length;if(wa!==wb)return wa-wb;
      const sa=day.cells[day.own[a]][0],sb=day.cells[day.own[b]][0];if(sa!==sb)return sa-sb;return a-b});
    const c=hid[0];st.rev.push(c);st.calls.push({l:L,c});res={hit:true,cell:c};
    const wi=day.own[c];if(day.cells[wi].every(x=>st.rev.includes(x)))sinkWord(day,st,wi)}
  if(st.left<=0){if(st.sonar==null)st.needSonar=true;else st.guessing=true}
  endCheck(day,st);return res}
/* Sonar: once per game, ping any unlit square (no call used). A letter there lights up; an empty square shows water. */
function sonarCell(day,st,c){if(st.over||st.sonar!=null||c<0||c>=day.letters.length||st.rev.includes(c))return null;
  const wi=day.own[c];if(wi>=0&&(st.sunk.includes(wi)||(st.missed||[]).includes(wi)))return null;st.sonar=c;
  let res;if(wi<0){st.water=[c];res={hit:false,cell:c}}
  else{st.rev.push(c);if(day.cells[wi].every(x=>st.rev.includes(x)))sinkWord(day,st,wi);res={hit:true,cell:c}}
  /* calls ran out (or Guess now) before the Sonar was used: the ping comes first, then the guessing round */
  if(st.needSonar){st.needSonar=false;st.guessing=true}
  endCheck(day,st);return res}
function sinkWord(day,st,wi){if(!st.sunk.includes(wi))st.sunk.push(wi)}
/* Start guessing before the calls run out (the calls left are kept as a bonus). */
function startGuessing(day,st){if(!st.over){if(st.sonar==null){st.needSonar=true;return}st.guessing=true;endCheck(day,st)}}
/* Guessing round: the lit letters drop into the word boxes; pick a word and fill in its blanks.
   One wrong guess ends the game. */
function guessWord(day,st,wi,g){if(st.over||!st.guessing||!canTry(day,st,wi))return null;const ok=day.words[wi]===g;
  st.guesses.push({w:wi,g,ok});
  if(ok)sinkWord(day,st,wi);else{st.missed.push(wi);st.over=true;st.win=false;return {ok,word:wi}}
  endCheck(day,st);return {ok,word:wi}}
/* Stop guessing and keep the words sunk so far */
function finishGame(day,st){if(!st.over){st.over=true;st.win=st.sunk.length===day.words.length}}
/* The letters you know in word wi, in place ('' for a blank) */
function known(day,st,wi){return day.cells[wi].map((c,k)=>st.rev.includes(c)||st.sunk.includes(wi)?day.words[wi][k]:'')}
function endCheck(day,st){if(st.sunk.length===day.words.length){st.over=true;st.win=true}}
function canTry(day,st,wi){return wi>=0&&!st.sunk.includes(wi)&&!st.missed.includes(wi)}
function remaining(day,st,L){return hiddenOf(day,st,L).length}
/* Stars by words sunk: 5 = 3, 4 = 2, 3 = 1 */
function starsOf(sunk){return sunk>=5?3:sunk===4?2:sunk===3?1:0}

if(typeof module!=='undefined')module.exports={SIZE,NWORDS,EPOCH,THEMES,makeDay,newState,callLetter,guessWord,startGuessing,remaining,dayNo,dateOf,themeFor,starsOf,finishGame,known,canTry,sonarCell,makeCustom};
