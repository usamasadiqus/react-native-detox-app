import React from 'react';
import DocumentIcon from './../../assets/icons/DocumentIcon';
import InventoryIcon from './../../assets/icons/InventoryIcon';
import LeadsIcon from './../../assets/icons/LeadsIcon';
import ProjectsIcon from './../../assets/icons/ProjectsIcon';
import ReportsIcon from './../../assets/icons/ReportsIcon';
import TeamIcon from './../../assets/icons/TeamIcon';
import TransactionIcon from './../../assets/icons/TransactionIcon';
import Announcement from './../../assets/images/Announcement';
import Project1 from './../../assets/images/Project1';
import Project2 from './../../assets/images/Project2';
import User1 from './../../assets/images/User1';
import User2 from './../../assets/images/User2';
import User3 from './../../assets/images/User3';
import User4 from './../../assets/images/User4';
import User5 from './../../assets/images/User5';
import User6 from './../../assets/images/User6';
import DocumentAnnouncementStack from './../navigations/DocumentAnnouncementStack';
import InventoryStack from './../navigations/InventoryStack';
import LeadStack from './../navigations/LeadStack';
import ProjectStack from './../navigations/ProjectStack';
import ReportStack from './../navigations/ReportStack';
import TeamStack from './../navigations/TeamStack';
import TransactionStack from './../navigations/TransactionStack';
import DashboardStack from '../navigations/DashboardStack';
import DashboardScreen from '../screens/DashboardScreen';

export const DRAWERITEMS: IDrawerItem[] = [
  // {
  //   name: 'DashboardScreen',
  //   icon: <TeamIcon />,
  //   label: 'My Dashboard',
  //   component: DashboardScreen,
  // },
  // {
  //   name: 'Inquiry',
  //   icon: <AlertCircleIcon fill={Colors.black} />,
  //   component: InquiryScreen,
  // },
  // {
  //   name: 'Transaction2Stack',
  //   icon: <TransactionIcon />,
  //   label: 'Transactions 2',
  //   component: Transaction2Stack,
  // },
  {
    name: 'TeamStack',
    icon: <TeamIcon />,
    label: 'Team',
    component: TeamStack,
  },
  {
    name: 'ProjectStack',
    icon: <ProjectsIcon />,
    label: 'Projects',
    component: ProjectStack,
  },
  {
    name: 'LeadStack',
    icon: <LeadsIcon />,
    label: 'Leads',
    component: LeadStack,
  },
  {
    name: 'InventoryStack',
    icon: <InventoryIcon />,
    label: 'Inventory',
    component: InventoryStack,
  },
  {
    name: 'TransactionStack',
    icon: <TransactionIcon />,
    label: 'Transactions',
    component: TransactionStack,
  },
  {
    name: 'ReportStack',
    icon: <ReportsIcon />,
    label: 'Reports',
    component: ReportStack,
  },
  {
    name: 'DocumentsAnnouncementsStack',
    icon: <DocumentIcon />,
    label: 'Documents & \nAnnouncements',
    component: DocumentAnnouncementStack,
  },
];

export const TEAMSDATA: ITeamMember[] = [
  {
    id: '1',
    name: 'Alex Linderson',
    message: 'any news for the lead?',
    time: '2 min ago',
    avatar: <User1 />,
    unreadCount: 1,
  },
  {
    id: '2',
    name: 'Team Brokerage',
    message: "Don't miss to attend the meeting.",
    time: '2 min ago',
    avatar: <User2 />,
    unreadCount: 2,
  },
  {
    id: '3',
    name: 'John Ahraham',
    message: 'Hey! Can you join the meeting?',
    time: '2 min ago',
    avatar: <User3 />,
    unreadCount: 0,
  },
  {
    id: '4',
    name: 'Sabila Sayma',
    message: 'How are you today?',
    time: '2 min ago',
    avatar: <User4 />,
    unreadCount: 0,
  },
  {
    id: '5',
    name: 'John Borino',
    message: 'Have a good day 🌹',
    time: '2 min ago',
    avatar: <User5 />,
    unreadCount: 0,
  },
  {
    id: '6',
    name: 'Angel Dayna',
    message: 'How are you today?',
    time: '2 min ago',
    avatar: <User6 />,
    unreadCount: 0,
  },
];

export const DOCUMENTS = [
  {id: '1', name: 'Loan application.pdf', size: '2.1 MB'},
  {id: '2', name: 'Loan agreement.pdf', size: '2.1 MB'},
  {id: '3', name: 'Contract-to-sell.pdf', size: '2.1 MB'},
  {id: '4', name: 'disclosure agreement.pdf', size: '2.1 MB'},
  {id: '5', name: 'Loan application.pdf', size: '2.1 MB'},
  {id: '6', name: 'Loan agreement.pdf', size: '2.1 MB'},
  {id: '7', name: 'Contract-to-sell.pdf', size: '2.1 MB'},
  {id: '8', name: 'disclosure agreement.pdf', size: '2.1 MB'},
];

export const ANNOUNCEMENTS = [
  {
    id: '1',
    title: 'A celebration of innovation and vision',
    date: 'June 17, 2024',
    image: <Announcement width={400} height={165} />,
    content:
      'On June 17, 2024, the company held a groundbreaking ceremony to mark the commencement of site development activities on the property. It broke ground on a 4-hectare area covered by a Development Permit issued on January 31, 2023. Within this vicinity.',
  },
];

export const PROJECTS: IProject[] = [
  {
    id: '1',
    name: 'Skyline Heights',
    price: 'PHP 1,024,432.50',
    description:
      'Pellentesque a in lectus velit pharetra eget non. Malesuada imperdiet suspendisse sit tempor sodales tincidunt varius etiam cursus.',
    location: 'Catalunan Pequeño, Davao City',
    image: <Project1 />,
  },
  {
    id: '2',
    name: 'Project Real Estate 2',
    price: 'PHP 5,024,432.50',
    description:
      'Malesuada imperdiet suspendisse sit tempor sodales tincidunt varius etiam cursus.',
    location: 'Tagum, Davao City',
    image: <Project2 />,
  },
  {
    id: '3',
    name: 'Skyline Heights',
    price: 'PHP 1,024,432.50',
    description:
      'Pellentesque a in lectus velit pharetra eget non. Malesuada imperdiet suspendisse sit tempor sodales tincidunt varius etiam cursus.',
    location: 'Catalunan Pequeño, Davao City',
    image: <Project1 />,
  },
  {
    id: '4',
    name: 'Project Real Estate 2',
    price: 'PHP 5,024,432.50',
    description:
      'Malesuada imperdiet suspendisse sit tempor sodales tincidunt varius etiam cursus.',
    location: 'Tagum, Davao City',
    image: <Project2 />,
  },
];
