import { CategoryDef } from '../interfaces/category-def';
import { BaseCategory, BlogCategory, Category, ShopCategory } from '../../app/interfaces/category';

let lastId = 0;

function makeShopCategory(def: CategoryDef, parent: ShopCategory): ShopCategory {
    return {
        id: ++lastId,
        type: 'shop',
        name: def.name,
        slug: def.slug,
        image: def.image,
        items: def.items,
        parent,
        children: [],
        layout: def.layout ? def.layout : 'products',
        customFields: {},
    };
}

function makeBlogCategory(def: CategoryDef, parent: BlogCategory): BlogCategory {
    return {
        id: ++lastId,
        type: 'blog',
        name: def.name,
        slug: def.slug,
        image: def.image,
        items: def.items,
        parent,
        children: [],
        customFields: {},
    };
}

function makeCategories<T extends BaseCategory>(
    makeFn: (def: CategoryDef, parent: T) => T,
    defs: CategoryDef[],
    parent: T = null,
): T[] {
    const categories: T[] = [];

    defs.forEach(def => {
        const category: T = makeFn(def, parent);

        if (def.children) {
            category.children = makeCategories(makeFn, def.children, category);
        }

        categories.push(category);
    });

    return categories;
}

function flatTree<T extends Category>(categories: T[]): T[] {
    let result = [];

    categories.forEach(category => result = [...result, category, ...flatTree(category.children as Category[])]);

    return result;
}

