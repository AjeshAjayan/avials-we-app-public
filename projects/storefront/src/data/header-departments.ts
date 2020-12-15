import { DepartmentsLink } from '../app/interfaces/departments-link';

export const departments: DepartmentsLink[] = [
    {
        title: 'Food & Beverages',
        url: '/shop',
        submenu: {
            type: 'megamenu',
            size: 'xl',
            image: 'assets/images/departments/departments-2.jpg',
            columns: [
                {
                    size: '1of5',
                    links: [
                        {
                            title: 'Body Parts',
                            url: '/shop',
                            links: [
                                {title: 'Bumpers', url: '/shop'},
                                {title: 'Hoods', url: '/shop'},
                                {title: 'Grilles', url: '/shop'},
                                {title: 'Fog Lights', url: '/shop'},
                                {title: 'Door Handles', url: '/shop'},
                                {title: 'Car Covers', url: '/shop'},
                                {title: 'Tailgates', url: '/shop'},
                            ],
                        },
                        {title: 'Suspension', url: '/shop'},
                        {title: 'Steering', url: '/shop'},
                        {title: 'Fuel Systems', url: '/shop'},
                        {title: 'Transmission', url: '/shop'},
                        {title: 'Air Filters', url: '/shop'},
                    ],
                },
                {
                    size: '1of5',
                    links: [
                        {
                            title: 'Headlights & Lighting',
                            url: '/shop',
                            links: [
                                {title: 'Headlights', url: '/shop'},
                                {title: 'Tail Lights', url: '/shop'},
                                {title: 'Fog Lights', url: '/shop'},
                                {title: 'Turn Signals', url: '/shop'},
                                {title: 'Switches & Relays', url: '/shop'},
                                {title: 'Corner Lights', url: '/shop'},
                            ],
                        },
                        {
                            title: 'Brakes & Suspension',
                            url: '/shop',
                            links: [
                                {title: 'Brake Discs', url: '/shop'},
                                {title: 'Wheel Hubs', url: '/shop'},
                                {title: 'Air Suspension', url: '/shop'},
                                {title: 'Ball Joints', url: '/shop'},
                                {title: 'Brake Pad Sets', url: '/shop'},
                            ],
                        },
                    ],
                },
                {
                    size: '1of5',
                    links: [
                        {
                            title: 'Interior Parts',
                            url: '/shop',
                            links: [
                                {title: 'Floor Mats', url: '/shop'},
                                {title: 'Gauges', url: '/shop'},
                                {title: 'Consoles & Organizers', url: '/shop'},
                                {title: 'Mobile Electronics', url: '/shop'},
                                {title: 'Steering Wheels', url: '/shop'},
                                {title: 'Cargo Accessories', url: '/shop'},
                            ],
                        },
                        {
                            title: 'Engine & Drivetrain',
                            url: '/shop',
                            links: [
                                {title: 'Air Filters', url: '/shop'},
                                {title: 'Oxygen Sensors', url: '/shop'},
                                {title: 'Heating', url: '/shop'},
                                {title: 'Exhaust', url: '/shop'},
                                {title: 'Cranks & Pistons', url: '/shop'},
                            ],
                        },
                    ],
                },
                {
                    size: '1of5',
                    links: [
                        {
                            title: 'Tools & Garage',
                            url: '/shop',
                            links: [
                                {title: 'Repair Manuals', url: '/shop'},
                                {title: 'Car Care', url: '/shop'},
                                {title: 'Code Readers', url: '/shop'},
                                {title: 'Tool Boxes', url: '/shop'},
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        title: 'Services Directory', 
        url: '/shop',
        submenu: {
            type: 'megamenu',
            size: 'lg',
            image: 'assets/images/departments/departments-1.jpg',
            columns: [
                {
                    size: 3,
                    links: [
                        {
                            title: 'Body Parts',
                            url: '/shop',
                            links: [
                                {title: 'Bumpers', url: '/shop'},
                                {title: 'Hoods', url: '/shop'},
                                {title: 'Grilles', url: '/shop'},
                                {title: 'Fog Lights', url: '/shop'},
                                {title: 'Door Handles', url: '/shop'},
                                {title: 'Car Covers', url: '/shop'},
                                {title: 'Tailgates', url: '/shop'},
                            ],
                        },
                        {title: 'Suspension', url: '/shop'},
                        {title: 'Steering', url: '/shop'},
                        {title: 'Fuel Systems', url: '/shop'},
                        {title: 'Transmission', url: '/shop'},
                        {title: 'Air Filters', url: '/shop'},
                    ],
                },
                {
                    size: 3,
                    links: [
                        {
                            title: 'Headlights & Lighting',
                            url: '/shop',
                            links: [
                                {title: 'Headlights', url: '/shop'},
                                {title: 'Tail Lights', url: '/shop'},
                                {title: 'Fog Lights', url: '/shop'},
                                {title: 'Turn Signals', url: '/shop'},
                                {title: 'Switches & Relays', url: '/shop'},
                                {title: 'Corner Lights', url: '/shop'},
                            ],
                        },
                        {
                            title: 'Brakes & Suspension',
                            url: '/shop',
                            links: [
                                {title: 'Brake Discs', url: '/shop'},
                                {title: 'Wheel Hubs', url: '/shop'},
                                {title: 'Air Suspension', url: '/shop'},
                                {title: 'Ball Joints', url: '/shop'},
                                {title: 'Brake Pad Sets', url: '/shop'},
                            ],
                        },
                    ],
                },
                {
                    size: 3,
                    links: [
                        {
                            title: 'Interior Parts',
                            url: '/shop',
                            links: [
                                {title: 'Floor Mats', url: '/shop'},
                                {title: 'Gauges', url: '/shop'},
                                {title: 'Consoles & Organizers', url: '/shop'},
                                {title: 'Mobile Electronics', url: '/shop'},
                                {title: 'Steering Wheels', url: '/shop'},
                                {title: 'Cargo Accessories', url: '/shop'},
                            ],
                        },
                    ],
                },
                {
                    size: 3,
                    links: [
                        {
                            title: 'Tools & Garage',
                            url: '/shop',
                            links: [
                                {title: 'Repair Manuals', url: '/shop'},
                                {title: 'Car Care', url: '/shop'},
                                {title: 'Code Readers', url: '/shop'},
                                {title: 'Tool Boxes', url: '/shop'},
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        title: ' Buy | Sale | Rent | Lease',
        url: '/shop',
        submenu: {
            type: 'megamenu',
            size: 'md',
            image: 'assets/images/departments/departments-3.jpg',
            columns: [
                {
                    size: 4,
                    links: [
                        {
                            title: 'Body Parts',
                            url: '/shop',
                            links: [
                                {title: 'Bumpers', url: '/shop'},
                                {title: 'Hoods', url: '/shop'},
                                {title: 'Grilles', url: '/shop'},
                                {title: 'Fog Lights', url: '/shop'},
                                {title: 'Door Handles', url: '/shop'},
                                {title: 'Car Covers', url: '/shop'},
                                {title: 'Tailgates', url: '/shop'},
                            ],
                        },
                        {title: 'Suspension', url: '/shop'},
                        {title: 'Steering', url: '/shop'},
                        {title: 'Fuel Systems', url: '/shop'},
                        {title: 'Transmission', url: '/shop'},
                        {title: 'Air Filters', url: '/shop'},
                    ],
                },
                {
                    size: 4,
                    links: [
                        {
                            title: 'Headlights & Lighting',
                            url: '/shop',
                            links: [
                                {title: 'Headlights', url: '/shop'},
                                {title: 'Tail Lights', url: '/shop'},
                                {title: 'Fog Lights', url: '/shop'},
                                {title: 'Turn Signals', url: '/shop'},
                                {title: 'Switches & Relays', url: '/shop'},
                                {title: 'Corner Lights', url: '/shop'},
                            ],
                        },
                        {
                            title: 'Brakes & Suspension',
                            url: '/shop',
                            links: [
                                {title: 'Brake Discs', url: '/shop'},
                                {title: 'Wheel Hubs', url: '/shop'},
                                {title: 'Air Suspension', url: '/shop'},
                                {title: 'Ball Joints', url: '/shop'},
                                {title: 'Brake Pad Sets', url: '/shop'},
                            ],
                        },
                    ],
                },
                {
                    size: 4,
                    links: [
                        {
                            title: 'Interior Parts',
                            url: '/shop',
                            links: [
                                {title: 'Floor Mats', url: '/shop'},
                                {title: 'Gauges', url: '/shop'},
                                {title: 'Consoles & Organizers', url: '/shop'},
                                {title: 'Mobile Electronics', url: '/shop'},
                            ],
                        },
                    ],
                },
            ],
        },
    },
   
    {
        title: 'Agriculture & Farming',
        url: '/shop',
        submenu: {
            type: 'megamenu',
            size: 'nl',
            image: 'assets/images/departments/departments-4.jpg',
            columns: [
                {
                    size: 6,
                    links: [
                        {
                            title: 'Body Parts',
                            url: '/shop',
                            links: [
                                {title: 'Bumpers', url: '/shop'},
                                {title: 'Hoods', url: '/shop'},
                                {title: 'Grilles', url: '/shop'},
                                {title: 'Fog Lights', url: '/shop'},
                                {title: 'Door Handles', url: '/shop'},
                                {title: 'Car Covers', url: '/shop'},
                                {title: 'Tailgates', url: '/shop'},
                            ],
                        },
                        {title: 'Suspension', url: '/shop'},
                        {title: 'Steering', url: '/shop'},
                        {title: 'Fuel Systems', url: '/shop'},
                        {title: 'Transmission', url: '/shop'},
                        {title: 'Air Filters', url: '/shop'},
                    ],
                },
                {
                    size: 6,
                    links: [
                        {
                            title: 'Headlights & Lighting',
                            url: '/shop',
                            links: [
                                {title: 'Headlights', url: '/shop'},
                                {title: 'Tail Lights', url: '/shop'},
                                {title: 'Fog Lights', url: '/shop'},
                                {title: 'Turn Signals', url: '/shop'},
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        title: 'Shops & Units',
        url: '/shop',
        submenu: {
            type: 'megamenu',
            size: 'nl',
            image: 'assets/images/departments/departments-4.jpg',
            columns: [
                {
                    size: 6,
                    links: [
                        {
                            title: 'Body Parts',
                            url: '/shop',
                            links: [
                                {title: 'Bumpers', url: '/shop'},
                                {title: 'Hoods', url: '/shop'},
                                {title: 'Grilles', url: '/shop'},
                                {title: 'Fog Lights', url: '/shop'},
                                {title: 'Door Handles', url: '/shop'},
                                {title: 'Car Covers', url: '/shop'},
                                {title: 'Tailgates', url: '/shop'},
                            ],
                        },
                        {title: 'Suspension', url: '/shop'},
                        {title: 'Steering', url: '/shop'},
                        {title: 'Fuel Systems', url: '/shop'},
                        {title: 'Transmission', url: '/shop'},
                        {title: 'Air Filters', url: '/shop'},
                    ],
                },
                {
                    size: 6,
                    links: [
                        {
                            title: 'Headlights & Lighting',
                            url: '/shop',
                            links: [
                                {title: 'Headlights', url: '/shop'},
                                {title: 'Tail Lights', url: '/shop'},
                                {title: 'Fog Lights', url: '/shop'},
                                {title: 'Turn Signals', url: '/shop'},
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        title: 'Drivers & Taxi',
        url: '/shop',
        submenu: {
            type: 'megamenu',
            size: 'nl',
            image: 'assets/images/departments/departments-4.jpg',
            columns: [
                {
                    size: 6,
                    links: [  
                        {title: 'Auto Rickshaw', url: '/shop'},
                        {
                            title: 'Body Parts',
                            url: '/shop',
                            links: [
                                {title: 'Bumpers', url: '/shop'},
                                {title: 'Hoods', url: '/shop'},
                                {title: 'Grilles', url: '/shop'},
                                {title: 'Fog Lights', url: '/shop'},
                                {title: 'Door Handles', url: '/shop'},
                                {title: 'Car Covers', url: '/shop'},
                                {title: 'Tailgates', url: '/shop'},
                            ],
                        },   
                      
                        {title: 'Wedding Car Rental', url: '/shop'},
                        {title: 'Self Drive Car Rental', url: '/shop'},
                        {title: 'Luxury Car Rental', url: '/shop'},
                        {title: 'Transmission', url: '/shop'},
                     
                    ],
                },
                {
                    size: 6,
                    links: [
                        {
                            title: 'Headlights & Lighting',
                            url: '/shop',
                            links: [
                                {title: 'Headlights', url: '/shop'},
                                {title: 'Tail Lights', url: '/shop'},
                                {title: 'Fog Lights', url: '/shop'},
                                {title: 'Turn Signals', url: '/shop'},
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        title: 'Building & Construction',
        url: '/shop',
        submenu: {
            type: 'megamenu',
            size: 'xl',
            image: 'assets/images/departments/builder.jpg',
            columns: [
                {
                    size: '1of5',
                    links: [
                        {
                            title: 'Carpenter',
                            url: '/shop',
                            links: [
                                {title: 'Apprentice', url: '/shop'},
                                {title: 'Carpenter', url: '/shop'},
                                {title: 'Framing Carpenter', url: '/shop'},
                                {title: 'Dry Wall Finisher', url: '/shop'},
                                {title: 'Dry Wall Installer', url: '/shop'},
                                {title: 'Plasterer', url: '/shop'},
                                {title: 'Joiner', url: '/shop'},
                            ],
                        },
                        
                        {
                            title: 'Electricians',
                            url: '/shop',
                            links: [
                                {title: 'Apprentice', url: '/shop'},
                                {title: 'Electrician', url: '/shop'},
                                {title: 'Journeyman Electrician', url: '/shop'},
                                {title: 'Master Electrician', url: '/shop'}, 
                            ],
                        },
                        {
                            title: 'Exterior Installations',
                            url: '/shop',
                            links: [
                                {title: 'Roofer', url: '/shop'},
                                {title: 'Insulation Specialist', url: '/shop'},
                                {title: 'Siding Contractor', url: '/shop'},
                                {title: 'Solar Photovoltaic Installer', url: '/shop'}, 
                            ],
                        },
                    ],
                },
                {
                    size: '1of5',
                    links: [
                        {
                            title: 'Elevator Mechanic',
                            url: '/shop',
                            links: [
                                {title: 'Elevator Installer', url: '/shop'},
                                {title: 'Elevator Repair', url: '/shop'}, 
                            ],
                        },
                        {
                            title: 'Engineer',
                            url: '/shop',
                            links: [
                                {title: 'Assistant Project Manager', url: '/shop'},
                                {title: 'Building Inspector', url: '/shop'},
                                {title: 'Civil Engineer', url: '/shop'},
                                {title: 'Superintendent', url: '/shop'},
                                {title: 'Surveyor', url: '/shop'},
                                {title: 'Field Engineer', url: '/shop'},
                                {title: 'Inspector', url: '/shop'},
                                {title: 'Planner', url: '/shop'},
                                {title: 'Construction Engineer', url: '/shop'},
                            ],
                        },
                        {
                            title: 'Equipment Operators',
                            url: '/shop',
                            links: [
                                {title: 'Crane Operator', url: '/shop'},
                                {title: 'Signal Worker', url: '/shop'},
                                {title: 'Equipment Operator', url: '/shop'},
                                {title: 'Heavy Equipment Operator', url: '/shop'}, 
                            ],
                        },
                    ],
                },
                {
                    size: '1of5',
                    links: [
                        
                       
                        {
                            title: 'Masonry Workers',
                            url: '/shop',
                            links: [
                                {title: 'Concrete Laborers', url: '/shop'},
                                {title: 'Mason', url: '/shop'}, 
                            ],
                        },
                        {
                            title: 'Site Management',
                            url: '/shop',
                            links: [ 
                        {title: 'Purchasing Coordinator', url: '/shop'},
                        {title: 'Project Assistant', url: '/shop'},
                        {title: 'Project Manager', url: '/shop'},
                        {title: 'Safety Director', url: '/shop'},
                        {title: 'Safety Manager', url: '/shop'},
                        {title: 'Scheduler', url: '/shop'},
                        {title: 'Site Manager', url: '/shop'},
                        {title: 'Construction Assistant', url: '/shop'},
                        {title: 'Construction Coordinator', url: '/shop'},
                        {title: 'Construction Foreman', url: '/shop'},
                        {title: 'Construction Manager', url: '/shop'},
                        {title: 'Construction Superintendent', url: '/shop'},
                        {title: 'Construction Supervisor', url: '/shop'},
                        {title: 'Contract Administrator', url: '/shop'},
                        {title: 'Contract Manager', url: '/shop'},
                        {title: 'Estimator', url: '/shop'},
                    ],
                },
                    ],
                },
                {
                    size: '1of5',
                    links: [
                        {
                            title: 'Plumbers',
                            url: '/shop',
                            links: [
                                {title: 'Master Plumber', url: '/shop'},
                                {title: 'Plumber', url: '/shop'},
                                {title: 'Boilermaker', url: '/shop'},
                                {title: 'Pipe Fitter', url: '/shop'},
                            ],
                        },
                        {
                            title: 'Welder',
                            url: '/shop',
                            links: [
                                {title: 'Welder', url: '/shop'},
                                {title: 'Iron worker', url: '/shop'}, 
                            ],
                        },
                        {
                            title: 'Laborers and Helpers',
                            url: '/shop',
                            links: [
                                {title: 'Laborer', url: '/shop'},
                                {title: 'General Laborer', url: '/shop'},
                                {title: 'Painter', url: '/shop'},
                                {title: 'Construction Worker', url: '/shop'},
                                {title: 'Ceiling Tile Installer', url: '/shop'}, 
                            ],
                        },



                    ],
                },
            ],
        },
    },
    {
        title: 'Education & Training',
        url: '/shop',
        submenu: {
            type: 'megamenu',
            size: 'sm',
            columns: [
                {
                    size: 12,
                    links: [
                        {
                            title: 'Body Parts',
                            url: '/shop',
                            links: [
                                {title: 'Bumpers', url: '/shop'},
                                {title: 'Hoods', url: '/shop'},
                                {title: 'Grilles', url: '/shop'},
                                {title: 'Fog Lights', url: '/shop'},
                                {title: 'Door Handles', url: '/shop'},
                                {title: 'Car Covers', url: '/shop'},
                                {title: 'Tailgates', url: '/shop'},
                            ],
                        },
                        {title: 'Suspension', url: '/shop'},
                        {title: 'Steering', url: '/shop'},
                        {title: 'Fuel Systems', url: '/shop'},
                        {title: 'Transmission', url: '/shop'},
                        {title: 'Air Filters', url: '/shop'},
                    ],
                },
            ],
        },
    },
    // {title: 'Clutches', url: '/shop'},
    // {title: 'Fuel Systems', url: '/shop'},
    // {title: 'Steering', url: '/shop'},
    // {title: 'Suspension', url: '/shop'},
    // {title: 'Body Parts', url: '/shop'},
    {title: 'Medical & Health', url: '/shop'},
    {
        title: 'Tour Packages',
        url: '/shop',
        submenu: {
            type: 'megamenu',
            size: 'md',
            image: 'assets/images/departments/departments-3.jpg',
            columns: [
                {
                    size: 4,
                    links: [
                        {
                            title: 'Holidays by Interest',
                            url: '/shop',
                            links: [
                                {title: 'Wildlife', url: '/shop'},
                                {title: 'Adventure', url: '/shop'},
                                {title: 'Honeymoon', url: '/shop'},
                                {title: 'Beach', url: '/shop'},
                                {title: 'Pilgrimage', url: '/shop'},
                                {title: 'Hill Station', url: '/shop'},
                                {title: 'Heritage Tours', url: '/shop'},
                                {title: 'Cultural', url: '/shop'},
                                {title: 'Special Interes', url: '/shop'},
                            ],
                        },
                        {title: 'Suspension', url: '/shop'},
                        {title: 'Steering', url: '/shop'},
                       
                    ],
                },
                {
                    size: 4,
                    links: [
                        {
                            title: 'Packages by State',
                            url: '/shop',
                            links: [
                                {title: 'Headlights', url: '/shop'},
                                {title: 'Tail Lights', url: '/shop'},
                                {title: 'Fog Lights', url: '/shop'},
                                {title: 'Turn Signals', url: '/shop'},
                                {title: 'Switches & Relays', url: '/shop'},
                                {title: 'Corner Lights', url: '/shop'},
                            ],
                        },
                        {
                            title: 'Brakes & Suspension',
                            url: '/shop',
                            links: [
                                {title: 'Brake Discs', url: '/shop'},
                                {title: 'Wheel Hubs', url: '/shop'},
                                {title: 'Air Suspension', url: '/shop'},
                                {title: 'Ball Joints', url: '/shop'},
                                {title: 'Brake Pad Sets', url: '/shop'},
                            ],
                        },
                    ],
                },
                {
                    size: 4,
                    links: [
                        {
                            title: 'Interior Parts',
                            url: '/shop',
                            links: [
                                {title: 'Floor Mats', url: '/shop'},
                                {title: 'Gauges', url: '/shop'},
                                {title: 'Consoles & Organizers', url: '/shop'},
                                {title: 'Mobile Electronics', url: '/shop'},
                            ],
                        },
                    ],
                },
            ],
        },
    },
];
