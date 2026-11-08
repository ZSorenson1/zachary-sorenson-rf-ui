import { AddCircleIcon, ArrowIcon, AttendeeIcon, LaptopIcon } from 'assets';

export const event = {
    name: 'RainFocus Summit',
    date: 'December 15th',
    locationShort: 'Lehi, UT',
    location: 'Lehi, Utah',
    userInitials: 'FL',
};

export const navItems = [
    { id: 'guide', label: 'Guide' },
    {
        id: 'attendees',
        label: 'Attendees',
        children: ['Attendees', 'Attendee types', 'Packages', 'Reg codes', 'Discounts'],
    },
    { id: 'content', label: 'Content' },
    { id: 'exhibitors', label: 'Exhibitors' },
];

const placeholder =
    'Description that explains the value goes here. Description that explains the value goes here.';

const registrationCard = {
    icon: ArrowIcon,
    title: 'Attendee Registration',
    description: 'Start by creating a general registration workflow',
};

export const attendeeModule = {
    id: 'attendee',
    title: 'Attendee',
    icon: AttendeeIcon,
    steps: [
        {
            id: 'base-settings',
            label: 'Base settings.',
            settings: [
                { id: 'general', title: 'General', description: 'Define Attendee types & attributes' },
                { id: 'setting-2', title: 'Title', description: placeholder },
                { id: 'setting-3', title: 'Title', description: placeholder },
            ],
        },
        {
            id: 'registration-workflows',
            label: 'Build registration workflows.',
            cards: [
                { id: 'workflow-1', ...registrationCard },
                { id: 'workflow-2', ...registrationCard },
                { id: 'workflow-3', ...registrationCard },
                {
                    id: 'add-workflow',
                    icon: AddCircleIcon,
                    variant: 'add',
                    description: 'Add Registration Workflow',
                },
            ],
        },
        {
            id: 'post-registration',
            label: 'Design post-registration experiences.',
            cards: [
                {
                    id: 'attendee-portal',
                    icon: LaptopIcon,
                    title: 'Attendee Portal',
                    description: 'Manage the portal that attendees will see after they’ve registered for your event.',
                },
            ],
        },
    ],
};
