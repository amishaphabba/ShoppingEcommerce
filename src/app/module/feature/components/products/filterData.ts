export const filters=[
    {
        id:"color",
        name:"Color",
        options:[
            {value: "white", label: "white"},
            {value: "beige", label: "beige"},
            {value: "blue", label: "blue"},
            {value: "brown", label: "brown"},
            {value: "green", label: "green"},
            {value: "purple", label: "purple"}
        ]
    },
    {
        id:"size",
        name:"Size",
        options:[
            {value: "S", label: "S"},
            {value: "M", label: "M"},
            {value: "L", label: "L"},
            // {value: "XL", label: "XL"},
        ]
    }
]

    export const singleFilter=[
    {
        id:"price",
        name:"Price",
        options:[
            {value: "0-500", label: "below 500"},
            {value: "500-1000", label: "500-1000"},
            {value: "1000-2000", label: "1000-2000"},
            {value: "2000-5000", label: "2000-5000"},
            {value: "5000-100000", label: "above-5000"},
        ]
    },
    {
        id:"discount",
        name:"Discount Range",
        options:[
            {
                value:"10",
                label:"10% and above"
            },
            {
                value:"30",
                label:"30% and above"
            },
            {
                value:"50",
                label:"50% and above"
            },
            {
                value:"70",
                label:"70% and above"
            },
        ]
    },
    // {
    //     id:"stock",
    //     name:"Availability",
    //     options:[
    //         {value:"in_stock", label:"In Stock"},
    //         {value:"out_of_stock", label:"Out Of Stock"}
    //     ]
    // },
    // {
    //     id:"sort",
    //     name:"sort",
    //     options:[
    //         {value:"price_low", label:"price_low"},
    //         {value:"price_high", label:"price_high"}
    //     ]
    // }
]
