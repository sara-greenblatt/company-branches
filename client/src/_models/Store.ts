export interface Store {
    store_id: number,
    store_region: string,
    store_title: string,
    store_address: string,
    store_phone: string,
    gps_location: string,
    emp_in_need: boolean,
    emp_interview: string,
    emp_contact: string,
    features: number,
    city: string,
    zip_code: number
}

// {
//     "store_id": 1,
//     "store_region": "1",
//     "store_title": "קניון אילון - קומת הכניסה",
//     "store_address": "אבא הלל 301",
//     "store_phone": "052-9440001",
//     "gps_location": "32.1005,34.827",
//     "emp_in_need": true,
//     "emp_interview": "נא להשאיר פרטים ובמידת הצורך יצרו איתך קשר לתיאום ראיון עבודה",
//     "emp_contact": "אבא הלל 301 רמת-גן",
//     "features": 2080592,
//     "city": "רמת גן    ",
//     "zip_code": "5259408"
//   },