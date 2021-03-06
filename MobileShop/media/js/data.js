let sadImageUrl = `media/images/sad.png`;
let successImageUrl = `media/images/success.png`;
let cartImageUrl = `media/images/cart.png`;
let questionImageUrl = `media/images/question_mark.png`;
let sandClockImageUrl = `media/images/sand_clock.png`;
let avatar2ImageUrl = `media/images/avatar_2.png`;

let userAdmin = {
    user_name: `admin`,
    password: `12345`,
    product_choices: [],
    order_historys: [],
}

let users = [userAdmin, ];

let mobilesData = [{
        name: `iphone 11`,
        imageUrl: `"media/images/iphone-11-red.jpg"`,
        release_year: 2019,
        brand: `apple`,
        price: `21.990.000 vnd`,
        price_number: 21990000,
        promotions: [`Lên đời iPhone thời thượng, tài trợ đổi mới 3,000,000đ`, `Phụ kiện mua kèm giảm 20% (không áp dụng phụ kiện hãng, không áp dụng đồng thời KM khác)`, ],
        specs: {
            screen: 6.1,
            screen_type: `ips lcd`,
            os: `ios 13`,
            main_camera: `12 mp`,
            fron_camera: `12 mp`,
            cpu: `apple a13 bionic 6 core`,
            ram: `4 gb`,
            rom: `64 gb`,
            battery: `3110 mAh`,
            sim: `1 esim & 1 nano sim`,
        }
    }, {
        name: `Xiaomi Redmi 9`,
        imageUrl: `"media/images/xiaomi-redmi-9.jpg"`,
        release_year: 2019,
        brand: `xiaomi`,
        price: `3.590.000 vnd`,
        price_number: 3590000,
        promotions: [`Phụ kiện mua kèm giảm 20% (không áp dụng phụ kiện hãng, không áp dụng đồng thời KM khác)`, `Phụ kiện mua kèm giảm 20% (không áp dụng phụ kiện hãng, không áp dụng đồng thời KM khác)`, ],
        specs: {
            screen: 6.1,
            screen_type: `ips lcd`,
            os: `android`,
            main_camera: `12 mp`,
            fron_camera: `12 mp`,
            cpu: `MediaTek Helio G80 8 nhân`,
            ram: `4 gb`,
            rom: `64 gb`,
            battery: `5020 mAh`,
            sim: `2 nano sim`,
        }
    },
    {
        name: `POCO X3 NFC`,
        imageUrl: `"media/images/xiaomi-poco-x3-nfc.jpg"`,
        release_year: 2020,
        brand: `xiaomi`,
        price: `5.390.000 vnd`,
        price_number: 53900000,
        promotions: [`Tặng 2 suất mua Đồng hồ thời trang giảm 40% (không áp dụng thêm khuyến mãi khác)`, `Phụ kiện mua kèm giảm 20% (không áp dụng phụ kiện hãng, không áp dụng đồng thời KM khác)`, ],
        specs: {
            screen: 6.67,
            screen_type: `ips lcd`,
            os: `android`,
            main_camera: `main 48 mp, 13 mo`,
            fron_camera: `12 mp`,
            cpu: `Snapdragon 732G 8 nhân`,
            ram: `4 gb`,
            rom: `64 gb`,
            battery: `5160 mAh`,
            sim: `2 nano sim`,
        }
    },
    {
        name: `Galaxy A21s`,
        imageUrl: `"media/images/samsung-galaxy-a21s.jpg"`,
        release_year: 2019,
        brand: `samsung`,
        price: `3.190.000 vnd`,
        price_number: 3199000,
        promotions: [`Tặng 2 suất mua Đồng hồ thời trang giảm 40% (không áp dụng thêm khuyến mãi khác)`, `Tặng suất mua Đồng hồ Samsung Active 2 giảm đến 35%, Watch 3 giảm 25% (không kèm KM khác)`, ],
        specs: {
            screen: 6.5,
            screen_type: `ips lcd`,
            os: `android`,
            main_camera: `Chính 108 MP & Phụ 12 MP, 12 MP, cảm biến Laser AF`,
            fron_camera: `10 mp`,
            cpu: `	Exynos 990 8 nhân`,
            ram: `4 gb`,
            rom: `64 gb`,
            battery: `5000 mAh`,
            sim: `2 nano sim`,
        }
    },
    {
        name: `Galaxy Note 20 Ultra`,
        imageUrl: `"media/images/samsung-galaxy-note-20-ultra.jpg"`,
        release_year: 2019,
        brand: `samsung`,
        price: `29.990.000 vnd`,
        price_number: 29990000,
        promotions: [`Ưu đãi phòng chờ thương gia`, `Trả góp 0% thẻ tín dụng`, `Đặc quyền ưu đãi nâng cấp đến 6 triệu`, `Giảm giá 4,000,000đ qua quà tặng Galaxy`],
        specs: {
            screen: 6.9,
            screen_type: `Amoled`,
            os: `android`,
            main_camera: `Chính 108 MP & Phụ 12 MP, 12 MP, cảm biến Laser AF`,
            fron_camera: `10 mp`,
            cpu: `Exynos 990 8 nhân`,
            ram: `8 gb`,
            rom: `64 gb`,
            battery: `4500 mAh`,
            sim: `2 nano sim`,
        }
    },
    {
        name: `iPhone 11 Pro Max`,
        imageUrl: `"media/images/iphone-11-pro-max.jpg"`,
        release_year: 2019,
        brand: `apple`,
        price: `41.990.000 vnd`,
        price_number: 41990000,
        promotions: [`Giảm giá 3,000,000đ`, `Lên đời iPhone thời thượng, tài trợ đổi mới 3,000,000đ`, `Mua online thêm quà: Giảm giá 3,000,000đ (Không áp dụng kèm Thu cũ đổi mới)`],
        specs: {
            screen: 6.5,
            screen_type: `oled`,
            os: `ios`,
            main_camera: `3 camera 12 MP`,
            fron_camera: `12 mp`,
            cpu: `Apple A13 Bionic 6 nhân`,
            ram: `4 gb`,
            rom: `512 gb`,
            battery: `3969 mAh`,
            sim: `2 nano sim`,
        }
    },
    {
        name: `Galaxy Z Flip`,
        imageUrl: `"media/images/samsung-galaxy-z-flip.jpg"`,
        release_year: 2019,
        brand: `samsung`,
        price: `36.000.000 vnd`,
        price_number: 36000000,
        promotions: [`Giảm giá 7,000,000đ`, `Phiếu mua hàng Samsung 2,400,000đ`, `Trả góp 0% thẻ tín dụng`, `Thu cũ đổi mới - Lên đời siêu phẩm Z Flip`],
        specs: {
            screen: 6.7,
            screen_type: `oled`,
            os: `android`,
            main_camera: `Chính 12 MP & Phụ 12 MP`,
            fron_camera: `10 mp`,
            cpu: `Snapdragon 855+ 8 nhân`,
            ram: `8 gb`,
            rom: `256 gb`,
            battery: `3300 mAh`,
            sim: `2 nano sim`,
        }
    },
    {
        name: `Galaxy S20+`,
        imageUrl: `"./media/images/samsung-galaxy-s20-plus.jpg"`,
        release_year: 2019,
        brand: `samsung`,
        price: `16.990.000 vnd`,
        price_number: 16990000,
        promotions: [`Trả góp 0% thẻ tín dụng`, `Thu cũ đổi mới - Lên đời siêu phẩm Galaxy S20 Series `, `Tặng suất mua Đồng hồ Samsung Active 2 giảm đến 35%, Watch 3 giảm 25% (không kèm KM khác).`],
        specs: {
            screen: 6.7,
            screen_type: `amoled`,
            os: `android`,
            main_camera: `Chính 12 MP & Phụ 64 MP, 12 MP, TOF 3D`,
            fron_camera: `10 mp`,
            cpu: `Exynos 990 8 nhân`,
            ram: `8 gb`,
            rom: `128 gb`,
            battery: `4500 mAh`,
            sim: `2 nano sim`,
        }
    },
    {
        name: `iPhone SE 2020`,
        imageUrl: `"./media/images/iphone-se-2020-red.jpg"`,
        release_year: 2020,
        brand: `apple`,
        price: `12.990.000 vnd`,
        price_number: 12990000,
        promotions: [`Giảm giá 500,000đ `, `Lên đời iPhone thời thượng, tài trợ đổi mới 2,000,000`, `Tặng 2 suất mua Đồng hồ thời trang giảm 40% (không áp dụng thêm khuyến mãi khác)`],
        specs: {
            screen: 4.7,
            screen_type: `lcd`,
            os: `android`,
            main_camera: `Chính 12 MP`,
            fron_camera: `7 mp`,
            cpu: `Apple A13 Bionic 6 nhân`,
            ram: `3 gb`,
            rom: `64 gb`,
            battery: `1821 mAh`,
            sim: `1 nano sim, 1 esim`,
        }
    },
    {
        name: `iPhone 7 plus`,
        imageUrl: `"./media/images/iphone-7-plus-32gb-gold.jpg"`,
        release_year: 2016,
        brand: `apple`,
        price: `11.490.000 vnd`,
        price_number: 11490000,
        promotions: [`Giảm giá 1,000,000đ (Không áp dụng kèm Thu cũ đổi mới)`, `Giảm giá 500,000đ`, `Lên đời iPhone thời thượng, tài trợ đổi mới 2,000,000đ`],
        specs: {
            screen: 5.5,
            screen_type: `lcd`,
            os: `ios`,
            main_camera: `Chính 12 MP & Phụ 12 MP`,
            fron_camera: `7 mp`,
            cpu: `Apple A10 Fusion 4 nhân`,
            ram: `3 gb`,
            rom: `32 gb`,
            battery: `2900 mAh`,
            sim: `1 nano sim`,
        }
    },
    {
        name: `Galaxy Note 10 Lite`,
        imageUrl: `"./media/images/samsung-galaxy-note-10-lite.jpg"`,
        release_year: 2019,
        brand: `samsung`,
        price: `11.490.000 vnd`,
        price_number: 11490000,
        promotions: [`Thu cũ đổi mới - Lên đời Samsung sành điệu`, `Tặng suất mua Đồng hồ Samsung Active 2 giảm đến 35%, Watch 3 giảm 25% (không kèm KM khác).`, `Tặng 2 suất mua Đồng hồ thời trang giảm 40% (không áp dụng thêm khuyến mãi khác)`],
        specs: {
            screen: 6.7,
            screen_type: `amoled`,
            os: `android`,
            main_camera: `3 camera 12 MP`,
            fron_camera: `32 mp`,
            cpu: `Exynos 9810 8 nhân`,
            ram: `8 gb`,
            rom: `128 gb`,
            battery: `4500 mAh`,
            sim: `2 nano sim`,
        }
    },
    {
        name: `Xiaomi Redmi Note 9S`,
        imageUrl: `"./media/images/xiaomi-redmi-note-9s.jpg"`,
        release_year: 2019,
        brand: `xiaomi`,
        price: `5.990.000 vnd`,
        price_number: 5990000,
        promotions: [`Tặng 2 suất mua Đồng hồ thời trang giảm 40% (không áp dụng thêm khuyến mãi khác)`, `Phụ kiện mua kèm giảm 20% (không áp dụng phụ kiện hãng, không áp dụng đồng thời KM khác)`, ],
        specs: {
            screen: 6.67,
            screen_type: `ips lcd`,
            os: `android`,
            main_camera: `Chính 48 MP & Phụ 8 MP, 5 MP, 2 MP`,
            fron_camera: `16 mp`,
            cpu: `Snapdragon 720G 8 nhân`,
            ram: `6 gb`,
            rom: `128 gb`,
            battery: `5020 mAh`,
            sim: `2 nano sim`,
        }
    },
    {
        name: `Xiaomi Redmi 9C`,
        imageUrl: `"./media/images/xiaomi-redmi-9c.jpg"`,
        release_year: 2019,
        brand: `xiaomi`,
        price: `2.990.000 vnd`,
        price_number: 2990000,
        promotions: [`Tặng 2 suất mua Đồng hồ thời trang giảm 40% (không áp dụng thêm khuyến mãi khác)`, `Phụ kiện mua kèm giảm 20% (không áp dụng phụ kiện hãng, không áp dụng đồng thời KM khác)`, ],
        specs: {
            screen: 6.53,
            screen_type: `ips lcd`,
            os: `android`,
            main_camera: `Chính 13 MP & Phụ 2 MP, 2 MP`,
            fron_camera: `5 mp`,
            cpu: `MediaTek Helio G35 8 nhân`,
            ram: `3 gb`,
            rom: `64 gb`,
            battery: `5000 mAh`,
            sim: `2 nano sim`,
        }
    },
    {
        name: `Xiaomi Redmi 9A`,
        imageUrl: `"./media/images/xiaomi-redmi-9a-grey.jpg"`,
        release_year: 2019,
        brand: `xiaomi`,
        price: `1.990.000 vnd`,
        price_number: 1990000,
        promotions: [`Tặng 2 suất mua Đồng hồ thời trang giảm 40% (không áp dụng thêm khuyến mãi khác)`, `Phụ kiện mua kèm giảm 20% (không áp dụng phụ kiện hãng, không áp dụng đồng thời KM khác)`, ],
        specs: {
            screen: 6.53,
            screen_type: `ips lcd`,
            os: `android`,
            main_camera: `Chính 13 MP`,
            fron_camera: `5 mp`,
            cpu: `MediaTek Helio G25 8 nhân`,
            ram: `2 gb`,
            rom: `32 gb`,
            battery: `5000 mAh`,
            sim: `2 nano sim`,
        }
    },
    {
        name: `Xiaomi Redmi 8A`,
        imageUrl: `"./media/images/xiaomi-redmi-8A.jpg"`,
        release_year: 2019,
        brand: `xiaomi`,
        price: `2.290.000 vnd`,
        price_number: 2290000,
        promotions: [`Tặng 2 suất mua Đồng hồ thời trang giảm 40% (không áp dụng thêm khuyến mãi khác)`, `Phụ kiện mua kèm giảm 20% (không áp dụng phụ kiện hãng, không áp dụng đồng thời KM khác)`, ],
        specs: {
            screen: 6.53,
            screen_type: `ips lcd`,
            os: `android`,
            main_camera: `Chính 13 MP & Phụ 2 MP, 2 MP`,
            fron_camera: `5 mp`,
            cpu: `MediaTek Helio G35 8 nhân`,
            ram: `2 gb`,
            rom: `32 gb`,
            battery: `5000 mAh`,
            sim: `2 nano sim`,
        }
    },
    {
        name: `Galaxy A70`,
        imageUrl: `"./media/images/samsung-galaxy-a70.jpg"`,
        release_year: 2020,
        brand: `samsung`,
        price: `9.290.000 vnd`,
        price_number: 9290000,
        promotions: [`Tặng suất mua Đồng hồ Samsung Active 2 giảm đến 35%, Watch 3 giảm 25% (không kèm KM khác).`, `Phụ kiện mua kèm giảm 20% (không áp dụng phụ kiện hãng, không áp dụng đồng thời KM khác)`, ],
        specs: {
            screen: 6.7,
            screen_type: `super amoled`,
            os: `android`,
            main_camera: `Chính 32 MP & Phụ 8 MP, 5 MP`,
            fron_camera: `32 mp`,
            cpu: `Snapdragon 675 8 nhân`,
            ram: `6 gb`,
            rom: `128 gb`,
            battery: `4500 mAh`,
            sim: `2 nano sim`,
        }
    },
    {
        name: `Galaxy A01`,
        imageUrl: `"./media/images/samsung-galaxy-a01.jpg"`,
        release_year: 2020,
        brand: `samsung`,
        price: `2.790.000 vnd`,
        price_number: 2790000,
        promotions: [`Tặng suất mua Đồng hồ Samsung Active 2 giảm đến 35%, Watch 3 giảm 25% (không kèm KM khác).`, `Phụ kiện mua kèm giảm 20% (không áp dụng phụ kiện hãng, không áp dụng đồng thời KM khác)`, ],
        specs: {
            screen: 5.7,
            screen_type: `lcd`,
            os: `android`,
            main_camera: `Chính 13 MP & Phụ 2 MP`,
            fron_camera: `5 mp`,
            cpu: `Snapdragon 439 8 nhân`,
            ram: `2 gb`,
            rom: `16 gb`,
            battery: `3000 mAh`,
            sim: `2 nano sim`,
        }
    },
    {
        name: `iPhone 7`,
        imageUrl: `"./media/images/iphone-7.jpg"`,
        release_year: 2016,
        brand: `apple`,
        price: `8.990.000 vnd`,
        price_number: 8990000,
        promotions: [`Mua online thêm quà: Giảm giá 1,000,000đ`, `Giảm giá 500,000đ`, `Lên đời iPhone thời thượng, tài trợ đổi mới 3,000,000đ`, `Tặng phụ kiện sạc apple chính hãng`],
        specs: {
            screen: 4.7,
            screen_type: `lcd`,
            os: `ios`,
            main_camera: `Chính 12 MP`,
            fron_camera: `7 mp`,
            cpu: `Apple A10 Fusion 4 nhân`,
            ram: `2 gb`,
            rom: `32 gb`,
            battery: `1960 mAh`,
            sim: `1 nano sim`,
        }
    },
    {
        name: `iPhone Xs`,
        imageUrl: `"./media/images/iphone-xs-gold.jpg"`,
        release_year: 2018,
        brand: `apple`,
        price: `19.990.000 vnd`,
        price_number: 19990000,
        promotions: [`Mua online thêm quà: Giảm giá 1,000,000đ`, `Giảm giá 500,000đ`, `Lên đời iPhone thời thượng, tài trợ đổi mới 3,000,000đ`],
        specs: {
            screen: 5.8,
            screen_type: `oled`,
            os: `ios`,
            main_camera: `Chính 12 MP & Phụ 12 MP`,
            fron_camera: `7 mp`,
            cpu: `Apple A12 Bionic 6 nhân`,
            ram: `4 gb`,
            rom: `64 gb`,
            battery: `2658 mAh`,
            sim: `1 nano sim`,
        }
    },
    {
        name: `Galaxy A31`,
        imageUrl: `"./media/images/samsung-galaxy-a31.jpg"`,
        release_year: 2020,
        brand: `samsung`,
        price: `6.490.000 vnd`,
        price_number: 6490000,
        promotions: [`Lên đời Samsung sành điệu, tài trợ đổi mới 500,000đ`, `Tặng suất mua Đồng hồ Samsung Active 2 giảm đến 35%, Watch 3 giảm 25% (không kèm KM khác).`, `Tặng 2 suất mua Đồng hồ thời trang giảm 40% (không áp dụng thêm khuyến mãi khác)`],
        specs: {
            screen: 6.4,
            screen_type: `super amoled`,
            os: `android`,
            main_camera: `Chính 48 MP & Phụ 8 MP, 5 MP, 5 MP`,
            fron_camera: `20 mp`,
            cpu: `MediaTek MT6768 8 nhân (Helio P65)`,
            ram: `6 gb`,
            rom: `128 gb`,
            battery: `5000 mAh`,
            sim: `2 nano sim`,
        }
    },
    {
        name: `Galaxy A20s`,
        imageUrl: `"./media/images/samsung-galaxy-a20s.jpg"`,
        release_year: 2020,
        brand: `samsung`,
        price: `5.390.000 vnd`,
        price_number: 5390000,
        promotions: [`Tặng suất mua Đồng hồ Samsung Active 2 giảm đến 35%, Watch 3 giảm 25% (không kèm KM khác).`, `Tặng 2 suất mua Đồng hồ thời trang giảm 40% (không áp dụng thêm khuyến mãi khác)`, `Phụ kiện mua kèm giảm 20% (không áp dụng đồng thời phụ kiện hãng, KM khác)`],
        specs: {
            screen: 6.5,
            screen_type: `super amoled`,
            os: `android`,
            main_camera: `Chính 13 MP & Phụ 8 MP, 5 MP`,
            fron_camera: `8 mp`,
            cpu: `	Snapdragon 450 8 nhân`,
            ram: `4 gb`,
            rom: `64 gb`,
            battery: `4000 mAh`,
            sim: `2 nano sim`,
        }
    },
]