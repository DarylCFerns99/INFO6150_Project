import * as actions from "../actions/actionTypes"

const data = {
    "_id":{
    "$oid":"6568d1a88b63d0ae9aabf96c"
    },
    "name":"Skadden, Arps, Slate, Meagher & Flom LLP",
    "address":"500 Boylston St, Boston, MA 02116, USA",
    "restaurant_id":"ChIJdz88sIRw44kRCx-ZfEs7vGA",
    "curbside_pickup":null,
    "delivery":null,
    "dine_in":null,
    "takeout":null,
    "reservable":false,
    "website":"https://www.skadden.com/",
    "map_link":"https://maps.google.com/?cid=6970511518661680907",
    "phone_number":"(617) 573-4800",
    "rating":{
    "$numberDouble":"4.3"
    },
    "reviews":[
    {
    "author_name":"Kemakolam Njoku",
    "author_url":"https://www.google.com/maps/contrib/102430203685015486483/reviews",
    "language":"en",
    "original_language":"en",
    "profile_photo_url":"https://lh3.googleusercontent.com/a/ACg8ocLwKxEx-PeWbqn-IwMN9miwnLsgvipGXayBB-xTheLd=s128-c0x00000000-cc-rp-mo-ba2",
    "rating":{
    "$numberInt":"4"
    },
    "relative_time_description":"5 years ago",
    "text":"huge, cold, clean, and slightly unwelcoming...the perfect law firm in other words",
    "time":{
    "$numberInt":"1539348778"
    },
    "translated":false
    },
    {
    "author_name":"Joe Molosky",
    "author_url":"https://www.google.com/maps/contrib/114607062069511121430/reviews",
    "profile_photo_url":"https://lh3.googleusercontent.com/a-/ALV-UjV3kkcqVMrUe6pNGGyeopt4nGJnFN_OLeo-ajlmbqllTOI=s128-c0x00000000-cc-rp-mo-ba2",
    "rating":{
    "$numberInt":"5"
    },
    "relative_time_description":"5 years ago",
    "text":"",
    "time":{
    "$numberInt":"1525932213"
    },
    "translated":false
    },
    {
    "author_name":"Mel wells",
    "author_url":"https://www.google.com/maps/contrib/107703690278882393524/reviews",
    "profile_photo_url":"https://lh3.googleusercontent.com/a-/ALV-UjVcjgcvz8Ji5KbrRJTvEpjYcGC6pkBuxeDPG032JPG7sVI=s128-c0x00000000-cc-rp-mo",
    "rating":{
    "$numberInt":"4"
    },
    "relative_time_description":"4 years ago",
    "text":"",
    "time":{
    "$numberInt":"1569640132"
    },
    "translated":false
    }
    ],
    "vicinity":"500 Boylston Street, Boston",
    "user_ratings_total":{
    "$numberInt":"3"
    },
    "photos":[
    {
    "height":{
    "$numberInt":"628"
    },
    "html_attributions":[
    "<a href=\"https://maps.google.com/maps/contrib/102962343223320627191\">Skadden, Arps, Slate, Meagher & Flom LLP</a>"
    ],
    "photo_reference":"AWU5eFi67PGVSnqGviDA4vnmae2NyiIaPXTjYGJDvJWJV-B2oZFzmkbtaUmdbFMDro-CRzFAQZy7TRPfV8Iq-6AQj0Woy2L97ZyIyQfpC26PjGl4vyvmYFSETRHmANK7EOLNAf7N6esLPJQsya_WiRjt5drys3rqOFlRpVWUUmABE2fhLADe",
    "width":{
    "$numberInt":"1116"
    }
    },
    {
    "height":{
    "$numberInt":"800"
    },
    "html_attributions":[
    "<a href=\"https://maps.google.com/maps/contrib/102962343223320627191\">Skadden, Arps, Slate, Meagher & Flom LLP</a>"
    ],
    "photo_reference":"AWU5eFjCsZ9ZHKpwADNVxRGwDPtlCRtJ7x97tdcDw-0lhDQmPortHxlgfw36m57LhrffLc-EyQc82cCw0Gv4TbxSVfILLpryfcwYkpaGweY4OumnY4GX5b8xAStpBOxhV8l05fbGGnaDYEpd6Ta5mC8zkQvGBALAjWqN5_oXyZbtbexR_IGn",
    "width":{
    "$numberInt":"800"
    }
    }
    ],
    "opening_hours":{
    "open_now":true,
    "periods":[
    {
    "close":{
    "date":"2023-12-06",
    "day":{
    "$numberInt":"3"
    },
    "time":"2359",
    "truncated":true
    },
    "open":{
    "date":"2023-11-30",
    "day":{
    "$numberInt":"4"
    },
    "time":"0000",
    "truncated":true
    }
    }
    ],
    "weekday_text":[
    "Monday: Open 24 hours",
    "Tuesday: Open 24 hours",
    "Wednesday: Open 24 hours",
    "Thursday: Open 24 hours",
    "Friday: Open 24 hours",
    "Saturday: Open 24 hours",
    "Sunday: Open 24 hours"
    ]
    },
    "utc_offset":{
    "$numberInt":"-300"
    },
    "licenseno":"126243"
    }

const initialState = {
    restaurants : [
        {
           data
        }
    ],
}

const restaurantsReducers = (state = initialState, action) => {
    switch(action.type) {
        case actions.ADD_ALL_DINING_RESTAURANTS: {
            return ({
                ...(action?.payload ?? {})
            })
        }
        case actions.ADD_ALL_DELIVERY_RESTAURANTS: {
            return ({
                ...(action?.payload ?? {})
            })
        }
        case actions.LOGOUT:
            return initialState
        default:
            return state
    }
}




export default restaurantsReducers