const shopCategoriesDef: CategoryDef[] = [
    {
        name: 'Agriculture, Food & Beverages',
        slug: 'headlights-lighting',
        image: 'assets/images/categories/category-1.jpg',
        items: 131,
        children: [
            {name: 'Cereals & Food Grains', slug: 'turn-signals'},
            {name: 'Milk & Dairy Products', slug: 'fog-lights'}, 
            {name: 'Meat & Poultry Food', slug: 'headlights'}, 
            {name: 'Fresh, Dried & Preserved Vegetables', slug: 'switches-relays'},
            {name: 'Cooking Spices and Masala', slug: 'tail-lights'},
            {name: 'Edible Oil & Allied Products', slug: 'corner-lights'}, 
        ],
    },
    {
        name: 'Transportation & Logistics',
        slug: 'fuel-system',
        image: 'assets/images/categories/category-2.jpg',
        items: 356,
        children: [
            {name: 'Fuel Pumps', slug: 'fuel-pumps'},
            {name: 'Domestic Relocation Service', slug: 'motor-oil'},
            {name: 'Truck Rentals', slug: 'gas-caps'},
            {name: 'Logistics Service', slug: 'fuel-injector'},
            {name: 'Control Motor', slug: 'control-motor'},
        ],
    },
    {
        name: 'Employees, Contractors & Services',
        slug: 'body-parts',
        image: 'assets/images/categories/category-3.jpg',
        items: 54,
        children: [
            {name: 'Bumpers', slug: 'bumpers'},
            {name: 'Hoods', slug: 'hoods'},
            {name: 'Grilles', slug: 'grilles'},
            {name: 'Fog Lights', slug: 'fog-lights'},
            {name: 'Door Handles', slug: 'door-handles'},
        ],
    },
    {
        name: 'Material, Equipment, Goods & Supplies',
        slug: 'interior-parts',
        image: 'assets/images/categories/category-4.jpg',
        items: 274,
        children: [ 
            {name: 'Medical', slug: 'floor-mats'},
            {name: 'Electronics', slug: 'dashboards'},
            {name: 'Electrical', slug: 'seat-covers'},
            {name: 'Sun Shades', slug: 'sun-shades'},
            {name: 'Visors', slug: 'visors'},
            {name: 'Car Covers', slug: 'car-covers'},
            {name: 'Accessories', slug: 'interior-parts-accessories'},
        ],
    },
    {
        name: 'Apparel, Clothing & Garments',
        slug: 'tires-wheels',
        image: 'assets/images/categories/category-5.jpg',
        items: 508,
        children: [
            {name: 'Wheel Covers', slug: 'wheel-covers'},
            {name: 'Brake Kits', slug: 'brake-kits'},
            {name: 'Tire Chains', slug: 'tire-chains'},
            {name: 'Wheel disks', slug: 'wheel-disks'},
            {name: 'Tires', slug: 'tires'},
            {name: 'Sensors', slug: 'sensors'},
            {name: 'Accessories', slug: 'tires-wheels-accessories'},
        ],
    },
    {
        name: 'Education- Coaching & Consulting',
        slug: 'engine-drivetrain',
        image: 'assets/images/categories/category-6.jpg',
        items: 95,
        children: [
            {name: 'Teacher, Trainer, Instructor, Lecturer', slug: 'timing-belts'},
            {name: 'Courses', slug: 'spark-plugs'},
            {name: 'Institute', slug: 'oil-pans'},
            {name: 'Home, Online & Part Time Tutors', slug: 'engine-gaskets'},
            {name: 'Sport & Art', slug: 'oil-filters'},
            {name: 'Civil', slug: 'engine-mounts'},
            {name: 'Accessories', slug: 'engine-drivetrain-accessories'},
        ],
    },
    {
        name: 'Oils & Lubricants',
        slug: 'oils-lubricants',
        image: 'assets/images/categories/category-7.jpg',
        items: 179,
    },
    {
        name: 'Tools & Garage',
        slug: 'tools-garage',
        image: 'assets/images/categories/category-8.jpg',
        items: 106,
    },
    {
        name: 'Antique Store',
        slug: 'antique-store',
        image: 'assets/images/categories/shopping-retail/antique-store/antique-store.jpg',
        items: 5,
    },
    {
        name: 'Apparel & Clothing',
        slug: 'apparel-clothing',
        image: 'assets/images/categories/shopping-retail/apparel-clothing/apparel-clothing.jpg',
        items: 5,
    },
    {
        name: 'Arts & Crafts Store',
        slug: 'arts-crafts-store',
        image: 'assets/images/categories/shopping-retail/arts-crafts-store/arts-crafts-store.jpg',
        items: 5,
    },
    // {
    //     name: 'Auction House',
    //     slug: 'beauty-store',
    //     image: 'assets/images/categories/shopping-retail/beauty-store/beauty-store.jpg',
    //     items: 5,
    // },
    {
        name: 'Beauty Store',
        slug: 'bookstore',
        image: 'assets/images/categories/shopping-retail/beauty-store/beauty-store.jpg',
        items: 5,
    },
     
    {
        name: 'Bookstore',
        slug: 'bookstore',
        image: 'assets/images/categories/shopping-retail/bookstore/bookstore.jpg',
        items: 5,
    },
    {
        name: 'Boutique Store',
        slug: 'boutique-store',
        image: 'assets/images/categories/shopping-retail/boutique-store/boutique-store.jpg',
        items: 5,
    },
    // {
    //     name: 'Collectibles Store',
    //     slug: 'collectibles-store',
    //     image: 'assets/images/categories/shopping-retail/collectibles-store/collectibles-store.jpg',
    //     items: 5,
    // },
    {
        name: 'Cultural Gifts Store',
        slug: 'cultural-gifts-store',
        image: 'assets/images/categories/shopping-retail/cultural-gifts-store/cultural-gifts-store.jpg',
        items: 5,
    },
    {
        name: 'Department Store',
        slug: 'department-store',
        image: 'assets/images/categories/shopping-retail/department-store/department-store.jpg',
        items: 5,
    },
    {
        name: 'Discount Store',
        slug: 'discount-store',
        image: 'assets/images/categories/shopping-retail/discount-store/discount-store.jpg',
        items: 5,
    },
    {
        name: 'Duty-Free Shop',
        slug: 'duty-free-shop',
        image: 'assets/images/categories/shopping-retail/duty-free-shop/duty-free-shop.jpg',
        items: 5,
    }, 
    {
        name: 'Educational Supply Store',
        slug: 'educational-supply-store',
        image: 'assets/images/categories/shopping-retail/educational-supply-store/educational-supply-store.jpg',
        items: 5,
    },
    {
        name: 'Electronics Store',
        slug: 'electronics-store',
        image: 'assets/images/categories/shopping-retail/electronics-store/electronics-store.jpg',
        items: 5,
    },
    {
        name: 'Fabric Store',
        slug: 'fabric-store',
        image: 'assets/images/categories/shopping-retail/fabric-store/fabric-store.jpg',
        items: 5,
    },
    {
        name: 'Fireworks Wholesalers & Retailers',
        slug: 'fireworks',
        image: 'assets/images/categories/shopping-retail/fireworks/fireworks.jpg',
        items: 5,
    }, 
    {
        name: 'Gift Shop',
        slug: 'gift-shop',
        image: 'assets/images/categories/shopping-retail/gift-shop/gift-shop.jpg',
        items: 5,
    },
    {
        name: 'Glass & Mirror Shop',
        slug: 'glass-mirror',
        image: 'assets/images/categories/shopping-retail/glass-mirror/glass-mirror.jpg',
        items: 5,
    }, 
    {
        name: 'Hobby Store',
        slug: 'hobby-store',
        image: 'assets/images/categories/shopping-retail/hobby-store/hobby-store.jpg',
        items: 5,
    },
    {
        name: 'Home & Garden Store',
        slug: 'home-garden-store',
        image: 'assets/images/categories/shopping-retail/home-garden-store/home-garden-store.jpg',
        items: 5,
    },
    {
        name: 'Lottery Retailer',
        slug: 'lottery-retailer',
        image: 'assets/images/categories/shopping-retail/lottery-retailer/lottery-retailer.jpg',
        items: 5,
    },
    {
        name: 'Mattress Wholesaler',
        slug: 'mattress',
        image: 'assets/images/categories/shopping-retail/mattress/mattress.jpg',
        items: 5,
    },
    {
        name: 'Mobile Phone Shop',
        slug: 'mobile-phone-shop',
        image: 'assets/images/categories/shopping-retail/mobile-phone-shop/mobile-phone-shop.jpg',
        items: 5,
    },
    {
        name: 'Movie & Music Store',
        slug: 'movie-music-store',
        image: 'assets/images/categories/shopping-retail/movie-music-store/movie-music-store.jpg',
        items: 5,
    },
    {
        name: 'Moving Supply Store',
        slug: 'moving-supply-store',
        image: 'assets/images/categories/shopping-retail/moving-supply-store/moving-supply-store.jpg',
        items: 5,
    },
    {
        name: 'Musical Instrument Store',
        slug: 'musical-instrument-store',
        image: 'assets/images/categories/shopping-retail/musical-instrument-store/musical-instrument-store.jpg',
        items: 5,
    },
    {
        name: 'Newsstand',
        slug: 'newsstand',
        image: 'assets/images/categories/shopping-retail/newsstand/newsstand.jpg',
        items: 5,
    },
    {
        name: 'Night Market',
        slug: 'night-market',
        image: 'assets/images/categories/shopping-retail/night-market/night-market.jpg',
        items: 5,
    },
    {
        name: 'Office Equipment Store',
        slug: 'office-equipment-store',
        image: 'assets/images/categories/shopping-retail/office-equipment-store/office-equipment-store.jpg',
        items: 5,
    },
    {
        name: 'Outdoor & Sporting Goods Company',
        slug: 'sporting-goods',
        image: 'assets/images/categories/shopping-retail/sporting-goods/sporting-goods.jpg',
        items: 5,
    },
    {
        name: 'Outlet Store',
        slug: 'outlet-store',
        image: 'assets/images/categories/shopping-retail/outlet-store/outlet-store.jpg',
        items: 5,
    },
    {
        name: 'Party Supply & Rental Shop',
        slug: 'party-Supply-rental-shop',
        image: 'assets/images/categories/shopping-retail/party-Supply-rental-shop/party-Supply-rental-shop.jpg',
        items: 5,
    },
    {
        name: 'Pawn Shop',
        slug: 'pawn-shop',
        image: 'assets/images/categories/shopping-retail/pawn-shop/pawn-shop.jpg',
        items: 5,
    },
    {
        name: 'Pet Store',
        slug: 'pet-store',
        image: 'assets/images/categories/shopping-retail/pet-store/pet-store.jpg',
        items: 5,
    },
    {
        name: 'Pop-Up Shop',
        slug: 'pop-up_shop',
        image: 'assets/images/categories/shopping-retail/pop-up_shop/pop-up_shop.jpg',
        items: 5,
    }, 
    {
        name: 'Restaurant Supply Store',
        slug: 'restaurant-supply-store',
        image: 'assets/images/categories/shopping-retail/restaurant-supply-store/restaurant-supply-store.jpg',
        items: 5,
    },
    {
        name: 'Retail Company',
        slug: 'retail-company',
        image: 'assets/images/categories/shopping-retail/retail-company/retail-company.jpg',
        items: 5,
    },
    {
        name: 'Seasonal Store',
        slug: 'seasonal-store',
        image: 'assets/images/categories/shopping-retail/seasonal-store/seasonal-store.jpg',
        items: 5,
    },
    {
        name: 'Shopping Mall',
        slug: 'shopping-mall',
        image: 'assets/images/categories/shopping-retail/shopping-mall/shopping-mall.jpg',
        items: 5,
    },
    {
        name: 'Shopping Service',
        slug: 'shopping-service',
        image: 'assets/images/categories/shopping-retail/shopping-service/shopping-service.jpg',
        items: 5,
    },
    {
        name: 'Souvenir Shop',
        slug: 'shopping-mall',
        image: 'assets/images/categories/shopping-retail/shopping-mall/shopping-mall.jpg',
        items: 5,
    }, 
    {
        name: 'Toy Store',
        slug: 'toy-store',
        image: 'assets/images/categories/shopping-retail/toy-store/toy-store.jpg',
        items: 5,
    },
    {
        name: 'Trophies & Engraving Shop',
        slug: 'trophies-engraving-shop',
        image: 'assets/images/categories/shopping-retail/trophies-engraving-shop/trophies-engraving-shop.jpg',
        items: 5,
    },
    {
        name: 'Video Game Store',
        slug: 'video-game-store',
        image: 'assets/images/categories/shopping-retail/video-game-store/video-game-store.jpg',
        items: 5,
    },
    {
        name: 'Vintage Store',
        slug: 'vintage-Store',
        image: 'assets/images/categories/shopping-retail/vintage-Store/vintage-Store.jpg',
        items: 5,
    },
    {
        name: 'Wholesale & Supply Store',
        slug: 'wholesale-supply-store',
        image: 'assets/images/categories/shopping-retail/wholesale-supply-store/wholesale-supply-store.jpg',
        items: 5,
    },
        
     

   
];

