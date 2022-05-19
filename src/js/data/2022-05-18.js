dataSetVersion = "2022-05-18"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Album",
    key: "Album",
    tooltip: "Check this to restrict to certain alumbs",
    checked: false,
    sub: [
     // { name: "Books and CDs", key: "book" },
      { name: "1", tooltip: "01 - Reiiden", key: "1" },
      { name: "2", tooltip: "02 - Fuumaroku", key: "2" },
      { name: "3", tooltip: "03 - Yumejikuu", key: "3" },
      { name: "4", tooltip: "04 - Gensoukyou", key: "4" },
      { name: "Little Pieces of Paper With \"No\" Written on Them", tooltip: "05 - Kaikidan", key: "LPOP" },
      { name: "My Back Is Killing Me Baby", tooltip: "06 - Koumakan", key: "MBIKMB" },
      { name: "Twin Fantasy (Mirror To Mirror)", tooltip: "07 - Youyoumu", key: "MTM" },
      { name: "Monomania", tooltip: "07.5 - Suimusou", key: "Mono" },
      { name: "Starving While Living", tooltip: "07.5 - Suimusou", key: "SWL" },
      { name: "Disjecta membra", tooltip: "08 - Eiyashou", key: "DM" },
      { name: "Nervous Young Man", tooltip: "09 - Kaeidzuka", key: "MYM" },
      { name: "How to Leave Town", tooltip: "07.5 - Suimusou", key: "HtLT" },
      { name: "Teens of Style", tooltip: "09.5 - Bunkachou", key: "ToS" },
      { name: "Teens of Denial", tooltip: "10 - Fuujinroku", key: "ToD" },
      { name: "Twin Fantasy (Face To Face)", tooltip: "10.5 - Hisouten", key: "FTF" },
      { name: "Making a Door Less Open", tooltip: "11 - Chireiden", key: "MaDLO" },
      { name: "loose songs", tooltip: "07.5 - Suimusou", key: "L" },
    ]
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Tybee Island Horse Ghosts",
    img: "SyOuVHI.jpg",
    opts: {
      Album: [ "1"],
      stage: ["st4"]
    }
  },
  {
    name: "Good Sunday",
    img: "SyOuVHI.jpg",
    opts: {
      Album: [ "1"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "Big Jacket",
    img: "SyOuVHI.jpg",
    opts: {
      Album: ["1"],
      stage: ["st1"]
    }
  },
  {
    name: "Cesare the Somnambulist",
    img: "SyOuVHI.jpg",
    opts: {
      Album: ["1"],
      stage: ["st2", "ex"],
      nameless: true
    },
  },
  {
    name: "Happy / Ugly",
    img: "SyOuVHI.jpg",
    opts: {
      Album: [ "1"],
      stage: ["st2"]
    }
  },
  {
    name: "David Lynch versus the Moon",
    img: "SyOuVHI.jpg",
    opts: {
      Album: ["1"],
      stage: ["st3"]
    }
  },
  {
    name: "His Shiny Customers",
    img: "SyOuVHI.jpg",
    opts: {
      Album: ["1"],
      stage: ["st4"],
      nameless: true
    }
  },
  {
    name: "Up All Night",
    img: "SyOuVHI.jpg",
    opts: {
      Album: ["1"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "Inside the Bell Jar",
    img: "SyOuVHI.jpg",
    opts: {
      Album: [ "1"],
      stage: ["st5", "st6"]
    }
  },
  {
    name: "July New Hey",
    img: "SyOuVHI.jpg",
    opts: {
      Album: ["1"],
      stage: ["st6"]
    }
  },
  {
    name: "Kid War",
    img: "SyOuVHI.jpg",
    opts: {
      Album: ["1"],
      stage: ["ex"]
    }
  },
  {
    name: "You Have to Go to College",
    img: "SyOuVHI.jpg",
    opts: {
      Album: ["1"],
      stage: ["st1"]
    }
  },
  {
    name: "Yes Bulletin",
    img: "SyOuVHI.jpg",
    opts: {
      Album: ["1"],
      stage: ["st2", "ex"]
    }
  },
  {
    name: "Mortgages for Veterans",
    img: "SyOuVHI.jpg",
    opts: {
      Album: ["1"],
      stage: ["st3"]
    }
  },
  {
    name: "My Dad Just Passed Oute",
    img: "SyOuVHI.jpg",
    opts: {
      Album: ["1"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "What Does OUJ Stand For",
    img: "SyOuVHI.jpg",
    opts: {
      Album: ["1"],
      stage: ["st4"]
    }
  },
  {
    name: "Smokezone",
    img: "dlQfX5P.png",
    opts: {
      Album: ["2"],
      stage: ["st4"]
    }
  },
  {
    name: "This One Time I Went to a Coffee House Because Some Guy I Knew Was Playing and I Just Sat There for an Hour and Didn't Talk to Anyone and Then I Came Home and Wrote This Song",
    img: "dlQfX5P.png",
    opts: {
      Album: ["2"],
      stage: ["st4"]
    }
  },
  {
    name: "We Are in Space",
    img: "dlQfX5P.png",
    opts: {
      Album: [ "2"],
      stage: ["st5", "st6"]
    }
  },
  {
    name: "It's You, You're the Asshole That Made This",
    img: "dlQfX5P.png",
    opts: {
      Album: [ "2" ],
      stage: ["st1", "st6"]
    }
  },
  {
    name: "Shoelaces",
    img: "dlQfX5P.png",
    opts: {
      Album: ["2"],
      stage: ["ex"]
    }
  },
  {
    name: "Will You Please Pass the Milk, Please?",
    img: "dlQfX5P.png",
    opts: {
      Album: [ "2"],
      stage: ["ex"]
    }
  },
  {
    name: "Act Suspicious",
    img: "dlQfX5P.png",
    opts: {
      Album: ["2"],
      stage: ["st6"]
    }
  },
  {
    name: "Reversible Jacket",
    img: "dlQfX5P.png",
    opts: {
      Album: ["2"],
      stage: ["st1"]
    }
  },
  {
    name: "The Majestic Hotel",
    img: "dlQfX5P.png",
    opts: {
      Album: ["2"],
      stage: ["st2"]
    }
  },
  {
    name: "90",
    img: "dlQfX5P.png",
    opts: {
      Album: ["2"],
      stage: ["st3", "ex"]
    }
  },
  {
    name: "Fiction I",
    img: "dlQfX5P.png",
    opts: {
      Album: ["2"],
      stage: ["st5"]
    }
  },
  {
    name: "Hanging Out With My Mom in Women's Apparel",
    img: "dlQfX5P.png",
    opts: {
      Album: ["2"],
      stage: ["st5"]
    }
  },
  {
    name: "...Then It Will Be Exactly the Same as Earth",
    img: "dlQfX5P.png",
    opts: {
      Album: ["2"],
      stage: ["st6"]
    }
  },
  {
    name: "No Starving",
    img: "21qaIPX.png",
    opts: {
      Album: ["3"],
      stage: ["st6"]
    }
  },
  {
    name: "Portrait of the Artist as a Young Fag",
    img: "21qaIPX.png",
    opts: {
      Album: ["3"],
      stage: ["ex"]
    }
  },
  {
    name: "Beach Weak",
    img: "21qaIPX.png",
    opts: {
      Album: [ "3"],
      stage: ["st4"]
    }
  },
  {
    name: "Foreign Song",
    img: "21qaIPX.png",
    opts: {
      Album: ["3"],
      stage: ["st4"]
    }
  },
  {
    name: "Psst, Teenagers, Take Off Your Clo",
    img: "21qaIPX.png",
    opts: {
      Album: ["3"],
      stage: ["st5"]
    }
  },
  {
    name: "Sun Hot",
    img: "21qaIPX.png",
    opts: {
      Album: ["3"],
      stage: ["st5"]
    }
  },
  {
    name: "Beach Fagz",
    img: "21qaIPX.png",
    opts: {
      Album: ["3"],
      stage: ["st6"]
    }
  },
  {
    name: "Summer Bummer",
    img: "21qaIPX.png",
    opts: {
      Album: ["3"],
      stage: ["st1"]
    }
  },
  {
    name: "Ryan North by Northwest",
    img: "21qaIPX.png",
    opts: {
      Album: ["3"],
      stage: ["st1"]
    }
  },
  {
    name: "Beach Drugs",
    img: "21qaIPX.png",
    opts: {
      Album: ["3"],
      stage: ["st2"]
    }
  },
  {
    name: "Beach Death",
    img: "21qaIPX.png",
    opts: {
      Album: ["3"],
      stage: ["st3"]
    }
  },
  {
    name: "Beach Funeral",
    img: "21qaIPX.png",
    opts: {
      Album: ["3"],
      stage: ["st4"]
    }
  },
  {
    name: "Oh! Starving",
    img: "21qaIPX.png",
    opts: {
      Album: ["3"], 
      stage: ["st5", "ex"]
    }
  },
  {
    name: "A Good Bridge to Never Cross Until There's No Doubt That He's Dead ",
    img: "XGbcwHR.png",
    opts: {
      Album: ["4"],
      stage: ["st6", "ex"]
    }
  },
  {
    name: "Who Even Knows",
    img: "XGbcwHR.png",
    opts: {
      Album: ["4"],
      stage: ["ex"]
    }
  },
  {
    name: "Even the Who Knows ",
    img: "XGbcwHR.png",
    opts: {
      Album: ["4"],
      stage: ["st5"]
    }
  },
  {
    name: "Not \"Kidding\" Around",
    img: "XGbcwHR.png",
    opts: {
      Album: ["4"],
      stage: ["st6"]
    }
  },
  {
    name: "Heartless Dick",
    img: "XGbcwHR.png",
    opts: {
      Album: ["4"],
      stage: ["st1"]
    }
  },
  {
    name: "Dickless Heart",
    img: "XGbcwHR.png",
    opts: {
      Album: ["4"],
      stage: ["st1"]
    }
  },
  {
    name: "Feel Like Daniel Johnston",
    img: "XGbcwHR.png",
    opts: {
      Album: ["4"],
      stage: ["st2"]
    }
  },
  {
    name: "The Ghost of Bob Saget",
    img: "XGbcwHR.png",
    opts: {
      Album: ["4"],
      stage: ["st3"]
    }
  },
  {
    name: "Around",
    img: "XGbcwHR.png",
    opts: {
      Album: ["4"],
      stage: ["st4"]
    }
  },
  {
    name: "Leave Togther",
    img: "TWBituW.png",
    opts: {
      Album: ["LPOP"],
      stage: ["st4", "st5", "st6"]
    }
  },
  {
    name: "I Don't Want You",
    img: "TWBituW.png",
    opts: {
      Album: ["LPOP"],
      stage: ["st6"]
    }
  },
  {
    name: "I Am Afraid of Literally Everything",
    img: "TWBituW.png",
    opts: {
      Album: ["LPOP"],
      stage: ["ex"]
    }
  },
  {
    name: "100 Minutes of Solitude",
    img: "TWBituW.png",
    opts: {
      Album: ["LPOP"],
      stage: ["st1", "st5"]
    }
  },
  {
    name: "Neon Sign",
    img: "TWBituW.png",
    opts: {
      Album: ["LPOP"],
      stage: ["st2", "ex"]
    }
  },
  {
    name: "Samson's Golden Axe",
    img: "TWBituW.png",
    opts: {
      Album: ["LPOP"],
      stage: ["st3"]
    }
  },
  {
    name: "I Scream Social",
    img: "TWBituW.png",
    opts: {
      Album: ["LPOP"],
      stage: ["st4"]
    }
  },
  {
    name: "Wachovia Receipts",
    img: "TWBituW.png",
    opts: {
      Album: ["LPOP"],
      stage: ["st5"]
    }
  },
  {
    name: "The Singles Song",
    img: "TWBituW.png",
    opts: {
      Album: ["LPOP"],
      stage: ["st6"]
    }
  },
  {
    name: "Get Better Get Well",
    img: "TWBituW.png",
    opts: {
      Album: ["LPOP"],
      stage: ["st4", "st6", "ex"]
    }
  },
  {
    name: "Squid Desert",
    img: "TWBituW.png",
    opts: {
      Album: ["LPOP"],
      stage: ["ex"]
    }
  },
  {
    name: "Ff",
    img: "TWBituW.png",
    opts: {
      Album: ["LPOP"],
      stage: ["st1", "st2", "st3"]
    }
  },
  {
    name: "Nothing",
    img: "TWBituW.png",
    opts: {
      Album: ["LPOP"],
      stage: ["st1", "st2", "st3"]
    }
  },
  {
    name: "Surf Jerk",
    img: "TWBituW.png",
    opts: {
      Album: ["LPOP"],
      stage: ["st1", "st2", "st3"]
    }
  },
  {
    name: "A Pleasant Sort of Terror",
    img: "TWBituW.png",
    opts: {
      Album: ["LPOP"],
      stage: ["st2"]
    }
  },
  {
    name: "Total Burn",
    img: "TWBituW.png",
    opts: {
      Album: ["LPOP"],
      stage: ["st3", "st4"]
    }
  },
  {
    name: "The Staying Song",
    img: "TWBituW.png",
    opts: {
      Album: ["LPOP"],
      stage: ["st4"]
    }
  },
  {
    name: "I CAN TALK WITH MY EYES SHUT",
    img: "TWBituW.png",
    opts: {
      Album: ["LPOP"],
      stage: ["st5"]
    }
  },
  {
    name: "The Vice President of Google and et al",
    img: "TWBituW.png",
    opts: {
      Album: ["LPOP"],
      stage: ["st5"]
    }
  },
  {
    name: "Hot Sun",
    img: "TWBituW.png",
    opts: {
      Album: ["LPOP"],
      stage: ["st6"]
    }
  },
  {
    name: "The Drum",
    img: "IQaq9NS.png",
    opts: {
      Album: ["MBIKMB"],
      stage: ["ex"]
    }
  },
  {
    name: "Happy News For Sadness",
    img: "IQaq9NS.png",
    opts: {
      Album: ["MBIKMB"],
      stage: ["st6"]
    }
  },
  {
    name: "Stoop Kid",
    img: "IQaq9NS.png",
    opts: {
      Album: ["MBIKMB"],
      stage: ["st1"]
    }
  },
  {
    name: "Something Soon",
    img: "IQaq9NS.png",
    opts: {
      Album: ["MBIKMB"],
      stage: ["st2"]
    }
  },
  {
    name: "No Passion",
    img: "IQaq9NS.png",
    opts: {
      Album: ["MBIKMB"],
      stage: ["st3"]
    }
  },
  {
    name: "Father, Flesh in Rags",
    img: "IQaq9NS.png",
    opts: {
      Album: ["MBIKMB"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "Strangers",
    img: "IQaq9NS.png",
    opts: {
      Album: ["MBKIMB"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "Strangers",
    img: "IQaq9NS.png",
    opts: {
      Album: ["MBIKMB"],
      stage: ["st5", "st6"]
    }
  },
  {
    name: "Lawns",
    img: "IQaq9NS.png",
    opts: {
      Album: ["MBIKMB"],
      stage: ["st6"]
    }
  },
  {
    name: "P.O.W.",
    img: "IQaq9NS.png",
    opts: {
      Album: ["MBIKMB"],
      stage: ["ex"]
    }
  },
  {
    name: "Open-Mouthed Boy",
    img: "IQaq9NS.png",
    opts: {
      Album: ["MBIKMB"],
      stage: ["st6"]
    }
  },
  {
    name: "My Boy (Twin Fantasy) (2011)",
    img: "9m9VsQa.png",
    opts: {
      Album: ["MTM"],
      stage: ["st1"]
    }
  },
  {
    name: "Beach Life-in-Death (2011)",
    img: "9m9VsQa.png",
    opts: {
      Album: ["MTM"],
      stage: ["st2"]
    }
  },
  {
    name: "Stop Smoking (2011)",
    img: "9m9VsQa.png",
    opts: {
      Album: ["MTM"],
      stage: ["st3", "ex"]
    }
  },
  {
    name: "Sober to Death (2011)",
    img: "9m9VsQa.png",
    opts: {
      Album: ["MTM"],
      stage: ["st4"]
    }
  },
  {
    name: "Nervous Young Inhumans (2011)",
    img: "9m9VsQa.png",
    opts: {
      Album: ["MTM"],
      stage: ["st5"]
    }
  },
  {
    name: "Bodys (2011)",
    img: "9m9VsQa.png",
    opts: {
      Album: ["MTM"],
      stage: ["st6", "ex"]
    }
  },
  {
    name: "Cute Thing (2011)",
    img: "9m9VsQa.png",
    opts: {
      Album: ["MTM"],
      stage: ["ex"]
    }
  },
  {
    name: "High to Death (2011)",
    img: "9m9VsQa.png",
    opts: {
      Album: ["MTM"],
      stage: ["st1"]
    }
  },
  {
    name: "Famous Prophets (Minds) (2011)",
    img: "9m9VsQa.png",
    opts: {
      Album: ["MTM"],
      stage: ["st2"]
    }
  },
  {
    name: "Twin Fantasy (Those Boys) (2011)",
    img: "9m9VsQa.png",
    opts: {
      Album: ["MTM"],
      stage: ["st3"]
    }
  },
  {
    name: "Romantic Theory",
    img: "jpkwuqA.png",
    opts: {
      Album: ["Mono"],
      stage: ["st4"]
    }
  },
  {
    name: "Misheard Lyrics",
    img: "jpkwuqA.png",
    opts: {
      Album: ["Mono"],
      stage: ["st5"]
    }
  },
  {
    name: "Times to Die",
    img: "jpkwuqA.png",
    opts: {
      Album: ["Mono"],
      stage: ["st5"]
    }
  },
  {
    name: "Overexposed (Enjoy)",
    img: "jpkwuqA.png",
    opts: {
      Album: ["Mono"],
      stage: ["st6", "ex"]
    }
  },
  {
    name: "Los Borrachos",
    img: "jpkwuqA.png",
    opts: {
      Album: ["Mono"],
      stage: ["st6"]
    }
  },
  {
    name: "Souls",
    img: "jpkwuqA.png",
    opts: {
      Album: ["Mono"],
      stage: ["st6"]
    }
  },
  {
    name: "Maud Gone",
    img: "jpkwuqA.png",
    opts: {
      Album: ["Mono"],
      stage: ["st1"]
    }
  },
  {
    name: "Sleeping With Strangers",
    img: "jpkwuqA.png",
    opts: {
      Album: ["Mono"],
      stage: ["st2"]
    }
  },
  {
    name: "Anchorite (Love You Very Much)",
    img: "jpkwuqA.png",
    opts: {
      Album: ["Mono"],
      stage: ["st3"]
    }
  },
  {
    name: "It's Only Sex",
    img: "t1MC69J.png",
    opts: {
      Album: ["SWL"],
      stage: ["st4"]
    }
  },
  {
    name: "Reuse the Cels",
    img: "t1MC69J.png",
    opts: {
      Album: ["SWL"],
      stage: ["st5"]
    }
  },
  {
    name: "I Hate Living",
    img: "t1MC69J.png",
    opts: {
      Album: ["SWL"],
      stage: ["st6"]
    }
  },
  {
    name: "Devil Moon",
    img: "t1MC69J.png",
    opts: {
      Album: ["SWL"],
      stage: ["ex"]
    }
  },
  {
    name: "Oh! Starving",
    img: "t1MC69J.png",
    opts: {
      Album: ["SWL"],
      stage: ["st1"]
    }
  },
  {
    name: "Endpiece",
    img: "0hTbeLm.png",
    opts: {
      Album: ["DM"],
      stage: ["st2"]
    }
  },
  {
    name: "Please Mr Pilot",
    img: "0hTbeLm.png",
    opts: {
      Album: ["DM"],
      stage: ["st3"]
    }
  },
  {
    name: "2:24",
    img: "0hTbeLm.png",
    opts: {
      Album: ["DM"],
      stage: ["st4"]
    }
  },
  {
    name: "The Hard Part",
    img: "0hTbeLm.png",
    opts: {
      Album: ["DM"],
      stage: ["st5", "st6", "ex"]
    }
  },
  {
    name: "Sound Man / Low Fidelity",
    img: "0hTbeLm.png",
    opts: {
      Album: ["DM"],
      stage: ["st5"]
    }
  },
  {
    name: "Napolean (March Into Russia)",
    img: "0hTbeLm.png",
    opts: {
      Album: ["DM"],
      stage: ["st6"]
    }
  },
  {
    name: "Drunk on a Work Night",
    img: "0hTbeLm.png",
    opts: {
      Album: ["DM"],
      stage: ["ex"]
    }
  },
  {
    name: "Love Me Too Much",
    img: "0hTbeLm.png",
    opts: {
      Album: ["DM"],
      stage: []
    }
  },
  { 
    name: "Dream: Encounter on Smoke Mountain",
    img: "0hTbeLm.png", 
    opts: {
      Album: ["DM"],
      stage: [],
      nameless: true
    } 
  },
  {
    name: "Sinner",
    img: "0hTbeLm.png",
    opts: {
      Album: ["DM"],
      stage: []
    }
  },
  {
    name: "When Will My Man Come?",
    img: "0hTbeLm.png",
    opts: {
      Album: ["DM"],
      stage: []
    }
  },
  {
    name: "Hi Life",
    img: "0hTbeLm.png",
    opts: {
      Album: ["DM"],
      stage: []
    }
  },
  {
    name: "AC",
    img: "0hTbeLm.png",
    opts: {
      Album: ["DM"],
      stage: []
    }
  },
  {
    name: "If Not, Then Oh Well",
    img: "0hTbeLm.png",
    opts: {
      Album: ["DM"],
      stage: []
    }
  },
  {
    name: "Memories",
    img: "0hTbeLm.png",
    opts: {
      Album: ["DM"],
      stage: ["st5"]
    }
  },
  {
    name: "KS",
    img: "0hTbeLm.png",
    opts: {
      Album: ["DM"],
      stage: []
    }
  },
  {
    name: "Unfinished: Pain Star (If Heaven Is Full of People...)",
    img: "0hTbeLm.png",
    opts: {
      Album: ["DM"],
      stage: []
    }
  },
  {
    name: "Boxing Day",
    img: "exgnG2G.png",
    opts: {
      Album: ["NYM"],
      stage: ["st4"],
      pc98: true 
    }
  },
  {
    name: "We Can't Afford (Your Depression Anymore)",
    img: "exgnG2G.png",
    opts: {
      Album: ["NYM"],
      stage: ["st1"]
    }
  },
  {
    name: "Don't Remind Me",
    img: "exgnG2G.png",
    opts: {
      Album: ["NYM"],
      stage: ["st3", "st5", "st6"]
    }
  },
  {
    name: "Homes",
    img: "exgnG2G.png",
    opts: {
      Album: ["NYM"],
      stage: ["st5"]
    }
  },
  {
    name: "Afterglow",
    img: "exgnG2G.png",
    opts: {
      Album: ["NYM"],
      stage: ["st5"]
    }
  },
  {
    name: "Jerks",
    img: "exgnG2G.png",
    opts: {
      Album: ["NYM"],
      stage: ["st6"]
    }
  },
  {
    name: "Broken Birds (rest in Pieces)",
    img: "exgnG2G.png",
    opts: {
      Album: ["NYM"],
      stage: ["st6"]
    }
  },
  {
    name: "The Gun Song",
    img: "exgnG2G.png",
    opts: {
      Album: ["NYM"],
      stage: ["st1", "ex"]
    }
  },
  {
    name: "Goodbye Love",
    img: "exgnG2G.png",
    opts: {
      Album: ["NYM"],
      stage: ["st2"]
    }
  },
  {
    name: "I Can Play the Piano",
    img: "exgnG2G.png",
    opts: {
      Album: ["NYM"],
      stage: ["st4"],
      pc98: true
    }
  },
  { 
    name: "Crows (Rest in Bigger Pieces Mix)", 
    img: "3iNNL0c.png", 
      opts: {
        Album: ["NYM"],
        stage: []
     } 
    },
  {
    name: "I Wanna Sweat",
    img: "exgnG2G.png",
    opts: {
      Album: ["NYM"],
      stage: []
    }
  },
  {
    name: "Bruning Man",
    img: "exgnG2G.png",
    opts: {
      Album: ["NYM"],
      stage: []
    }
  },
  {
    name: "Dreams Fall Hard",
    img: "exgnG2G.png",
    opts: {
      Album: ["NYM"],
      stage: []
    }
  },
  {
    name: "Plane Crash Blues (I Can't Play the Piano)",
    img: "exgnG2G.png",
    opts: {
      Album: ["NYM"],
      stage: ["st5"]
    }
  },
  {
    name: "Big Jacket",
    img: "exgnG2G.png",
    opts: {
      Album: ["NYM"],
      stage: ["st6"]
    }
  },
  {
    name: "Death at the Movies",
    img: "exgnG2G.png",
    opts: {
      Album: ["NYM"],
      stage: []
    }
  },
  {
    name: "Jus' Tired",
    img: "exgnG2G.png",
    opts: {
      Album: ["NYM"],
      stage: ["st1"]
    }
  },
  {
    name: "Some Strange Angel",
    img: "exgnG2G.png",
    opts: {
      Album: ["NYM"],
      stage: ["st2"]
    }
  },
  {
    name: "Knife in the Coffee",
    img: "exgnG2G.png",
    opts: {
      Album: ["NYM"],
      stage: ["st3"]
    }
  },
  {
    name: "Sunburned Shirts",
    img: "3AdXUWj.png",
    opts: {
      Album: ["ToS"],
      stage: ["st5", "st6"],
      pc98: true 
    }
  },
  {
    name: "The Drum",
    img: "3AdXUWj.png",
    opts: {
      Album: ["ToS"],
      stage: ["ex"]
    }
  },
  {
    name: "Something Soon",
    img: "3AdXUWj.png",
    opts: {
      Album: ["ToS"],
      stage: ["ex"]
    }
  },
  {
    name: "No Passion",
    img: "3AdXUWj.png",
    opts: {
      Album: ["ToS"],
      stage: ["st1"]
    }
  },
  {
    name: "Times to Die",
    img: "3AdXUWj.png",
    opts: {
      Album: ["ToS"],
      stage: ["st2", "st4"]
    }
  },
  {
    name: "Psst, Teenagers, Take Off Your Clothes",
    img: "3AdXUWj.png",
    opts: {
      Album: ["ToS"],
      stage: ["st3", "ex"],
      pc98: true
    }
  },
  {
    name: "Strangers",
    img: "3AdXUWj.png",
    opts: {
      Album: ["ToS"],
      stage: ["st4"]
    }
  },
  {
    name: "Maud Gone",
    img: "3AdXUWj.png",
    opts: {
      Album: ["ToS"],
      stage: ["st5"]
    }
  },
  {
    name: "Los borrachos (I Don't Have Any Hope Left, but the Weather Is Nice)",
    img: "3AdXUWj.png",
    opts: {
      Album: ["ToS"],
      stage: ["st6"]
    }
  },
  {
    name: "Bad Role Models, Old Idols Exhumed (Psst, Teenagers, Put Your Clothes Back On)",
    img: "3AdXUWj.png",
    opts: {
      Album: ["ToS"],
      stage: [],
      notgirl: true 
    }
  },
  {
    name: "Oh! Starving",
    img: "3AdXUWj.png",
    opts: {
      Album: ["ToS"],
      stage: ["st3"],
      notgirl: true 
    }
  },
  {
    name: "The Ending of Dramamine",
    img: "kpwAcpi.png",
    opts: {
      Album: ["HTLT"],
      stage: [],
      notgirl: true 
    }
  },
  {
    name: "Beast Monster Thing (Love Isn't Love Enough)",
    img: "kpwAcpi.png",
    opts: {
      Album: ["HTLT"],
      stage: ["st1"],
      notgirl: true 
    }
  },
  {
    name: "Kimochi Warui (When? When? When? When? When? When? When?) ",
    img: "kpwAcpi.png",
    opts: {
      Album: ["HTLT"],
      stage: ["st3"],
      notgirl: true 
    }
  },
  {
    name: "I-94 W (832 mi)",
    img: "kpwAcpi.png",
    opts: {
      Album: ["HTLT"],
      stage: ["ex"],
      notgirl: true 
    }
  },
  {
    name: "You're in Love With Me",
    img: "kpwAcpi.png",
    opts: {
      Album: ["HTLT"],
      stage: ["st6"],
      notgirl: true,
      nameless: true
    }
  },
  {
    name: "America (Never Been)",
    img: "kpwAcpi.png",
    opts: {
      Album: ["HTLT"],
      stage: [],
      notgirl: true 
    }
  },
  {
    name: "I Want You to Know That I'm Awake / I HOpe That You're Asleep",
    img: "kpwAcpi.png",
    opts: {
      Album: ["HTLT"],
      stage: [],
      notgirl: true,
      nameless: true
    }
  },
  {
    name: "Is This Dust Really From the Titanic?",
    img: "kpwAcpi.png",
    opts: {
      Album: ["HTLT"],
      stage: [],
      notgirl: true 
    }
  }, 
  {
    name: "Hey, Space Cadet (Beast Monster Thing in Space)",
    img: "kpwAcpi.png",
    opts: {
      Album: ["HTLT"],
      stage: ["st5"]
    }
  },
  {
    name: "Fill in the Blank",
    img: "Qc0XzAG.jpg",
    opts: {
      Album: ["ToD"],
      stage: ["st5"]
    }
  },
  {
    name: "Vincent",
    img: "Qc0XzAG.jpg",
    opts: {
      Album: ["ToD"],
      stage: ["st5"]
    }
  },
  {
    name: "Destroyed by Hippie Powers",
    img: "Qc0XzAG.jpg",
    opts: {
      Album: ["ToD"],
      stage: ["st5"]
    }
  },
  {
    name: "(Joe Gets Kicked Out of School for Using) Drugs With Friends (But Says This Isn't a Problem)",
    img: "Qc0XzAG.jpg",
    opts: {
      Album: ["ToD"],
      stage: ["st5"]
    }
  },
  {
    name: "Not What I Needed",
    img: "Qc0XzAG.jpg",
    opts: {
      Album: ["ToD"],
      stage: ["st5"]
    }
  },
  {
    name: "Drunk Drivers / Killer Whales",
    img: "Qc0XzAG.jpg",
    opts: {
      Album: ["ToD"],
      stage: ["st5"]
    }
  },
  {
    name: "1937 State Park",
    img: "Qc0XzAG.jpg",
    opts: {
      Album: ["ToD"],
      stage: ["st5"]
    }
  },
  {
    name: "Unforgiving Girl (She's Not An)",
    img: "Qc0XzAG.jpg",
    opts: {
      Album: ["ToD"],
      stage: ["st5"]
    }
  },
  {
    name: "Cosmic Hero",
    img: "Qc0XzAG.jpg",
    opts: {
      Album: ["ToD"],
      stage: ["st5"]
    }
  },
  {
    name: "The Ballad of the Costa Concordia",
    img: "Qc0XzAG.jpg",
    opts: {
      Album: ["ToD"],
      stage: ["st5"]
    }
  },
  {
    name: "Connect the Dots (The Saga of Frank Sinatra)",
    img: "Qc0XzAG.jpg",
    opts: {
      Album: ["ToD"],
      stage: ["st5"]
    }
  },
  {
    name: "Joe Goes to School",
    img: "Qc0XzAG.jpg",
    opts: {
      Album: ["ToD"],
      stage: ["st5"]
    }
  },
  {
    name: "My Boy (Twin Fantasy) (2018)",
    img: "9m9VsQa.png",
    opts: {
      Album: ["FTF"],
      stage: ["st5"]
    }
  },
  {
    name: "Beach Life-in-Death (2018)",
    img: "9m9VsQa.png",
    opts: {
      Album: ["FTF"],
      stage: ["st5"]
    }
  },
  {
    name: "Stop Smoking (We Love You) (2018)",
    img: "9m9VsQa.png",
    opts: {
      Album: ["FTF"],
      stage: ["st5"]
    }
  },
  {
    name: "Sober to Death (2018)",
    img: "9m9VsQa.png",
    opts: {
      Album: ["FTF"],
      stage: ["st5"]
    }
  },
  {
    name: "Nervous Young Inhuman (2018)",
    img: "9m9VsQa.png",
    opts: {
      Album: ["FTF"],
      stage: ["st5"]
    }
  },
  {
    name: "Bodys (2018)",
    img: "9m9VsQa.png",
    opts: {
      Album: ["FTF"],
      stage: ["st5"]
    }
  },
  {
    name: "Cute Thing (2018)",
    img: "9m9VsQa.png",
    opts: {
      Album: ["FTF"],
      stage: ["st5"]
    }
  },
  {
    name: "High to Death (2018)",
    img: "9m9VsQa.png",
    opts: {
      Album: ["FTF"],
      stage: ["st5"]
    }
  },
  {
    name: "Famous Prophets (Stars) (2018)",
    img: "9m9VsQa.png",
    opts: {
      Album: ["FTF"],
      stage: ["st5"]
    }
  },
  {
    name: "Twin Fantasy (Those Boys) (2018)",
    img: "3AdXUWj.png",
    opts: {
      Album: ["FTF"],
      stage: ["st5"]
    }
  },
  {
    name: "Weightlifters",
    img: "keSAmzg.png",
    opts: {
      Album: ["MADLO"],
      stage: ["st5"]
    }
  },
  {
    name: "Can't Cool Me Down",
    img: "keSAmzg.png",
    opts: {
      Album: ["MADLO"],
      stage: ["st5"]
    }
  },
  {
    name: "Deadlines (Hostile)",
    img: "keSAmzg.png",
    opts: {
      Album: ["MADLO"],
      stage: ["st5"]
    }
  },
  {
    name: "Hollywood",
    img: "keSAmzg.png",
    opts: {
      Album: ["MADLO"],
      stage: ["st5"]
    }
  },
  {
    name: "Hymn (Remix)",
    img: "keSAmzg.png",
    opts: {
      Album: ["MADLO"],
      stage: ["st5"]
    }
  },
  {
    name: "Martin",
    img: "keSAmzg.png",
    opts: {
      Album: ["MADLO"],
      stage: ["st5"]
    }
  },
  {
    name: "Deadlines (Thoughtful)",
    img: "keSAmzg.png",
    opts: {
      Album: ["MADLO"],
      stage: ["st5"]
    }
  }, {
    name: "What's With You Lately",
    img: "keSAmzg.png",
    opts: {
      Album: ["MADLO"],
      stage: ["st5"]
    }
  },
  {
    name: "Life Worth Missing",
    img: "keSAmzg.png",
    opts: {
      Album: ["MADLO"],
      stage: ["st5"]
    }
  },
  {
    name: "There Must Be More Than Blood",
    img: "keSAmzg.png",
    opts: {
      Album: ["MADLO"],
      stage: ["st5"]
    }
  },
  {
    name: "Famous",
    img: "keSAmzg.png",
    opts: {
      Album: ["MADLO"],
      stage: ["st5"]
    }
  },
  {
    name: "Get Better Song Titles Punk",
    img: "Aqz2WtGh.jpg",
    opts: {
      Album: ["L"],
      stage: ["st5"]
    }
  },
  {
    name: "100 Minutes of Solitude",
    img: "Aqz2WtGh.jpgg",
    opts: {
      Album: ["L"],
      stage: ["st5"]
    }
  },
  {
    name: "War Is Coming (If You Want it)",
    img: "Aqz2WtGh.jpg",
    opts: {
      Album: ["L"],
      stage: ["st5"]
    }
  },
  {
    name: "Does It Feel Good (To Say Goodbye?)",
    img: "Aqz2WtGh.jpg",
    opts: {
      Album: ["L"],
      stage: ["st5"]
    }
  },
  {
    name: "Fallen Horses",
    img: "Aqz2WtGh.jpg",
    opts: {
      Album: ["L"],
      stage: ["st5"]
    }
  },
];
