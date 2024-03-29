import React from 'react'
import Hooks from "../../../hooks"
export const NavbarRoutes = () => {
    const { AgentRole, SuperAdmin, Customer } = Hooks();

    const Routes = [
        {
            name: "Area",
            link: '/dashboard/societies',
            visiblity: AgentRole() || SuperAdmin()
        },
        {
            name: "Cummunity",
            link: '/dashboard/phases',
            visiblity: AgentRole() || SuperAdmin()
        },
        {
            name: "Building",
            link: '/dashboard/blocks',
            visiblity: AgentRole() || SuperAdmin()
        },

        {
            name: "Agents",
            link: '/dashboard/agents',
            visiblity: SuperAdmin()
        }, {
            name: "Units",
            link: '/dashboard/properties',
            visiblity: AgentRole() || SuperAdmin()
        },
        {
            name: "Area",
            link: '/societies',
            visiblity: Customer()
        },
        {
            name: "Cummunity",
            link: '/phases',
            visiblity: Customer()
        },
        {
            name: "Building",
            link: '/blocks',
            visiblity: Customer()
        },

        {
            name: "Agents",
            link: '/agents',
            visiblity: Customer() || SuperAdmin()
        }, {
            name: "Units",
            link: '/properties',
            visiblity: Customer()
        }


    ]

    return Routes
}


export const UserDropdownRoutes = () => {
    const { IsUserLoggedIn, AgentRole, SuperAdmin } = Hooks();

    const Routes = [
        {
            name: "Profile",
            link: '/dashboard/profile',
            visiblity: IsUserLoggedIn()
        },
        {
            name: "Add Unit",
            link: '/dashboard/addproperty',
            visiblity: AgentRole() || SuperAdmin()
        }, {
            name: "Payments",
            link: '/dashboard/paymentmethod',
            visiblity: AgentRole() || SuperAdmin()
        }
        , {
            name: "Change Password",
            link: '/dashboard/changepassword',
            visiblity: IsUserLoggedIn()
        }

    ]

    return Routes
}