import _ from 'lodash';
import faker from "faker";


function getFaker() {
    let data = [];
    const fake = faker.helpers.createCard().posts[0];
    const text1 = `${fake.paragraph} ${fake.sentence}`;
    const text2 = `${fake.sentences} ${fake.words}`;
    data.push(text1);
    data.push(text2);
    return data;
}


export const shop_data = [
    {
        number: "01",
        position: 1,
        title: 'LINEN BLAZER',
        subtitle: 'Men’s outfit',
        is_green_border: true,
        is_green_fill: false,
        is_green_pattern: true,
        image: '/images/level4/item-1.jpg',
        content_data: {
            label: 'TOP',
            content_title: ["LINEN", "BLAZER"],
            content_subtitle: 'Kogi Cosby sweater ethical squid irony',
            content: getFaker(),
            content_image: ["/images/level4/content-1.jpg", "/images/level4/content-1.jpg"]
        }
    },
    {
        number: "02",
        position: 2,
        title: 'FREELIFT',
        subtitle: 'Men’s basics',
        is_green_border: true,
        is_green_fill: true,
        is_green_pattern: false,
        image: '/images/level4/item-2.jpg',
        content_data: {
            label: 'TOP',
            content_title: ["FREELIFT", ""],
            content_subtitle: 'Kogi Cosby sweater ethical squid irony',
            content: getFaker(),
            content_image: ["/images/level4/content-1.jpg", "/images/level4/content-1.jpg"]
        }
    },
    {
        number: "03",
        position: 3,
        title: 'SUPER SKINNY',
        subtitle: 'Men’s pattern shirts',
        is_green_border: true,
        is_green_fill: true,
        is_green_pattern: false,
        image: '/images/level4/item-3.jpg',
        content_data: {
            label: 'TOP',
            content_title: ["SUPER", "SKINNY"],
            content_subtitle: 'Kogi Cosby sweater ethical squid irony',
            content: getFaker(),
            content_image: ["/images/level4/content-1.jpg", "/images/level4/content-1.jpg"]
        }
    },
    {
        number: "04",
        position: 4,
        title: 'DENIM',
        subtitle: 'Men’s cadual',
        is_green_border: true,
        is_green_fill: false,
        is_green_pattern: true,
        image: '/images/level4/item-4.jpg',
        content_data: {
            label: 'TOP',
            content_title: ["DENIM", ""],
            content_subtitle: 'Kogi Cosby sweater ethical squid irony',
            content: getFaker(),
            content_image: ["/images/level4/content-1.jpg", "/images/level4/content-1.jpg"]
        }
    },
    {
        number: "05",
        position: 5,
        title: 'SWEATSHIRTS',
        subtitle: 'Men’s jacket',
        is_green_border: true,
        is_green_fill: false,
        is_green_pattern: true,
        image: '/images/level4/item-5.jpg',
        content_data: {
            label: 'TOP',
            content_title: ["SWEAT", "SHIRTS"],
            content_subtitle: 'Kogi Cosby sweater ethical squid irony',
            content: getFaker(),
            content_image: ["/images/level4/content-1.jpg", "/images/level4/content-1.jpg"]
        }
    },
    {
        number: "06",
        position: 6,
        title: 'VINTAGE DENIM',
        subtitle: 'Men’s classic',
        is_green_border: true,
        is_green_fill: true,
        is_green_pattern: false,
        image: '/images/level4/item-6.jpg',
        content_data: {
            label: 'TOP',
            content_title: ["VINTAGE", "DENIM"],
            content_subtitle: 'Kogi Cosby sweater ethical squid irony',
            content: [
                "In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew. Now hands are wanted here, and then again hands are wanted there. There is no staying in any one place; for at one and the same time everything has to be done everywhere. It is much the same with him who endeavors the description of the scene. ",
                "We must now retrace our way a little. It was mentioned that upon first breaking ground in the whale's back, the blubber-hook was inserted into the original hole there cut by the spades of the mates. But how did so clumsy and weighty a mass as that same hook get fixed in that hole? It was inserted there by my particular friend Queequeg, whose duty it was, as harpooneer."
            ],
            content_image: ["/images/level4/content-1.jpg", "/images/level4/content-2.jpg"]
        }
    },
    {
        number: "07",
        position: 7,
        title: 'EDITION',
        subtitle: 'Men’s shirts',
        is_green_border: true,
        is_green_fill: true,
        is_green_pattern: false,
        image: '/images/level4/item-7.jpg',
        content_data: {
            label: 'TOP',
            content_title: ["EDITION", ""],
            content_subtitle: 'Kogi Cosby sweater ethical squid irony',
            content: getFaker(),
            content_image: ["/images/level4/content-1.jpg", "/images/level4/content-2.jpg"]
        }
    },

    // {
    //     number: "08",
    //     position: 1,
    //     title: 'SWEATSHIRTS',
    //     subtitle: 'Men’s jacket',
    //     is_green_border: true,
    //     is_green_fill: false,
    //     is_green_pattern: true,
    //     image: '/images/level4/item-5.jpg',
    //     content_data: {
    //         content_title: ["", ""],
    //         subtitle: '',
    //         content: getFaker(),
    //         content_image: ["", ""]
    //     }
    // }
]