const blogCategoriesDef: CategoryDef[] = [
    {
        name: 'Latest News',
        slug: 'latest-news',
    },
    {
        name: 'Special Offers',
        slug: 'special-offers',
        children: [
            {
                name: 'Spring Sales',
                slug: 'spring-sales',
            },
            {
                name: 'Summer Sales',
                slug: 'summer-sales',
            },
            {
                name: 'Autumn Sales',
                slug: 'autumn-sales',
            },
            {
                name: 'Christmas Sales',
                slug: 'christmas-sales',
            },
            {
                name: 'Other Sales',
                slug: 'other-sales',
            },
        ],
    },
    {
        name: 'New Arrivals',
        slug: 'new-arrivals',
    },
    {
        name: 'Reviews',
        slug: 'reviews',
    },
    {
        name: 'Wheels & Tires',
        slug: 'wheels-tires',
    },
    {
        name: 'Engine & Drivetrain',
        slug: 'engine-drivetrain',
    },
    {
        name: 'Transmission',
        slug: 'transmission',
    },
    {
        name: 'Performance',
        slug: 'performance',
    },
];

export const shopCategoriesTree: ShopCategory[] = makeCategories(makeShopCategory, shopCategoriesDef);

export const shopCategoriesList: ShopCategory[] = flatTree(shopCategoriesTree);

export const blogCategoriesTree: BlogCategory[] = makeCategories(makeBlogCategory, blogCategoriesDef);

export const blogCategoriesList: BlogCategory[] = flatTree(blogCategoriesTree);
