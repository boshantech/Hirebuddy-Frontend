import {
    LayoutDashboard,
    CalendarCheck,
    Handshake,
    Users,
    Wrench,
    Megaphone,
    BarChart3,
} from  "lucide-react";



export const sidebarMenu = [
    {
        title: "Dashboard",
        icon:  LayoutDashboard,
        children: [
           {
              title: "Analytics",
              path:  "/dashboard/analytics",
           },
           {
              title: "Live Map",
              path:  "/dashboard/live-map",
           },
        ],
    },

    {
        title: "Bookings",
        icon:  CalendarCheck,
        children: [
           {
              title: "Pending",
              path:  "/bookings/pending",
           },
           {
              title: "Live",
              path:  "/bookings/live",
           },
           {
            title: "History",
            path:  "/bookings/history",
         },
        ],
    },

    {
        title:"Partners",
        icon: Handshake,
        children: [
            {
                title: "Active",
                path: "partners/active",
            },
            {
                title: "Verification",
                path: "partners/verification",
            },
            {
                title: "Payouts",
                path: "partners/payouts",
            },
        ],
    },

    {
        title:"Users",
        icon: Users,
        children: [
            {
                title: "All Users",
                path: "users/all-users",
            },
            {
                title: "Customers",
                path: "users/customers",
            },
            {
                title: "Partners",
                path: "users/partners",
            },
            {
                title: "Support",
                path: "users/support",
            },
            {
                title: "Admin",
                path: "users/admin",
            },
        ],
    },

    {
        title:"Services",
        icon: Wrench,
        children: [
            {
                title: "Categories",
                path: "services/categories",
            },
            {
                title: "Pricing",
                path: "services/pricing",
            },
            {
                title: "Surge",
                path: "services/surge",
            },
        ],
    },

    {
        title:"Marketing",
        icon: Megaphone,
        children: [
            {
                title: "Coupons",
                path: "marketing/coupons",
            },
            {
                title: "Notification",
                path: "marketing/notification",
            },
        ],
    },

    {
        title:"Reports",
        icon: BarChart3,
        children: [
            {
                title: "Sales",
                path: "reports/sales",
            },
            {
                title: "Performance",
                path: "reports/performance",
            },
            {
                title: "Logs",
                path: "reports/logs",
            },
        ],
    },
]