
const DUMMY_IAMGES_URL = `https://mui.com/static/images/avatar`

const getDynamicImage = (val) => {
    return `${DUMMY_IAMGES_URL}/${val}.jpg`
}

const SAMPLE_CHAT = [
    {
        message: 'What evaluation metrics would you use a classification problem?',
        isSender: false,
        type: 'mic',
        userProfile: getDynamicImage(1),
        userName: 'Speaker 3',
        isLoginUser: false
    },
    {
        message: 'For a classification problem, common evaluation metrics include accuracy, precision, recall, F1 score, and ROC-AUC.',
        isSender: true,
        type: 'boat',
        userProfile: getDynamicImage(2),
        userName: 'AI Bot',
        isLoginUser: false
    },
    {
        message: 'Accuracy, precision, recall, F1 score, and ROC-AUC.',
        isSender: true,
        type: 'mic',
        userProfile: getDynamicImage(3),
        userName: 'Me',
        isLoginUser: true
    },
    {
        message: 'Can you Elaborate?',
        isSender: false,
        type: 'mic',
        userProfile: getDynamicImage(4),
        userName: 'Speaker 2',
        isLoginUser: false
    },
    {
        message: 'Answer, \n For classifiation problem, several evaluation metricsccan be used depending on the specific requirements of the problem.',
        isSender: true,
        type: null,
        userProfile: getDynamicImage(5),
        userName: null,
        isLoginUser: false
    }
]

const CHAT_USERS_LIST = [
    {
        id: 1,
        userName: 'SantinelCo. Job Interview',
        time: 'Sat Jan 17 10.00 am',
        userProfile: getDynamicImage(1),
        isOnline: true
    },
    {
        id: 2,
        userName: 'Starbucks',
        time: 'Mon Jan 12 12.30 pm',
        userProfile: getDynamicImage(2),
        isOnline: true
    },
    {
        id: 3,
        userName: 'Meeting Hanna Garski',
        time: 'Mon Jan 12 11.30 am',
        userProfile: getDynamicImage(3),
        isOnline: true
    },
    {
        id: 4,
        userName: 'Call W Cohen',
        time: 'Mon Jan 12 10.30 am',
        userProfile: getDynamicImage(4),
        isOnline: true
    },
    {
        id: 5,
        userName: 'Jan Orchard',
        time: 'Mon Jan 11 12.30 pm',
        userProfile: getDynamicImage(5),
        isOnline: true
    },
    {
        id: 6,
        userName: 'Devide Millar',
        time: 'Sun Jan 11 12.30 pm',
        userProfile: getDynamicImage(6),
        isOnline: true
    },
]

const SAMPLE_CHAT_HISTORY_OF_USERS = [
    {
        userId: 1,
        chat: [
            {
                message: 'What evaluation metrics would you use a classification problem?',
                isSender: false,
                type: 'mic',
                userProfile: getDynamicImage(1),
                userName: 'Speaker 3',
                isLoginUser: false
            },
            {
                message: 'For a classification problem, common evaluation metrics include accuracy, precision, recall, F1 score, and ROC-AUC.',
                isSender: true,
                type: 'boat',
                userProfile: getDynamicImage(2),
                userName: 'AI Bot',
                isLoginUser: false
            },
            {
                message: 'Accuracy, precision, recall, F1 score, and ROC-AUC.',
                isSender: true,
                type: 'mic',
                userProfile: getDynamicImage(3),
                userName: 'Me',
                isLoginUser: true
            },
            {
                message: 'Can you Elaborate?',
                isSender: false,
                type: 'mic',
                userProfile: getDynamicImage(4),
                userName: 'Speaker 2',
                isLoginUser: false
            },
            {
                message: 'Answer, \n For classifiation problem, several evaluation metricsccan be used depending on the specific requirements of the problem.',
                isSender: true,
                type: null,
                userProfile: getDynamicImage(5),
                userName: null,
                isLoginUser: false
            }
        ]
    },
    {
        userId: 2,
        chat: []
    },
    {
        userId: 3,
        chat: [
            {
                message: 'Accuracy, precision, recall, F1 score, and ROC-AUC.',
                isSender: true,
                type: 'mic',
                userProfile: getDynamicImage(3),
                userName: 'Me',
                isLoginUser: true
            },
            {
                message: 'Can you Elaborate?',
                isSender: false,
                type: 'mic',
                userProfile: getDynamicImage(4),
                userName: 'Speaker 2',
                isLoginUser: false
            },
            {
                message: 'Answer, \n For classifiation problem, several evaluation metricsccan be used depending on the specific requirements of the problem.',
                isSender: true,
                type: null,
                userProfile: getDynamicImage(5),
                userName: null,
                isLoginUser: false
            }
        ]
    },
    {
        userId: 4,
        chat: [
            {
                message: 'What evaluation metrics would you use a classification problem?',
                isSender: false,
                type: 'mic',
                userProfile: getDynamicImage(1),
                userName: 'Speaker 3',
                isLoginUser: false
            },
            {
                message: 'For a classification problem, common evaluation metrics include accuracy, precision, recall, F1 score, and ROC-AUC.',
                isSender: true,
                type: 'boat',
                userProfile: getDynamicImage(2),
                userName: 'AI Bot',
                isLoginUser: false
            },
            {
                message: 'Can you Elaborate?',
                isSender: false,
                type: 'mic',
                userProfile: getDynamicImage(4),
                userName: 'Speaker 2',
                isLoginUser: false
            },
            {
                message: 'Answer, \n For classifiation problem, several evaluation metricsccan be used depending on the specific requirements of the problem.',
                isSender: true,
                type: null,
                userProfile: getDynamicImage(5),
                userName: null,
                isLoginUser: false
            }
        ]
    },
    {
        userId: 5,
        chat: [],
    },
    {
        userId: 6,
        chat: [],
    }
]

export { SAMPLE_CHAT, CHAT_USERS_LIST, SAMPLE_CHAT_HISTORY_OF_USERS }