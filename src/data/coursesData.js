const coursesData = [
    {
        level: 'Foundation Courses',
        authority: 'Drishti Computer Education',
        recognition: ['NITI Aayog', 'MCA', 'MSME', 'Startup India', 'ISO'],
        verify: 'Institute Certificate',
        courses: [
            {
                name: 'Basic Computer Course',
                slug: 'basic-computer',
                duration: '3 Months',
                eligibility: 'No qualification required',
                certificate: 'Drishti Computer Education',
                syllabus: [
                    {
                        module: 'Computer Fundamentals',
                        topics: [
                            'Introduction to Computer',
                            'Hardware & Software',
                            'Input / Output Devices',
                            'Memory Concepts'
                        ]
                    },
                    {
                        module: 'Operating System',
                        topics: [
                            'Windows Basics',
                            'File & Folder Management',
                            'Control Panel'
                        ]
                    },
                    {
                        module: 'Office Tools',
                        topics: [
                            'MS Word',
                            'MS Excel (Basics)',
                            'MS PowerPoint'
                        ]
                    },
                    {
                        module: 'Internet',
                        topics: [
                            'Internet Basics',
                            'Email Creation & Usage',
                            'Online Safety'
                        ]
                    }
                ]
            },

            {
                name: 'Typing Mastery (Hindi / English)',
                slug: 'typing',
                duration: '2 Months',
                eligibility: 'Basic literacy',
                certificate: 'Drishti Computer Education',
                syllabus: [
                    {
                        module: 'Typing Basics',
                        topics: [
                            'Keyboard Knowledge',
                            'Finger Placement',
                            'Speed Improvement'
                        ]
                    },
                    {
                        module: 'Practice',
                        topics: [
                            'Hindi Typing Practice',
                            'English Typing Practice',
                            'Accuracy Training'
                        ]
                    }
                ]
            }
        ]
    },
    {
        level: 'Professional Courses',
        authority: 'Drishti Computer Education',
        recognition: [],
        verify: 'Institute Certificate',
        courses: [
            { name: 'Tally Prime', slug: 'tally-prime' },
            { name: 'Tally Prime Advanced with GST', slug: 'tally-gst' }
        ]
    },
    {
        level: 'Diploma Courses',
        authority: 'Gramin Skill Development Mission',
        recognition: ['NSDC', 'DigiLocker'],
        verify: 'NSDC + DigiLocker',
        courses: [
            { name: 'DCA', slug: 'dca' },
            { name: 'ADCA', slug: 'adca' },
            { name: 'PGDCA', slug: 'pgdca' }
        ]
    },
    {
        level: 'IT & Technical Courses',
        authority: 'NSDC',
        recognition: ['Skill India'],
        verify: 'NSDC',
        courses: [
            { name: 'Computer Hardware', slug: 'hardware' },
            { name: 'Networking', slug: 'networking' },
            { name: 'CCNA', slug: 'ccna' }
        ]
    },
    {
        level: 'Cloud Computing',
        authority: 'NSDC',
        recognition: [],
        verify: 'NSDC',
        courses: [
            { name: 'AWS', slug: 'aws' },
            { name: 'Microsoft Azure', slug: 'azure' },
            { name: 'Google Cloud Platform (GCP)', slug: 'gcp' }
        ]
    },
    {
        level: 'Web Development (with AI Tools)',
        authority: 'Industry Oriented',
        recognition: ['NSDC'],
        verify: 'Industry / NSDC',
        courses: [
            { name: 'Frontend Development', slug: 'frontend' },
            { name: 'Backend Development', slug: 'backend' },
            { name: 'Database Development', slug: 'database' }
        ]
    }
]

export default coursesData