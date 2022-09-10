/** @jsx jsx */
import { jsx, Container, Box, Image } from 'theme-ui';
import TextFeature from 'components/text-feature';

import FeatureThumb from 'assets/core-feature.png';
import shapePattern from 'assets/shape-pattern2.png';

const data = [{
    // title: 'Smart Jackpots that you may love this anytime & anywhere',
    description:
        `Privacy Policy is a part of our Terms & Conditions, which control and govern the use of our website (“Site”). We highly suggest you to go through the Terms & Conditions, in addition to our Privacy Policy. Before using and accessing Derzam's services, you agree and consent to the collection and use of your personal information as stated therein, as well as the conditions mentioned in the Terms & Conditions.`
},
{
    title: '1. From whom do we collect Personal Data:',
    description:
        'Derzam will collect your personal information from you, or any other stakeholders for business purposes. The parties include:  \nVisitors of our Site browsing, shopping for and purchasing products, requesting information, conducting transactions, or using our Site for other purposes. Stakeholders, including, but not limited to, clients, employees, suppliers, service providers and agents of our clients. '
},
{
    title: '2. Respecting your right to our access of your Data:',
    description:
        'We, at Derzam, respect your privacy. Before any personal data is stored on our Site, you have the right to know the type of information collected by us or any other parties. You will have the right to know how the information will be used, and how the data is collected by us.'
}, {
    title: 'The data provided by you',
    description:
        'Derzam has the right to collect and maintain information that you may enter on our portal, hence you have to give your consent before accessing any of our services. This data includes, but is not limited to, your name, shipping address, payment information, cell phone number, and email ID. You will also provide certain information about yourself when you set up an account on our Site. We might ask you for any necessary information before you sign up for promotions, surveys, newsletters, or any other data to participate with the Site. You may also provide data for posting comments or reviews on our social media pages and/or Site.'
}, {
    title: 'How we automatically collect your data',
    description:
        'Derzam is authorized to collect your data using cookies and any other technology if you view our advertisements or visit the Site. You have the option to disable cookies on your browser, in case you don’t feel safe sharing your private information. However, in some cases, you might not be able to access or use the website if you disable cookies. Through your IP address, we collect information to improve your experience on our Site. Upon visiting our Site, we may collect data about the time, date, usage levels and time spent on Site, the pages you visit, or any other actions taken on the Site. '
}, {
    title: 'The data provided by you',
    description:
        'Derzam has the right to collect and maintain information that you may enter on our portal, hence you have to give your consent before accessing any of our services. This data includes, but is not limited to, your name, shipping address, payment information, cell phone number, and email ID. You will also provide certain information about yourself when you set up an account on our Site. We might ask you for any necessary information before you sign up for promotions, surveys, newsletters, or any other data to participate with the Site. You may also provide data for posting comments or reviews on our social media pages and/or Site.'
}, {
    title: 'Data collected from other Sites and Sources',
    description:
        'We collect your data through other platforms and sources to ensure that our records are correct. These sources include, but are not limited to, shipping carriers, third-party marketing agencies and payment processors. This helps us maintain and further improve the quality of the products and services that we deliver, and also shields our records from fraud. This information will be used in coherence with our Privacy Policy. If you decide to log in to our Site through any social media platform, you will allow us to access, use or store any information that you permit the social media platform to share with us in conformity with the privacy policy that you have agreed upon with the concerned social media platform. We are not in any way associated with, responsible or liable for the privacy practices or content of the social media platform.Other sources such as third-party software and marketing/advertisement services may collect and analyse your information and actions taken on the Site through the use of cookies or similar technology. This is done to improve the user experience through market research, improvement of the user interface and website design in conformity with user needs. '
}, {
    title: '3. Respecting your right to know how we use your Information',
    description:
        'Our privacy policy fully respects your right to know how we use and store your information, and what we and third-parties do with that information. You also have the full right to know how we protect your information.        '
}, {
    title: 'How we use your Information?',
    description:
        `We will never collect any information without your consent, or unless required by law. We only collect and maintain information for legitimate business reasons. To further protect your privacy, you may request us to delete your data; unless it is absolutely necessary for business interests, or requires retention by law.

        We may use your information in the following cases:

      1.  For registration for financial and accounting purposes
       2. For communication with you, or for responding to your inquiries
        3. For newsletters, or for informing you about our products and services, and for promotional/sales events
        4.For administrating our products and services, including the establishment of your account records in our system, or for hosting or storing your information in conformity with the contractual agreements that you have agreed upon
        5. For internal business purposes
        6. For marketing activities such as conducting surveys, or promotional activities.
        7. For communicating with you, we might use your contact number and/or email address if required; such as for providing information regarding our new products or services, or for promotions. These might include automated emails and text messages.

        `
}, {
    title: '',
    description:
        ' If you subscribe to our newsletter, you give your permission and consent for sending you emails and text messages regarding our products, services, and promotions. You may opt-out of our text messages, or unsubscribe to our newsletters through the link provided in our emails. While opting-out of our text messages, data rates may apply. You may also ask any questions using the instructions in the messages. Any other means or words apart from the ones specified in the messages will not be accepted.'
}, {
    title: 'How your information is used by third-parties',
    description:
        `Unless stated in our Privacy Policy, or without your consent, we do not buy, trade, disclose or share information with third-parties. In some cases, however, such as for legitimate business purposes, government investigation, or for lawful purposes; we have the authority to share your personal information. We will never share or sell your personal information with third-parties for the third-party’s marketing purposes. You are required to go through our Terms & Conditions and this Privacy Policy in detail before consenting to anything.

        Only for authorized purposes, third parties may use your information for the purposes mentioned below:

        For our own marketing and promotional purposes, such as working with third-parties to send out newsletters, promotional offers and notices, surveys, or other information regarding the company
        For analysing and collecting information about customers to better understand consumer behaviour, ordering and usage patterns, complaints or other reasons to enhance the customer experience
        `
}, {
    title: '',
    description:
        `  For third-parties to perform business activities on our behalf, such as administration of our Site and attaining marketing data
        For third-parties to conduct financial activities such as conducting transactions, or sending data to financial institutions for the completion of purchases
        For major business purposes such as reorganization, alliance, joint venture, lease, sale, transfer or change of control, or allocation of all or part of our business, stocks or assets
        As far as law is concerned, we are allowed to disclose or use your information for: (a) protection of the company’s rights or assets/property, (b) investigation, prevention and taking action on any illegal activities performed by you on our Site, or for violating our Privacy Policy, and (c) protecting the safety of other Site visitors.
        Unless necessary, we will only provide your minimum and necessary personal information to third-parties. Our third-parties must agree upon our Privacy Policy, and sign a contractual agreement with us before providing or using your personal information (for limited purposes).
        `
}, {
    title: '',
    description:
        `Unless necessary, we will only provide your minimum and necessary personal information to third-parties. Our third-parties must agree upon our Privacy Policy, and sign a contractual agreement with us before providing or using your personal information (for limited purposes).`
},
{
    title: 'Where we store your Information?',
    description:
        `Your information will only be stored on our systems in Pakistan, under high protection and safety systems.

        We will only provide your personal information to third-parties in other countries with your consent, or otherwise required for law. We ensure that this data is secure and provide it only to countries with strong data protection and cybersecurity laws in place.

        `
},
{
    title: 'How your Information is protected',
    description:
        `Derzam has a strict policy of protecting and securing your personal data, both offline and online. We prohibit illegal and unauthorized access to your personal information to maintain and ensure data accuracy, and to guarantee the right use of information. Through the use of technology, we prevent loss, alteration, or misuse of your personal data. For instance, soft copy and electronically collected information is stored on our highly secure servers, and hard copies are maintained in secure lockers. Other measures used for further protection of your data include firewall protection, 2-factor identification, password protection, and other electronic measures.

        Since no data transaction is 100% secure, we strongly recommend you to reach out to us through our “Contact Us” section if you believe that your data is not secure (Refer to Section 7 of our Privacy Policy).
        `
},
{
    title: '4. Respecting your right to our access of your Data',
    description:
        `Upon submission and collection of data on our Site, you have the right to access and control your data. You have the right to opt-out of data collection, or ask us to delete any data that you desire.
        `
},
{
    title: 'Right to access your personal data',
    description:
        `You may request us to access your personal data stored on our system, get information about the relevant source where your information is stored, know the reason(s) for which we collect your information, and to know about the parties that we share your information with. We verify your identity to ensure that your personal data protected. If you request data from us, we will provide it to you in a user-friendly format for easy comprehension. You can also file in a request for data transmission to you or any other party that you wish.
        `
}, {
    title: 'Right to request for Correction or Deletion of your Information',
    description:
        `You may have the right to file a request for the deletion or correction of the information that we gather from you. In order to protect your information for security reasons, we are required to verify your identity through electronic means. In some cases, as required by law, we might not be able to comply with your request, and will let you know in advance if such a situation arises. You also have the right to hinder the processing of your information. After deletion of your account however, you will be unable to restore your account activities, details, and history.
        `
}, {
    title: 'How you can submit your request?',
    description:
        `You can contact our customer support department in case you want to submit a request regarding your right to access, correct or delete your personal information.
        `
}, {
    title: 'Your right to opt-out of our services',
    description:
        `You have the right to opt-out of our services. You also have the right to request to opt-out of any sale or transfer of your information to third-parties. However, your right to opt-out of us sharing information with our essential third-party service providers is not applicable. These are the parties that help us perform our functions properly and need your information to perform that function.
        `
}, {
    title: 'Your right to fair treatment subsequent to opting out',
    description:
        `After opting out, you are free from any sort of discrimination after exercising your rights. We may offer incentives through emails, text messages and newsletters to get customers to use our services, avail our promotional offers, subscribe to our services, or register with us. The incentives may include discounts or any other sales promotions. Participation in our promotional events and offers is voluntary and you may opt-out of these if you wish to do so.
        `
}, {
    title: '5. Third Parties',
    description:
        `Upon submission and collection of data on our Site, you have the right to access and control your data. You have the right to opt-out of data collection, or ask us to delete any data that you desire.
        `
}, {
    title: '6. Changes in our Policy',
    description:
        `Our Privacy Policy may be subject to change due to the rapid changes in the Internet and online activities such as your comments and actions taken on our Site. It may also be changed from time to time due to our need to make our data collection practices more transparent. Upon final revision, and once posted on the Site, the Privacy Policy will come into immediate effect, and you will be informed via the communication medium(s) you provide us. You are kindly requested to go through the revised Policy once updated.
        `
}, {
    title: '7. Contacting us',
    description:
        `If you have any questions or doubts, you can Contact Us via our Site by filling in your details and sending us a message. You can also email us at info@derzam.com or send us a message on WhatsApp. You can find our contact number on the “Contact Us” webpage on our Site. Our customer support representatives will get back to you as speedily as possible.`
}, {
    title: '',
    description:
        ``
},
];
export default function PrivacyText() {
    return (
        <section >
            <Container sx={styles.containerBox}>
                <Box sx={styles.contentBox}>
                    {data.map((data) => (
                        <TextFeature
                            title={data.title}
                            description={data.description}
                        />
                    ))}


                </Box>

            </Container>
        </section>
    );
}

const styles = {
    containerBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: ['wrap', null, null, 'nowrap'],
        pb: [0, 7, 0, null, 7],
    },
    contentBox: {
        flexShrink: 0,
        px: [0, null, '30px', 0],
        textAlign: ['center', null, null, 'left'],
        width: ['100%'],
        pb: ['50px', '60px', null, 0],
        mx: ['auto', null, null, 0],
        '.description': {
            pr: [0, null, 6, 7, 6],
        },
        margin: 100,
    },
    thumbnail: {
        display: 'inline-flex',
        position: 'relative',
        mr: 'auto',
        ml: ['auto', null, null, null, 7],
        '> img': {
            position: 'relative',
            zIndex: 1,
            height: [310, 'auto'],
        },
    },
    shapeBox: {
        position: 'absolute',
        bottom: -65,
        right: -165,
        zIndex: -1,
        display: ['none', 'inline-block', 'none', null, 'inline-block'],
    },
};
