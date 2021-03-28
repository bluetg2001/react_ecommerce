const initialState = {
    // 주석으로 사용한 컴포넌트를 표시

    // Home
    final_offer: {
        title: 'Final Offer',
        percents: '50%',
        context: 'furniture items!'
    },

    new_arrivals: {
        title: 'New Arrivals',
    },

    best_sellers: {
        title: 'Our Bestsellers',
    },

    offers: {
        title: 'Special Offers'
    },

    journal: {
        title: 'Journal'
    },


    item: [{
            title: 'Basic Crew Neck Tee',
            price: '$44.00',
            detail: 'Black'
        },
        {
            title: 'Basic Crew Neck Tee',
            price: '$44.00',
            detail: 'Black'
        },
        {
            title: 'Basic Crew Neck Tee',
            price: '$44.00',
            detail: 'Black'
        },
        {
            title: 'Basic Crew Neck Tee',
            price: '$44.00',
            detail: 'Black'
        },
    ],


    //Sale 
    phones: {
        title: 'Phones Sale',
        percents: '30%',
        context: 'phones'
    },

    sales: [{
            title: 'Electronics Sale',
            percents: '70%',
            context: 'electronics'
        },
        {
            title: 'Furniture Offer',
            percents: '50%',
            context: 'furniture items'
        },
    ],

    // Header
    menus: [{
            title: 'Home',
            path: '/',
        },
        {
            title: 'Shop',
            path: '/Shop',
        },
        {
            title: 'About',
            path: '/About',
        },
        {
            title: 'Contacts',
            path: '/Contacts',
        },
        {
            title: 'Journal',
            path: '/Journal',
        },

    ],

    // Footer
    shop: [{
            title: 'Category 1',
            path: '/',
        },
        {
            title: 'Category 2',
            path: '/',
        },
        {
            title: 'Category 3',
            path: '/',
        },
        {
            title: 'Category 4',
            path: '/',
        },
        {
            title: 'Category 5',
            path: '/',
        },
    ],

    help: [{
            title: 'Privacy Policy',
            path: '/',
        },
        {
            title: 'Terms & Conditions',
            path: '/',
        },
        {
            title: 'Speical E-shop',
            path: '/',
        },
        {
            title: 'Shipping',
            path: '/',
        },
        {
            title: 'Secure Payments',
            path: '/',
        },
    ],

    test: [{
        menus: [{
                title: 'Home',
                path: '/',
            },
            {
                title: 'Shop',
                path: '/',
            },
            {
                title: 'About',
                path: '/',
            },
            {
                title: 'Contacts',
                path: '/',
            },
            {
                title: 'Journal',
                path: '/',
            },

        ],

        shop: [{
                title: 'Category 1',
                path: '/',
            },
            {
                title: 'Category 2',
                path: '/',
            },
            {
                title: 'Category 3',
                path: '/',
            },
            {
                title: 'Category 4',
                path: '/',
            },
            {
                title: 'Category 5',
                path: '/',
            },
        ],

        help: [{
                title: 'Privacy Policy',
                path: '/',
            },
            {
                title: 'Terms & Conditions',
                path: '/',
            },
            {
                title: 'Speical E-shop',
                path: '/',
            },
            {
                title: 'Shipping',
                path: '/',
            },
            {
                title: 'Secure Payments',
                path: '/',
            },
        ],
    }],

    // About
    btn: [{
            title: 'Our Brands',
            path: '/'
        },
        {
            title: 'Our Stores',
            path: '/'
        },
    ],

    // Shop

    category: {
        title: 'Shop by Category'
    },
    color: {
        title: 'Shop by Color'
    },
    brand: {
        title: 'Shop by Brand'
    },
    price: {
        title: 'Shop by Price'
    },


    contents: [{

            title: 'Basic Crew Neck Tee',
            price: '44',
            color: 'Black',
            type: 'discount',
            percent: '10'
        },
        {

            title: 'Basic Crew Neck Tee',
            price: '44',
            color: 'Black',
            type: 'new'
        },
        {

            title: 'Basic Crew Neck Tee',
            price: '44',
            color: 'Black',
            type: 'discount',
            percent: '30'
        },
        {

            title: 'Basic Crew Neck Tee',
            price: '44',
            color: 'Black',

        },
        {

            title: 'Basic Crew Neck Tee',
            price: '44',
            color: 'Black',

        },
        {

            title: 'Basic Crew Neck Tee',
            price: '44',
            color: 'Black',

        },
        {

            title: 'Basic Crew Neck Tee',
            price: '44',
            color: 'Black',

        },
        {

            title: 'Basic Crew Neck Tee',
            price: '44',
            color: 'Black',

        },
        {

            title: 'Basic Crew Neck Tee',
            price: '44',
            color: 'Black',

        },
        {

            title: 'Basic Crew Neck Tee',
            price: '44',
            color: 'Black',

        },
        {

            title: 'Basic Crew Neck Tee',
            price: '44',
            color: 'Black',

        },
        {

            title: 'Basic Crew Neck Tee',
            price: '44',
            color: 'Black',

        },
    ],

    // Journal
    journal: {
        articles: [{
                path : '/Journal/1',
                categories : 'Category',
                title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
            {
                path : '/Journal/2',
                categories : 'Category',
                title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
            {
                path : '/Journal/3',
                categories : 'Category',
                title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
            {
                path : '/Journal/4',
                categories : 'Category',
                title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
            {
                path : '/Journal/5',
                categories : 'Category',
                title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
            {   
                path : '/Journal/6',
                categories : 'Category',
                title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
            {
                path : '/Journal/7',
                categories : 'Category',
                title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
            {
                path : '/Journal/8',
                categories : 'Category',
                title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
            
        ],

        recent: [{
                front_txt: 'Lorem Ipsum is simply',
                behind_txt: 'dummy text of the printing and typesetting.'
            },
            {
                front_txt: 'Lorem Ipsum is simply',
                behind_txt: 'dummy text of the printing and typesetting.'
            },
            {
                front_txt: 'Lorem Ipsum is simply',
                behind_txt: 'dummy text of the printing and typesetting.'
            },
            {
                front_txt: 'Lorem Ipsum is simply',
                behind_txt: 'dummy text of the printing and typesetting.'
            },
            {
                front_txt: 'Lorem Ipsum is simply',
                behind_txt: 'dummy text of the printing and typesetting.'
            },
        ],

        archives: [{
            context: 'May 2019'
        }],

        categories: [{
                context: 'Category 1'
            },
            {
                context: 'Category 2'
            },
            {
                context: 'Category 3'
            },
            {
                context: 'Category 4'
            },
            {
                context: 'Category 5'
            },
        ],
        metas: [{
                context: 'Log in'
            },
            {
                context: 'Entries RSS'
            },
            {
                context: 'Comments RSS'
            },
        ]
    }
}



const layouts = (state = initialState, {
    type,
    payload
}) => {
    switch (type) {

        case '':
            return

        default:
            return state
    }
}
export default layouts