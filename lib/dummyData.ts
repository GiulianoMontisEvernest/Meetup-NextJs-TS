export interface MeetupItemProps {
    id: string;
    image: string;
    title: string;
    address: string;
    description: string;
}

export const dummyData: MeetupItemProps[] = [
    {
        id: 'm1',
        title: 'First Meetup',
        image: 'https://images.unsplash.com/photo-1646986601330-3c8c2f6746ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80',
        address: 'street 1, 21423 Los Angeles, USA',
        description: 'wonderful meetup in Los Angeles'
    },
    {
        id: 'm2',
        title: 'Second Meetup',
        image: 'https://images.unsplash.com/photo-1646939613522-69f702ce6479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2264&q=80',
        address: 'street 2, 21423 New York, USA',
        description: 'wonderful meetup in New York'
    },
    {
        id: 'm3',
        title: 'Third Meetup',
        image: 'https://images.unsplash.com/photo-1646981222063-d1ec88f614e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2264&q=80',
        address: 'Via E De Nicola 11, 21423 Oristano, Italy',
        description: 'wonderful meetup in Oristano'
    },
    {
        id: 'm4',
        title: 'Forth Meetup',
        image: 'https://images.unsplash.com/photo-1646942333824-eb349169f7f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2264&q=80',
        address: 'strasse 11, 21423 Berlin, Germany',
        description: 'wonderful meetup in Berlin'
    },
]