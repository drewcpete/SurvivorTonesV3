import React from "react";


let seasonChart = new Chart(mychart , {
    type:'bar',
    data:{
        labels:["Cook Islands", "Fiji", "China", "Micronesia", "Gabon", "Tocantis", "Samoa", "Heroes vs. Villians", "Nicaragua", "Redemption Island", "South Pacific", "One World", "Philippines", "Caramoan", "Blood vs. Water", "Cagayan", "San Juan del Sur", "Worlds Apart", "Cambodia", "Kaoh Rong", "Millennials vs Gen X", "Game Changers", "Heroes vs. Healers vs. Hustlers", "Ghost Island", "David vs. Goliath", "Edge of Extinction", "Island of the Idols"],
        datasets:[{
            label: "Tone",
            data:[
                .61,
                .54,
                .33,
                .77,
                .44,
                0,
                0,
                .61,
                .54,
                .33,
                .77,
                .44,
                0,
                .61,
                .54,
                .33,
                .77,
                .44,
                0,
                .61,
                .54,
                .33,
                .77,
                .44,
                0,
                .61,
                .54,
                .33,
                .77,
                .44,
                0,
                .61,
                .54,
                .33,
                .77,
                .44,
                0,
                .61,
                .54,
                .33,
            
            ],
            backgroundColor:"green"
        }],
    },
    options:{}
})